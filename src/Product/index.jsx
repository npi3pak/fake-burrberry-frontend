import React, { Component } from "react";
import Photo from "./Photo";
import Details from "./Details";
import List from "./List";
import Delivery from "./Delivery";

class Product extends Component {
  render() {
    return (
      <div>
        <div className="product">
          <h1 className="product-title">Long Cotton Gabardine Car Coat</h1>
        </div>
        <div className="row">
          <div className="col-xs-12 col-md-7">
            <Photo />
          </div>
          <div className="col-xs-12 col-md-5">
            <Details />
          </div>
        </div>
        <List />
        <Delivery />
      </div>
    );
  }
}

export default Product;
