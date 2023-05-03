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
  // return matchedSentences;

  console.log(matchedSentences);

  mongoose.disconnect();
};

getMatchedSentences(501, "netflix");