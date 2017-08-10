import React, { Component } from "react";

class Рhoto extends Component {
  render() {
    return (
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
    );
  }
}

export default Рhoto;
