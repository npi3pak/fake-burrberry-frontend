import React, { Component } from 'react';
import Header from './Header';
import Product from './Product';
import Recommend from './Recommend';
import More from './More';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <div className="container">
          <Product/>
          <Recommend/>
          <More/>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default App;
