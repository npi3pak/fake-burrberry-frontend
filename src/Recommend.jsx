import React, { Component } from 'react';

class Recommend extends Component {
  render() {
    return (
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
    );
  }
}

export default Recommend;