import React, { Component } from 'react';

class Delivery extends Component {
  render() {
    return (
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
    );
  }
}

export default Delivery;