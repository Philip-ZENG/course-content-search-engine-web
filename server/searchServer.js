/** 
 * @description:
 * * This is the server that handles search requests
 * * Receive search key word from client and return search result to client
*/


// * ############### Set Up Express Server ###############
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const morgan = require("morgan");

const app = express();
app.use(morgan("tiny"));
app.use(cors());
app.use(bodyParser.json());


// * ############### Connect to MongoDB Database ###############
const mongoose = require('mongoose');
mongoose.connect("mongodb://127.0.0.1:27017/courseDB");

const tagSchema = new mongoose.Schema ({
  tagID: Number,
  tagName: String,
  neighbors: [Number]
});

// Schema for each page
const pageSchema = new mongoose.Schema ({
  pageID: Number,
  title: String,
  content: String
});

// Schema for each section
const sectionSchema = new mongoose.Schema ({
  sectionID: Number,
  chapter: Number,
  page: [Number],
  tag: [tagSchema],
  tagIDs: [Number],
  content: [pageSchema],
  feedbackScore: { type: Number, default: 0 }
});

// Create a collection which is an instance of the tag schema
const Tag = mongoose.model("Tag", tagSchema);
// Create a colleciton which is an instance of the section schema
const Section = mongoose.model("Section", sectionSchema);
// Create a collection which is an instance of page schema 
const Page = mongoose.model("Page", pageSchema);


// * ############### Search Algorithms ###############
// ! ############### Map Search Word to Decisive Tags ###############

// * Step 1: Get all the pages whose `content` field or `title` field contain a specific search string
async function findPages(searchString) {
  const contentMappedPages = await Page.find({content: {$regex: new RegExp(searchString, 'i')}});
  const titleMappedPages = await Page.find({title: {$regex: new RegExp(searchString, 'i')}});
  return {contentMappedPages, titleMappedPages};
};

// * Step 2: Given an array of page objects, 
//   * find the corresponding sections that contain these pages, compute sections' weighted occurrence frequency
//   * compute the weighted occurrence frequency of tags in these sections
//   * if the page is found in the `content` field of the page, the occurrence weight is 1, otherwise (in `title` field) it is 2
async function findSections(pages, occurrenceWeight, sectionMap, tagMap) {
  // Iterate trough `pages`
  for (let i = 0, pageLen = pages.length; i < pageLen; i++) {
    // find the section that satisfy the condition: the given pageID is in the page array of the section
    const sections = await Section.find({ page: { $elemMatch: { $eq: pages[i].pageID } } });
    if (sections.length > 0) {
      // Count occurrence frequency of sections
      let sectionID = sections[0].sectionID;
      if (sectionMap.has(sectionID)) {
        // If sectionID is already a map key, increment the count
        sectionMap.set(sectionID, sectionMap.get(sectionID) + occurrenceWeight);
      } else {
        // If it's not, add it to the Map with a initial occurrence weight
        sectionMap.set(sectionID, occurrenceWeight);
      };

      // Count occurrence frequency of tags
      let tagIDs = sections[0].tagIDs;
      for (let j = 0, tagIDLen = tagIDs.length; j < tagIDLen; j++) {
        let tagID = tagIDs[j];
        if (tagMap.has(tagID)) {
          // If it is, increment the count
          tagMap.set(tagID, tagMap.get(tagID) + occurrenceWeight);
        } else {
          // If it's not, add it to the Map with a initial occurrence weight
          tagMap.set(tagID, occurrenceWeight);
        };
      };
    };
  };
  return {sectionMap, tagMap};
};

// ! ############### Compute Relevance Score ###############

// * Step 3: Given the tagIDCountMap, determine the tagIDs that has the top `decisiveTagNumber` of highest count value
//  * return a new Map object that contains the top `decisiveTagNumber` of tagIDs (key) and their count value (value)
function findDecisiveTag(tagMap, decisiveTagNumber) {
  // Convert the Map to an array of key-value pairs and sort by count value in descending order
  const sortedPairs = Array.from(tagMap).sort((a, b) => b[1] - a[1]);
  // Create a new Map object from the sorted array
  const decisiveMap = new Map(sortedPairs.slice(0,decisiveTagNumber));
  return decisiveMap;
};

