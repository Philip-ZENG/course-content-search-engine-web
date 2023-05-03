/** 
 * @description:
 * * This is the search bar, which is used in the home page, and search results page
*/

import React, {Component} from 'react';
import 'semantic-ui-css/semantic.min.css'
import { Input , Button, Container } from 'semantic-ui-react';
import axios from 'axios';
import Router  from 'next/router';

const GET_SEARCH_RESULT_URL = 'http://localhost:4000/getSearchResult'

class SearchBar extends Component {

  state = {
    searchKeyWord: ""
  };

  /**
   * @description:
   * * Get search result from server
   * @serverFilePath
   * * server\searchServer.js
   * @serverPort
   * * http://localhost:4000/getSearchResult
   * @dataSendToServer
   * * searchKeyWord: String
   * @dataGetFromServer
   * * searchResult: rankedSectionIDArray
   */
  getSearchResult = () => {
    const that = this;
    console.log(this.state.searchKeyWord);
    axios
      .post(GET_SEARCH_RESULT_URL, {
        searchKeyWord: this.state.searchKeyWord
      })
      .then(function (response) {
        console.log(response.data.searchResult);
        // Pass data to search result page and redirect to it
        Router.push({
          pathname: '/searchResults',
          query: { searchKeyWord: that.state.searchKeyWord, rankedSectionIDArray: response.data.searchResult }
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  render() {
    return(
      <div>
        <Container>
          <div style={{display: 'flex',alignItems: 'center', justifyContent: 'center'}}>
            <Input 
              size='huge'
              focus 
              placeholder='Search...'
              onChange={(event) => this.setState({searchKeyWord: event.target.value})}
            >
              <input/>
              <Button content='Search' onClick={this.getSearchResult} style={{margin: '0px 10px 0px 10px'}}/>
            </Input>
          </div>
        </Container>
      </div>
    );
  };
};

export default SearchBar
