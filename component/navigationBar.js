/** 
 * @description:
 * * This is the navigation bar component, which is placed at the top of each page
*/

import React, {Component} from 'react';


class NavigationBar extends Component {
  render() {
    return (
      <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <div class="container-fluid">
            <a class="navbar-brand" href="/">Course Content Search Engine</a>
          </div>
        </nav>
      </div>
    );
  }

}

export default NavigationBar;