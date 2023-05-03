/** 
 * @description:
 * * This is the home page of the website
*/

import React, {Component} from 'react';
import 'semantic-ui-css/semantic.min.css'
import {Header} from 'semantic-ui-react';
import SearchBar from '../component/searchBar';
import NavigationBar from '../component/navigationBar';

class HomePage extends Component {


  render() {
    return(
      <div>
        <NavigationBar/>
        <div style={{height: 200}}></div>
        <div style={{height: 150}}>
          <Header as='h1' textAlign='center' style={{padding:30}}>Welcome to Course Content Search Engine!</Header>
        </div>

        <SearchBar/>

      </div>
    );
  };
};

export default HomePage
