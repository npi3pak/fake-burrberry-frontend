import React, { Component } from "react";

class Menu extends Component {
  render() {
    return (
      <nav className="footer-menu">
        <div className="row">
          <div className="col-md-3">
            <h4 className="footer-menu-title">CUSTOMER SERVICE</h4>
            <a className="footer-menu-link">Contact Us</a>
            <a className="footer-menu-link">Payment</a>
            <a className="footer-menu-link">Shipping</a>
            <a className="footer-menu-link">Returns</a>
            <a className="footer-menu-link">Faqs</a>
            <a className="footer-menu-link">Live Chat</a>
            <a className="footer-menu-link">The Burberry App</a>
            <a className="footer-menu-link">Store Locator</a>
          </div>
          <div className="col-md-3">
            <h4 className="footer-menu-title">OUR COMPANY</h4>
            <a className="footer-menu-link">Our History</a>
            <a className="footer-menu-link">Burberry Group Plc</a>
            <a className="footer-menu-link">Careers</a>
            <a className="footer-menu-link">Corporate Responsibility</a>
            <a className="footer-menu-link">Site Map</a>
          </div>
          <div className="col-md-3">
            <h4 className="footer-menu-title">LEGAL &amp; COOKIES</h4>
            <a className="footer-menu-link">Terms &amp; Conditions</a>
            <a className="footer-menu-link">Privacy Policy</a>
            <a className="footer-menu-link">Cookie Policy</a>
            <a className="footer-menu-link">Accessibility Statement</a>
            <a className="footer-menu-link">Japan Only - SCTL indications</a>
          </div>
        </div>
      </nav>
    );
  }
}

export default Menu;
