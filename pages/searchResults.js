/** 
 * @description:
 * * This is the page that lists the search results
*/

import React, {Component} from 'react';
import 'semantic-ui-css/semantic.min.css'
import Router from 'next/router';
import { Container } from 'semantic-ui-react';
import SearchResultCard from '../component/searchResultCard';
import NavigationBar from '../component/navigationBar';

class SearchResultPage extends Component {

  state = {
    searchKeyWord: "",
    rankedSectionIDArray: "",
    dataFetched: false
  };

  // Retrieve data from router query, and pass it to state
  componentDidMount() {
    var { searchKeyWord, rankedSectionIDArray } = Router.query;
    this.setState({searchKeyWord: searchKeyWord, dataFetched: true, rankedSectionIDArray: rankedSectionIDArray});
  };

  // Write a function to pass secionIDs in state.rankedSectionIDArray to a list of SearchResultCards
  renderSearchResultCards = () => {
    console.log("search result page:", this.state.rankedSectionIDArray);

    // If no search result is found, return a message
    try {
      // check if the array is empty (undefined object will throw an error)
      this.state.rankedSectionIDArray.length === 0;
    } catch (error) {
      return <h2 style={{textAlign: 'center', color: 'red'}}> No search result found </h2>
    }

    // If only one search result is found, return a single SearchResultCard
    try {
      this.state.rankedSectionIDArray.map(() =>{});
    } catch (error) {
      return (
        <Container style={{textAlign: 'center'}} >
          <SearchResultCard sectionID={this.state.rankedSectionIDArray} matchedString={this.state.searchKeyWord}/>
        </Container>
      );
    }
      
    // If multiple search results are found, return a list of SearchResultCards
    return this.state.rankedSectionIDArray.map((sectionID) => {
      return (
        <Container style={{textAlign: 'center', width: '700px', margin: '30px 50px 30px 50px'}}>
          <SearchResultCard sectionID={sectionID} matchedString={this.state.searchKeyWord}/>
        </Container>
      );
    });
  };

  render() {
    return(
      <div>
        <NavigationBar/>
        <h1 style={{textAlign: 'center', margin: '30px 50px 30px 50px'}}> Search Results </h1>
        {/* Triger the renderSearchResultCards function if state.dataFetched is true*/}
        {this.state.dataFetched && this.renderSearchResultCards()}
      </div>
    );
  }

};

export default SearchResultPage;