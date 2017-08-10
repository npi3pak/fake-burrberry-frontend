import React, { Component } from 'react';
import Card from './Card';

const photos = [
  {
    'title': 'Emroided Hooded',
    'price': '27 000 руб.',
    'img': 'img/recommend_img_1.jpg'
  },
  {
    'title': 'Relaxed Fit Stretch Jeans ',
    'price': '22 500 руб.',
    'img': 'img/recommend_img_2.jpg'
  },
  {
    'title': 'Leather and House Check',
    'price': '120 000 руб.',
    'img': 'img/recommend_img_3.jpg'
  },
  {
    'title': 'Leather Wingtip',
    'price': '46 000 руб.',
    'img': 'img/recommend_img_4.jpg'
  },
]

class Recommend extends Component {
  render() {
    return (
      <div className="recommend">
        <h2 className="recommend-title">WE RECOMMEND</h2>
        <div className="recommend-cards">
          <div className="row">
            { photos.map((photo,num)=>{
              console.warn(photo.title)
              return (
                <div className="col-xs-6 col-sm-3 col-md-3" key={num}>
                  <Card title={photo.title} price={photo.price} img={photo.img}/>
                </div>
              )}
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Recommend;