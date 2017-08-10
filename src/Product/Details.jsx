import React, { Component } from 'react';
import ColorButton from './ColorButton'
import InteractionButton from './InteractionButton'

class Details extends Component {
  render() {
    return (
      <div className="product-card">
        <div className="product-card-price">
          <h2 className="product-card-price-title">110 000 руб.</h2>
          <p className="product-card-item-title">Item 39428531</p>
        </div>
        <div className="product-card-color">
          <p className="product-card-color-title">Colour: Honey</p>
        </div>
        <div className="product-card-color-select">
          <ColorButton/>
          <ColorButton/>
        </div>
        <div className="product-button-block">
              {/* <button className="button button-select-size" type="button">SELECT A SIZE</button>
          <button className="button button-find" type="button">FIND IN STORE</button>
          <button className="button button-size-help" type="button">NEED SIZE HELP?</button>     */}
          <InteractionButton/>
          <InteractionButton/>
          <InteractionButton/>
        </div>
      </div>
    );
  }
}

export default Details;