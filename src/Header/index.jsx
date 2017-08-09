import React, { Component } from 'react';
import logo from '../img/logo.svg';

class Header extends Component {
  render() {
    return (
        <header className="header">
          <a href="#"> 
            <img className="header-logo" src={logo} alt="BURBERRY" />
          </a> 
        </header>
    );
  }
}

export default Header;