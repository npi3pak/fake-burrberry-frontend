import React, { Component } from "react";
import styled from "styled-components";

const Photos = styled.div`
  padding: 0;
  margin-left: -0.5rem;
  margin-right: -0.5rem;
  display: flex;
  flex-direction: row;
  overflow-y: auto;
  @media only screen and (min-width: 48rem) {
    margin: 0;
    width: auto;
    height: 576px;
  }
`;

const PhotoContent = [
  {
    standard: "img/bitmap4.png",
    big: "img/bitmap1@2x.png"
  },
  {
    standard: "img/bitmap3.png",
    big: "img/bitmap2@2x.png"
  },
  {
    standard: "img/bitmap2.png",
    big: "img/bitmap3@2x.png"
  },
  {
    standard: "img/bitmap1.png",
    big: "img/bitmap4@2x.png"
  }
];

class Рhoto extends Component {
  render() {
    return (
      <picture>
        <source srcSet={this.props.big} media="(min-width: 768px)" />
        <img src={this.props.standard} />
      </picture>
    );
  }
}

export default props =>
  <Photos>
    {PhotoContent.map((item, num) =>
      <Рhoto standard={item.standard} big={item.big} key={num} />
    )}
  </Photos>;
