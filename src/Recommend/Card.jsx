import React, { Component } from "react";

class Card extends Component {
  render() {
    return (
      <a className="recommend-link">
        <img
          className="recommend-image"
          src={this.props.img}
          alt={this.props.title}
        />
        <h3 className="recommend-image-title">
          {this.props.title}
        </h3>
        <p className="recommend-image-price">
          {this.props.price}
        </p>
      </a>
    );
  }
}

export default Card;
