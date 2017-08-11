import React, { Component } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  padding-left: 1rem;
  padding-top: 2rem;
  padding-bottom: 2rem;
  padding-right: 1rem;
  margin-left: -0.5rem;
  margin-right: -0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  ::after {
    content: url(/img/triangle_close.svg);
    transform: ${props => (props.active ? "rotate(180deg)" : "none")};
  }
  @media only screen and (min-width: 48rem) {
    padding-left: 0.5rem;
    padding-top: 1.5rem;
    padding-bottom: 1rem;
    padding-right: 0;
    display: none;
    ::after {
      content: none;
    }
  }
`;

const Title = styled.div`
  margin: 0;
  font-family: Raleway;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.25;
`;

const Content = styled.div`
  margin: 0;
  padding-left: 1rem;
  padding-bottom: 1.93rem;
  padding-right: 1rem;
  margin-left: -0.5rem;
  margin-right: -0.5rem;
  font-family: Lora;
  font-size: 0.875rem;
  line-height: 1.75;
  border-bottom: 1px solid #c6c6c6;
  p {
    padding: 0;
    margin: 0;
    font-family: Lora, Helvetica Neue, Helvetica, Arial, serif;
  }

  ul {
    padding: 0;
    margin: 0;
    font-family: Lora, Helvetica Neue, Helvetica, Arial, serif;
    list-style-type: none;
  }

  @media only screen and (min-width: 48rem) {
    padding-left: 0.5rem;
    padding-bottom: 0;
    padding-right: 0.5rem;
    border-bottom: none;
  }
`;

class Section extends Component {
  render() {
    return (
      <div>
        <Wrapper active={this.props.active}>
          <Title>
            {this.props.title}
          </Title>
        </Wrapper>
        {this.props.active &&
          <Content>
            <span dangerouslySetInnerHTML={{ __html: this.props.content }} />
          </Content>}
      </div>
    );
  }
}

export default Section;
