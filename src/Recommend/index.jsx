import React, { Component } from "react";
import Card from "./Card";
import styled from "styled-components";

const Wrapper = styled.div`
  padding-top: 3.1rem;
  margin-left: -0.5rem;
  margin-right: -0.5rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-top: 1px solid #c6c6c6;
  @media only screen and (min-width: 48rem) {
    padding-left: 0.5rem;
    padding-top: 1.25rem;
    padding-bottom: 2.8rem;
    border-top: none;
  }
`;

const Title = styled.h2`
  padding-bottom: 0.45rem;
  margin: 0;
  margin-left: 1rem;
  font-size: 1rem;
  font-weight: 500;
  border-bottom: 1px solid #171717;
  @media only screen and (min-width: 48rem) {
    padding-left: 0;
    padding-top: 0.2rem;
    margin: 0;
    margin-left: 0;
    margin-top: 0.15rem;
  }
`;

const Cards = styled.h2`
  padding-left: 0.5rem;
  padding-top: 0.5rem;
  padding-right: 0.8rem;
  display: flex;
  flex-wrap: wrap;
  @media only screen and (min-width: 48rem) {
    padding-left: 0;
    padding-top: 0;
    padding-right: 0.5rem;
    margin-right: 0;
  }
`;

const photos = [
  {
    title: "Emroided Hooded",
    price: 27000,
    img: "img/recommend_img_1.jpg"
  },
  {
    title: "Relaxed Fit Stretch Jeans ",
    price: 22500,
    img: "img/recommend_img_2.jpg"
  },
  {
    title: "Leather and House Check",
    price: 120000,
    img: "img/recommend_img_3.jpg"
  },
  {
    title: "Leather Wingtip",
    price: 46000,
    img: "img/recommend_img_4.jpg"
  }
];

class Recommend extends Component {
  render() {
    return (
      <Wrapper>
        <Title>WE RECOMMEND</Title>
        <Cards>
          <div className="row">
            {photos.map((photo, index) =>
              <div className="col-xs-6 col-sm-3 col-md-3" key={index}>
                <Card title={photo.title} price={photo.price} img={photo.img} />
              </div>
            )}
          </div>
        </Cards>
      </Wrapper>
    );
  }
}

export default Recommend;