// * Step 4: Given the decisiveMap, find section IDs that contain these tags
//  * return an array of sectionIDs
async function findRelevantSections(decisiveMap) {
  // Create an array to store the sectionID that contains the tags
  var sectionIDArray = [];
  // Iterate through the decisiveMap
  for (const [key, value] of decisiveMap) {
    // find the section that satisfy the condition: the given tagID is in the tag array of the section
    const sections = await Section.find({ tagIDs: {$elemMatch: { $eq: key} }});
    if (sections.length > 0) {
      for (let i = 0, len = sections.length; i < len; i++){
        // Check if the section is already in the array
        if(!sectionIDArray.includes(sections[i].sectionID)){
          sectionIDArray.push(sections[i].sectionID);
        }
      };
    };
  };
  return sectionIDArray;
};

// * Step 5-1: Calculate shortest distance between tags using Dijkstra's algorithm
// Use Dijkstra's algorithm to calculate the shortest distance between two tags, return the distance
// All the tags are represented by its tag ID
// ! If the cost of each edge is not a constant number, the edge cost should be stored in the database
async function Dijkstra(tagIDArray, startTagID){
  var Distance = new Map();
  var LeastCostPath = new Array();

  // Initialization
  LeastCostPath.push(startTagID);
  Distance.set(startTagID, 0);
  const startTag = await Tag.find({tagID: startTagID});
  const startTagNeighborsID = startTag[0].neighbors;
  for (var i = 0; i < tagIDArray.length; i++){
    if (tagIDArray[i] != startTagID){
      if (startTagNeighborsID.includes(tagIDArray[i])) {
        // ! Cost of each edge is assumed to be 1
        Distance.set(tagIDArray[i], 1);
      } else {
        Distance.set(tagIDArray[i], Infinity);
      };
    };
  };

  // Main loop
  while (LeastCostPath.length < tagIDArray.length){
    var minDistance = Infinity;
    var minDistanceTagID = 0;
    for (var i = 0; i < tagIDArray.length; i++){
      // For tag that is not in the least cost path
      if (!LeastCostPath.includes(tagIDArray[i])){
        // Find the tag with the minimum distance from the start tag
        if (Distance.get(tagIDArray[i]) < minDistance){
          minDistance = Distance.get(tagIDArray[i]);
          minDistanceTagID = tagIDArray[i];
        };
      };
    };

    // If minDistance is Infinity, and miniDistanceTagID is 0, it means there is no path to reach the rest of the tags 
    // (No any other connected nodes); Return the results
    if(minDistance == Infinity && minDistanceTagID == 0){
      // console.log("No path to reach the rest of the tags");
      return {Distance, LeastCostPath};
    };

    // Add the tag with the minimum distance to the least cost path
    LeastCostPath.push(minDistanceTagID);
    // Update the distance of the neighbors of the tag with the minimum distance
    const minDistanceTag = await Tag.find({tagID: minDistanceTagID});
    // console.log(minDistanceTag);
    // Get ID of all neighbors of the tag with the minimum distance
    const minDistanceTagNeighborsID = minDistanceTag[0].neighbors;
    for (var i = 0; i < tagIDArray.length; i++){
      // For tag that is not in the least cost path
      if (!LeastCostPath.includes(tagIDArray[i])){
        // Update the distance of the neighbors of the tag with the minimum distance
        if (minDistanceTagNeighborsID.includes(tagIDArray[i])) {
          // New distance is either the old distance or the distance from the start tag to the tag with the minimum distance plus 1
          // ! Cost of each edge is assumed to be 1
          if (Distance.get(tagIDArray[i]) > minDistance + 1){
            // ! Cost of each edge is assumed to be 1
            Distance.set(tagIDArray[i], minDistance + 1);
          };
        };
      };
    };
  };

  return {Distance, LeastCostPath};
};

