/** 
 * @description:
 * * This is the search result card, which is used in the search results page
 * TODO: We need to fix the database, each sentence need to start and end with {}
*/

import React, {Component} from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Card } from 'semantic-ui-react';
import axios from 'axios';
import Router from 'next/router';

const GET_SECTION_INFO_URL = 'http://localhost:4000/getSectionInfo';
const GET_MATCHED_SENTENCES_URL = 'http://localhost:4000/getMatchedSentences';

class SearchResultCard extends Component {
  state = {
    sectionID: this.props.sectionID,
    matchedString: this.props.matchedString,
    sectionTags: [],
    sectionPages: [],
    matchedSentences: []
  };

  // Get section info from server
  componentDidMount() {
    this.getSectionInfo();
    this.getMatchedSentences();
  };

  /**
   * @description:
   * * Get section info from server
   * * * sectionTags
   * * * sectionPages
   * * * matchedSentence: sentence that contains the search key word (similar to google search)
   * @serverFilePath
   * * server\searchServer.js
   * @serverPort
   * * http://localhost:4000/getSectionInfo
   * @dataSendToServer
   * * sectionID: number
   * @dataGetFromServer
   * * sectionInfo: {sectionTags: [], sectionPages: []}
   */
  getSectionInfo = () => {
    const that = this;
    axios
      .post(GET_SECTION_INFO_URL, {
        sectionID: that.state.sectionID
      })
      .then(function (response) {
        console.log(response.data);
        that.setState({sectionTags: response.data.sectionTags, sectionPages: response.data.sectionPages});
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  /**
   * @description:
   * * Retrieve matched sentences from database
   * @serverFilePath
   * * server\searchServer.js
   * @serverPort
   * * http://localhost:4000/getMatchedSentences
   * @dataSendToServer
   * * sectionID: number
   * * matchedString: String
   * @dataGetFromServer
   * * matchedSentences: [string]
   */
  getMatchedSentences = () => {
    const that = this;
    axios
      .post(GET_MATCHED_SENTENCES_URL, {
        sectionID: that.state.sectionID,
        matchedString: that.state.matchedString
      })
      .then(function (response) {
        console.log(response.data);
        if(response.data.matchedSentences.length > 0) {
          that.setState({matchedSentences: response.data.matchedSentences});
        } else {
          that.setState({matchedSentences: ['No matched sentences']});
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  /**
   * @description:
   * * Route to section content page and display the screenshot of the pages in the section
   */
  viewSectionContent = () => {
    // Pass data to section content page and redirect to it
    Router.push({
      pathname: '/sectionContent',
      query: { sectionID: this.state.sectionID, sectionPages: this.state.sectionPages }
    });
  };

  render() {
    return(
      <Card centered fluid>
        <Card.Content>
          <Card.Header>Section {this.state.sectionID}</Card.Header>
          <Card.Meta>
            <p style={{margin: "10px 0px 10px 0px"}}>Pages: </p>
            {/* List elements in state.sectionPages */}
            {this.state.sectionPages.map((page, index) => {
              return(
                <span key={index}>{page}, </span>
              );
            })}
          </Card.Meta>
        </Card.Content>
        <Card.Content extra>
          <Card.Description>
            <p>Matched Sentence: </p>
            {this.state.matchedSentences}
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <p>Tags:</p>
          {this.state.sectionTags.map((tag, index) => {
              return(
                <span key={index}>{tag.tagName}, </span>
              );
          })}
        </Card.Content>
        <Card.Content extra>
          <a onClick={this.viewSectionContent}>
            View Section Content
          </a>
        </Card.Content>
      </Card>
    );
  }
};

export default SearchResultCard;