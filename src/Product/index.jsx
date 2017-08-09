import React, { Component } from 'react';

class Product extends Component {
  render() {
    return (
      <div>
        <div className="product">
          <h1 className="product-title">Long Cotton Gabardine Car Coat</h1>
        </div>
        <div className="row">
          <div className="col-xs-12 col-md-7">
            <div className="product-photo">
              <picture>
                <source srcSet="img/bitmap1@2x.png" media="(min-width: 768px)" />
                <img src="img/bitmap4.png" alt="image 1" />  
              </picture>
              <picture>
                <source srcSet="img/bitmap2@2x.png" media="(min-width: 768px)" />
                <img src="img/bitmap2.png" alt="image 2" /> 
              </picture>
              <picture>
                <source srcSet="img/bitmap3@2x.png" media="(min-width: 768px)" />
                <img src="img/bitmap3.png" alt="image 3" /> 
              </picture>
              <picture>
                <source srcSet="img/bitmap4@2x.png" media="(min-width: 768px)" />
                <img src="img/bitmap1.png" alt="image 4" /> 
              </picture>
            </div>
          </div>
          <div className="col-xs-12 col-md-5">
            <div className="product-card">
              <div className="product-card-price">
                <h2 className="product-card-price-title">110 000 руб.</h2>
                <p className="product-card-item-title">Item 39428531</p>
              </div>
              <div className="product-card-color">
                <p className="product-card-color-title">Colour: Honey</p>
              </div>
              <div className="product-card-color-select">
                <button className="color-button black" type="button">Colour: Black</button>
                <button className="color-button honey color-button-active" type="button">Colour: Honey</button>
              </div>
              <div className="product-button-block">
                <button className="button button-select-size" type="button">SELECT A SIZE</button>
                <button className="button button-find" type="button">FIND IN STORE</button>
                <button className="button button-size-help" type="button">NEED SIZE HELP?</button>
              </div>
            </div>
          </div>
        </div>
        <div className="product-list-item product-list-item-active">
          <h2 className="product-list-item-title">DESCRIPTION</h2>
        </div>
        <div className="product-list-item-content">
          <p>A refined car coat crafted in protective cotton gabardine.</p>
          <p>Invented by Thomas Burberry in 1879, cotton gabardine is a tightly woven and breathable 
            fabric that protects against wind and rain.
          </p>
          <p>Raglan sleeves and a concealed button closure complement the clean tailored lines.</p>
          <p>The piece is finished with a distinctive check undercollar.</p>
          <br />
          <ul>
            <li>Coat length: 98cm/38.6in. This is based on a size UK 48 as proportions change slightly according to size.</li>
            <li>Outer: 100% cotton</li>
            <li>Check lining: 100% cotton</li>
            <li>Sleeve lining: 100% viscose</li>
            <li>Buttons: buffalo horn</li>
            <li>Specialist dry clean</li>
            <li>Made in Europe</li>
            <li>Item 39428531</li>
          </ul>
        </div>
        <div className="product-list-item product-list-item-hidden">
          <h2 className="product-list-item-title">SHIPPING &amp; RETURNS</h2>
        </div>
        <div className="delivery">
          <div className="row">
            <div className="col-xs-12 col-md-7">
              <img className="delivery-image" src="img/delivery.png" alt="Delivery" />
            </div>
            <div className="col-xs-12 col-md-5">
              <h2 className="delivery-title">DELIVERY</h2>
              <h4 className="delivery-subtitle">Free Next Day Delivery</h4>
              <p className="delivery-text">Order before 7pm Monday to Thursday for delivery the next day</p>
              <h4 className="delivery-subtitle">Collect-in-Store</h4>
              <p className="delivery-text">Order online today and pick up your items in store as early as tomorrow</p>
              <h4 className="delivery-subtitle">Free Returns</h4>
              <p className="delivery-text">Enjoy free returns on your order</p>
              <h4 className="delivery-subtitle">Free Gift Packaging</h4>
              <p className="delivery-text">Discover our gift packaging, a gold lined box tied with a coloured ribbon</p>
            </div>
          </div> 
        </div>
      </div>
    );
  }
}

export default Product;