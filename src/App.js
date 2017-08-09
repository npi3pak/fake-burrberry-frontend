import React, { Component } from 'react';
import logo from './img/logo.svg';

class App extends Component {
  render() {
    return (
      <div>
        <header className="header">
          <a href="#"> 
            <img className="header-logo" src={logo} alt="BURBERRY" />
          </a> 
        </header>
        <div className="container">
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
          <div className="recommend">
            <h2 className="recommend-title">WE RECOMMEND</h2>
            <div className="recommend-cards">
              <div className="row">
                <div className="col-xs-6 col-sm-3 col-md-3">
                  <a className="recommend-link" href="#">
                    <img className="recommend-image" src="img/recommend_img_1.jpg" alt="Emroided Hooded" />
                    <h3 className="recommend-image-title">Emroided Hooded Content For Three Lines</h3>
                    <p className="recommend-image-price">27 000 руб.</p>
                  </a>
                </div>
                <div className="col-xs-6 col-sm-3 col-md-3">
                  <a className="recommend-link" href="#">
                    <img className="recommend-image" src="img/recommend_img_2.jpg" alt="Relaxed Fit Stretch Jeans" />
                    <h3 className="recommend-image-title">Relaxed Fit Stretch Jeans Content For Three Lines</h3>
                    <p className="recommend-image-price">22 500 руб.</p>
                  </a>
                </div>
                <div className="col-xs-6 col-sm-3 col-md-3">
                  <a className="recommend-link" href="#">
                    <img className="recommend-image" src="img/recommend_img_3.jpg" alt="Leather and House Check" />
                    <h3 className="recommend-image-title">Leather and House Check Content For Three Lines</h3>
                    <p className="recommend-image-price">120 000 руб.</p>
                  </a>
                </div>
                <div className="col-xs-6 col-sm-3 col-md-3">
                  <a className="recommend-link" href="#">
                    <img className="recommend-image" src="img/recommend_img_4.jpg" alt="Leather Wingtip Check" />
                    <h3 className="recommend-image-title">Leather Wingtip Check Content For Three Lines</h3>
                    <p className="recommend-image-price">46 000 руб.</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="more">
            <h2 className="more-title">MORE FOR YOU</h2>
            <div className="more-links"> 
              <a className="more-link-item" href="#">Men’s Black Trench Coats</a>
              <a className="more-link-item" href="#">Men’s Short Trench Coats</a>
              <a className="more-link-item" href="#">Men’s Long Trench Coats</a>
            </div> 
          </div>
        </div>
        <footer className="footer">
          <div className="container">
            <nav className="footer-menu">
              <div className="row">
                <div className="col-md-3">
                  <h4 className="footer-menu-title">CUSTOMER SERVICE</h4>
                  <a className="footer-menu-link" href="#">Contact Us</a>
                  <a className="footer-menu-link" href="#">Payment</a>
                  <a className="footer-menu-link" href="#">Shipping</a>
                  <a className="footer-menu-link" href="#">Returns</a>
                  <a className="footer-menu-link" href="#">Faqs</a>
                  <a className="footer-menu-link" href="#">Live Chat</a>
                  <a className="footer-menu-link" href="#">The Burberry App</a>
                  <a className="footer-menu-link" href="#">Store Locator</a>
                </div>
                <div className="col-md-3">
                  <h4 className="footer-menu-title">OUR COMPANY</h4>
                  <a className="footer-menu-link" href="#">Our History</a>
                  <a className="footer-menu-link" href="#">Burberry Group Plc</a>
                  <a className="footer-menu-link" href="#">Careers</a>
                  <a className="footer-menu-link" href="#">Corporate Responsibility</a>
                  <a className="footer-menu-link" href="#">Site Map</a>
                </div>
                <div className="col-md-3">
                  <h4 className="footer-menu-title">LEGAL &amp; COOKIES</h4>
                  <a className="footer-menu-link" href="#">Terms &amp; Conditions</a>
                  <a className="footer-menu-link" href="#">Privacy Policy</a>
                  <a className="footer-menu-link" href="#">Cookie Policy</a>
                  <a className="footer-menu-link" href="#">Accessibility Statement</a>
                  <a className="footer-menu-link" href="#">Japan Only - SCTL indications</a>
                </div>
              </div>
            </nav>
            <div className="footer-button-block">
              <button className="footer-button" type="button">Shipping country: Russian Federation</button>
              <button className="footer-button" type="button">Language: English</button>
            </div>
            <div className="footer-help-block">
              <h5 className="footer-help-title">Need help?</h5>
            </div>
            <div className="footer-find-more-block">
              <a className="footer-find-more-link">Find out more and contact us</a>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
