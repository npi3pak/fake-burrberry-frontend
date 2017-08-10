import React, { Component } from 'react';

const ColorButton = (props) => (
  <button className="color-button" color={props.color} active={props.active} type="button">Colour: Black</button>
)

export default ColorButton