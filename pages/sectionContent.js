/** 
 * @description:
 * * This is the page that shows the content of a section and make recommendations
*/

import React, {Component} from 'react';
import 'semantic-ui-css/semantic.min.css'
import Router from 'next/router';
import axios from 'axios';
import {Button} from 'semantic-ui-react';
import PageContentDisplay from '../component/pageContentDisplay';
import NavigationBar from '../component/navigationBar';

const UPDATE_USER_FEEDBACK_URL = "http://localhost:4000/updateUserFeedback"

class SectionContentPage extends Component {
  state = {
    sectionID: "",
    sectionPages: [],
    currentPageIndex : 0, // This is the index of the page (in the sectionPage list) that is currently displayed
    dataFetched: false,
    disablePreviousPageButton: true,
    disableNextPageButton: false,
    feedbackMade: false
  };

  // get data from router query
  componentDidMount() {
    const { sectionID, sectionPages } = Router.query;
    this.setState({sectionID: sectionID, sectionPages: sectionPages, dataFetched: true});
    console.log("sectionContent Page: ",this.state.sectionID);
  };

   /**
   * @description:
   * * Update feedback record in database
   * @serverFilePath
   * * server\searchServer.js
   * @serverPort
   * * http://localhost:4000/updateUserFeedback
   * @dataSendToServer
   * * sectionID: number
   * * isHelpful: boolean
   * @dataGetFromServer
   * * message: string (Update successful or not)
   */
  updateUserFeedback = (isHelpful) => {
    const that = this;
    axios
      .post(UPDATE_USER_FEEDBACK_URL, {
        sectionID: that.state.sectionID,
        isHelpful: isHelpful
      })
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  makePositiveFeedback = () => {
    this.setState({isHelpful: true, feedbackMade: true});
    this.updateUserFeedback(true);
  };

  makeNegativeFeedback = () => {
    this.setState({isHelpful: false, feedbackMade: true});
    this.updateUserFeedback(false);
  };


  showComponent = () => {
    return( <PageContentDisplay sectionID={this.state.sectionID} pageID={this.state.sectionPages[this.state.currentPageIndex]}/> );
  };

  nextPage = () => {
    if(this.state.currentPageIndex === this.state.sectionPages.length-1) {
      this.setState({disableNextPageButton: true});
    } else {
      this.setState({disableNextPageButton: false, disablePreviousPageButton: false});
      this.setState({currentPageIndex: this.state.currentPageIndex+1});
      this.setState({dataFetched: false});
    }
  };

  previousPage = () => {
    if(this.state.currentPageIndex === 0) {
      this.setState({disablePreviousPageButton: true});
    } else {
      this.setState({disableNextPageButton: false, disablePreviousPageButton: false});
      this.setState({currentPageIndex: this.state.currentPageIndex-1});
      this.setState({dataFetched: false});
    }
  };

  render() {
    let contentWindow;
    if (this.state.dataFetched) {
      contentWindow = <PageContentDisplay sectionID={this.state.sectionID} pageID={this.state.sectionPages[this.state.currentPageIndex]}/>
    } else {
      contentWindow = <p>loading...</p>
      this.setState({dataFetched: true});
    }

    return(
      <div style={{textAlign: 'center'}}>
        <NavigationBar/>
        {contentWindow}
        <Button onClick={this.previousPage} disabled={this.state.disablePreviousPageButton}>Previous Page</Button>
        <Button onClick={this.nextPage} disabled={this.state.disableNextPageButton}>Next Page</Button>
        <p style={{margin: "10px 0px 10px 0px"}}>To help us improve the search algorithm, please give a feedback on whether you think this content is helpful or not.</p>
        <Button onClick={this.makePositiveFeedback} disabled={this.state.feedbackMade}>Helpful</Button>
        <Button onClick={this.makeNegativeFeedback} disabled={this.state.feedbackMade}>Not Helpful</Button>
      </div>
    );
  }
}

export default SectionContentPage;