// * Step 5-2: Calculate the relevance score of each section
async function calculateRelevanceScore(sectionIDArray, decisiveMap){
  // Prepare for Dijkstra algorithm
  const tagCount = await Tag.countDocuments();
  var tagIDArray = Array.from({ length: tagCount }, (value, index) => index + 1);
  var decisiveTagIDArray = Array.from(decisiveMap.keys());
  var sumOfWeightedFrequency = 0;
  for (let key of decisiveMap.keys()) {
    sumOfWeightedFrequency += decisiveMap.get(key);
  };

  // Create a Map to store the sectionID (key) and the relevance score (value)
  var sectionRelevanceScoreMap = new Map();
  
  // ! This works even when multiple decisive tag is used
  // Iterate trough decisiveTagIDArray
  for (let k = 0; k < decisiveTagIDArray.length; k++){

    // Get the shortest distance between the decisive tag and all other tags in the section
    const decisiveTagID = decisiveTagIDArray[k];
    const returns = await Dijkstra(tagIDArray, decisiveTagID);
    const DistanceMap = returns.Distance;
    // console.log("Distance from tag ", decisiveTagID, " to other tags: ", DistanceMap);
    
    // Iterate through the sectionIDArray
    for (let i = 0; i < sectionIDArray.length; i++){
      const sectionID = sectionIDArray[i];
      // Get the section
      const section = await Section.find({sectionID: sectionID});
      // Get the tagIDs of the section
      const tagIDs = section[0].tagIDs;
  
      // Calculate the relevance score
      let relevanceScore = 0;
      for (let j = 0; j < tagIDs.length; j++){
        relevanceScore += 1/(DistanceMap.get(tagIDs[j])+1);
      };

      // For a decisive map with more than 1 tag (key), we need to assign each tag's influence such that it is proportional to the weighted frequecy of the tag
      // the proportional factor is (decisiveMap.get(decisiveTagID)/sumOfWeightedFrequency)
      relevanceScore = (decisiveMap.get(decisiveTagID)/sumOfWeightedFrequency)*(relevanceScore/(tagIDs.length));
      
      // Check if the section is already in the Map
      if (sectionRelevanceScoreMap.has(sectionID)){
        // If the section is already in the Map, add the relevance score to the existing relevance score
        relevanceScore += sectionRelevanceScoreMap.get(sectionID);
        sectionRelevanceScoreMap.set(sectionID, relevanceScore);
      } else {
        // otherwie insert a new sectionID and the relevance score pair in the Map
        sectionRelevanceScoreMap.set(sectionID, relevanceScore);
      };
    };
  };
  return sectionRelevanceScoreMap;
};


// ! ############### User Feedback Mechanism & RankScore Calculation ###############
// * Step 6-1: Update the feedback score of each section
async function updateFeedbackScore(sectionID, isHelpful){
  var result = await Section.find({sectionID: sectionID}).select({feedbackScore:1, _id:0});
  var feedbackScore = result[0].feedbackScore;
  if(isHelpful){
    feedbackScore += 1;
  } else {
    feedbackScore -= 1;
  };
  await Section.updateOne({sectionID: sectionID},{feedbackScore: feedbackScore});
};

// * Helper Function: Random feedback generator
// Generate random feedbacks (true: helpful, false: not helpful)
async function generateRandomFeedback(sectionRelevanceScoreMap, numOfFeedback) {
  const keys = Array.from( sectionRelevanceScoreMap.keys() );
  for (let i=0; i<numOfFeedback; i++) {
    const keyLength = keys.length;
    // select a random key from the sectionRelevanceScoreMap
    const randomIndex = Math.floor(Math.random() * keyLength);
    const key = keys[randomIndex];
    // Give a random feedback
    const isHelpful = Math.random() >= 0.5;
    await updateFeedbackScore(key, isHelpful);
  };
};

