import React, { Component } from 'react';

const InteractionButtom = (props) => (
  <button className="button" color={props.color} BorderColor={props.BorderColor} type="button">{props.title}</button>
)

export default InteractionButtom