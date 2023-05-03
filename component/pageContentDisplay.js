/** 
 * @description:
 * * This is the slide page image display component, which is used in the section content page
*/

import React, {Component} from 'react';
import 'semantic-ui-css/semantic.min.css';
import Image from 'next/image';

class PageContentDisplay extends Component {

  state = {
    sectionID: "",
    pageID: "",
    dataFetched: false
  };

  // get initial props from parent component
  componentDidMount() {
    const { sectionID, pageID } = this.props;
    this.setState({sectionID: sectionID, pageID: pageID, dataFetched: true});
    console.log("page content display component", this.state.sectionID, this.state.pageID);
  }

  displayImg = () => {
    console.log(this.props.pageID);
    return(
      <div style={{margin: '30px 50px 30px 50px'}}>
        <Image src={"/"+this.state.pageID+".jpg"} width="600" height="480" />
      </div>
    );
  };


  render() {
    return(
      <div style={{textAlign: 'center'}}>
        <h1 style={{margin: '30px 50px 30px 50px'}}>Page Content of the Section</h1>
        <h3>Chapter:  {Math.floor(this.state.pageID/100)} </h3>
        <h3>Page:  {this.state.pageID%100} </h3>
        {this.state.dataFetched && this.displayImg()}
      </div>
    );
  }

}

export default PageContentDisplay;