// * Step 6-2: Calculate the rank score of each section, rank score = relevance score + feedback score
async function calculateRankScore(sectionRelevanceScoreMap){
  // Create a Map to store the sectionID (key) and the rank score (value)
  var sectionRankScoreMap = new Map();
  // Iterate through the sectionRelevanceScoreMap
  for (let key of sectionRelevanceScoreMap.keys()) {
    // Get the feedback score of the section
    let result = await Section.find({sectionID: key}).select({feedbackScore:1, _id:0});
    let feedbackScore = result[0].feedbackScore;
    // Set an upper bound for the feedback score, upper bound = 100
    if (feedbackScore > 100){
      feedbackScore = 100;
    };
    // Set a lower bound for the feedback score, lower bound = -100
    if (feedbackScore < -100){
      feedbackScore = -100;
    };
    // Calculate the rank score, the influence of the feedback score reflected in rankScore is between -100/300 to 100/300
    let rankScore = sectionRelevanceScoreMap.get(key) + feedbackScore/300;
    // Insert the sectionID and the rank score pair in the Map
    sectionRankScoreMap.set(key, rankScore);
  };
  return sectionRankScoreMap;
};

// ! ############### Rank Sections based on RankScore ###############
// * Step 7: Sort the sections by rank score in descending order
async function sortSections(sectionRankScoreMap){
  // Create an array to store the sectionID
  var rankedSectionIDArray = Array.from(sectionRankScoreMap.keys());
  // Sort the sectionIDArray in descending order
  rankedSectionIDArray.sort(function(a, b){return sectionRankScoreMap.get(b) - sectionRankScoreMap.get(a)});
  return rankedSectionIDArray;
};


// * Main integrated search function
async function search(searchKeyWord) {
  // ! #### Map Search Word to Decisive Tags #####
  const pages = await findPages(searchKeyWord);
  // console.log("contentMappedPages: ");
  // console.log(pages.contentMappedPages);
  // console.log("titleMappedPages: ");
  // console.log(pages.titleMappedPages);

  // Create a Map to store the sectionID (key) and the count of the number of pages that are in the section (value)
  var sectionMap = new Map();
  // Create a Map to store the tagName (key) and the the occurrence frequency of such tag (value)
  var tagMap = new Map();
  var returns = await findSections(pages.contentMappedPages, 1, sectionMap, tagMap);
  returns = await findSections(pages.titleMappedPages, 2, returns.sectionMap, returns.tagMap);
  const sectionIDFrequencyMap = returns.sectionMap;
  const tagIDFrequencyMap = returns.tagMap;

  // ! #### Compute Relevance Score ####
  // console.log("sectionIDFrequencyMap: ", sectionIDFrequencyMap);
  // console.log("tagIDFrequencyMap: ", tagIDFrequencyMap);

  const decisiveMap = findDecisiveTag(tagIDFrequencyMap,3);
  // console.log("decisiveMap: ", decisiveMap);

  const sectionIDArray = await findRelevantSections(decisiveMap);
  // console.log("sectionIDArray: ", sectionIDArray);

  const sectionRelevanceScoreMap = await calculateRelevanceScore(sectionIDArray, decisiveMap);
  // console.log("sectionRelevanceScoreMap: ", sectionRelevanceScoreMap);

  // ! #### User Feedback Mechanism & RankScore Calculation ####
  const rankScoreMap = await calculateRankScore(sectionRelevanceScoreMap);
  // console.log("rankScore: ", rankScoreMap);

  // ! #### Rank Sections based on RankScore ####
  const rankedSectionIDArray = await sortSections(rankScoreMap);
  // console.log("rankedSectionIDArray: ", rankedSectionIDArray);

  return rankedSectionIDArray;
};

// * get section info from database
async function getSectionInfo(sectionID) {
  const section = await Section.find({sectionID: sectionID}).select({_id:0});
  return section;
};

