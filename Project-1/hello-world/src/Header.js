import React, { Component } from 'react';

class Header extends Component {
  render() {
    return(
      <div>
        <header className="App-header">
          {
            //<img src={logo} className="App-logo" alt="logo" />
          }
          <h1 className="App-title">Welcome to React</h1>
        </header>
      </div>
    )
  }
}

export default Header;

/* can also export using:
export default class Header extends Component { ... }
*/
