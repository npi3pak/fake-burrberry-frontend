import React, { Component } from "react";
import Photos from "./Photos";
import Details from "./Details";
import Accordion from "./Accordion";
import Delivery from "./Delivery";
import styled from "styled-components";

const Title = styled.h1`
  padding: 1rem;
  margin: 0;
  margin-left: -0.5rem;
  margin-right: -0.5rem;
  font-family: Lora, Helvetica Neue, Helvetica, Arial, serif;
  font-size: 1.25rem;
  line-height: 1.2;
  font-weight: 300;
  @media only screen and (min-width: 48rem) {
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
    padding-left: 0;
    margin: 0;
    font-size: 1.5rem;
  }
`;

class Product extends Component {
  render() {
    return (
      <div>
        <Title>Long Cotton Gabardine Car Coat</Title>
        <div className="row">
          <div className="col-xs-12 col-md-7">
            <Photos />
          </div>
          <div className="col-xs-12 col-md-5">
            <Details />
          </div>
        </div>
        <Accordion />
        <Delivery />
      </div>
    );
  }
}

export default Product;