// * get matched content from database given the matched string and sectionID
async function getMatchedSentences(sectionID, matchedString) {
  // Find the section with the given sectionID
  const section = await Section.findOne({sectionID: sectionID});
  // Get the content of the section
  const content = section.content;
  // Find the matched sentences
  const matchedSentences = [];

  for (let i=0; i<content.length; i++) {
    const titleString = content[i].title.toLowerCase();
    if (titleString.includes(matchedString.toLowerCase())) {
      matchedSentences.push(content[i].title);
    };

    const contentString = content[i].content.toLowerCase();
    const contentStringArray = contentString.split("}");
    for (let j=0; j<contentStringArray.length; j++) {
      if (contentStringArray[j].includes(matchedString.toLowerCase())) {
        const sentence = contentStringArray[j].split("{")[1];
        matchedSentences.push(sentence);
      };
    }
  };

  return matchedSentences;
};

// * ############### Setup Connection Interface ###############
// Connection interface only handles the communication between client and server
// Data query and processing logic are handled by the functions above

/**  
 * @description: 
 * * Calculate rank score for relevant sections
 * * Rank search result by rank score
 * * Send search result to client
 * @clientFilePath
 * * pages/index.js
 * @clientFunctionName
 * * getSearchResult
 * @dataGetFromClient
 * * searchKeyWord: String
 * @dataSendToClient
 * * searchResult: rankedSectionIDArray
*/
app.post('/getSearchResult', function(req,res) {
  // get search key word from client
  console.log(">>> Received search request");
  console.log("Search Key Word: ", req.body.searchKeyWord);

  // call search function to calculate rank score for relevant sections
  search(req.body.searchKeyWord)
    .then(function(result){
      console.log("Search Result: ", result);
      // reutrn search result to client
      res.json({searchKeyWord: req.body.searchKeyWord, searchResult: result});
    });
});


/**
 * @description:
 * * Retrieve section information (tags, pages, matched sentence) from database
 * * Send section information to client
 * @clientFilePath
 * * component/searchResultCard.js
 * @clientFunctionName
 * * getSectionInfo
 * @dataGetFromClient
 * * sectionID: number
 * @dataSendToClient
 * * sectionInfo: {sectionTags: [], sectionPages: []}
 */
app.post('/getSectionInfo', function(req,res) {
  // get sectionID from client
  console.log(">>> Received section info request");
  console.log("Section ID: ", req.body.sectionID);

  // retrieve section information from database
  getSectionInfo(req.body.sectionID)
    .then(function(result){
      console.log("Section Info: ", result);
      // return section information to client
      res.json({sectionTags: result[0].tag, sectionPages: result[0].page});
    });
});


/**
 * @description:
 * * Retrieve matched sentences from database
 * @clientFilePath
 * * component/searchResultCard.js
 * @clientFunctionName
 * * getMatchedSentences
 * @dataGetFromClient
 * * sectionID: number
 * * matchedString: String
 * @dataSendToClient
 * * matchedSentences: [string]
 */
app.post('/getMatchedSentences', function(req,res) {
  // get sectionID and matchedString from client
  console.log(">>> Received get matched sentences request");
  console.log("Section ID: ", req.body.sectionID);
  console.log("Matched String: ", req.body.matchedString);

  // retrieve matched sentences from database
  getMatchedSentences(req.body.sectionID, req.body.matchedString)
    .then(function(result){
      console.log("Matched Sentences: ", result);
      // return matched sentences to client
      res.json({matchedSentences: result});
    });
});


/**
 * @description:
 * * Update feedback record in database
 * @clientFilePath
 * * pages/secitionContent.js
 * @clientFunctionName
 * * updateUserFeedback
 * @dataGetFromClient
 * * sectionID: number
 * * isHelpful: boolean
 * @dataSendToClient
 * * message: string (Update successful or not)
 */
app.post('/updateUserFeedback', function(req,res) {
  // get sectionID and isHelpful from client
  console.log(">>> Received user feedback");
  console.log("Section ID: ", req.body.sectionID);
  console.log("Is Helpful: ", req.body.isHelpful);

  // update feedback record in database
  updateFeedbackScore(req.body.sectionID, req.body.isHelpful)
    .then(function(){
      // return update result to client
      res.json({message: "Update successful"});
    });
});


const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`listening on ${port}`);
});
