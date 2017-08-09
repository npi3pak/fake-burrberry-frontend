import React, { Component } from 'react';
import {Helmet} from "react-helmet";
import Header from './Header';
import Product from './Product';
import Recommend from './Recommend';
import More from './More';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Long Cotton Gabardine Car Coat | Men - Burberry</title>
        </Helmet>
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
