import React, { Component } from 'react';
import Menu from './Menu';
import Buttons from './Buttons';
import Help from './Help';
import FindMore from './FindMore';

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="container">
          <Menu/>
          <Buttons/>
          <Help/>
          <FindMore/>
        </div>
      </footer>
    );
  }
}

export default Footer;