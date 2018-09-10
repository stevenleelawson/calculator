import React from 'react';
import './styles.css';

const Button = props => (
  <div
    className="button"
    onClick={props.handleClick}
    value={props.value}
  >
    {props.label}
  </div>
);

export default Button;
