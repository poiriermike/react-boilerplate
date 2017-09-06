import React, { PropTypes } from 'react';

// const Button = (action, text) => (
//   <button onClick={ action }>{text}</button>
// );

// function click() {
//   console.log('Click me!')
// };

const Button = (props) => (
  <button onClick={props.clicked}>{props.name}</button>
);


// Enforces type on the parameters for the component
Button.PropTypes = {
  name: PropTypes.string,
  clicked: PropTypes.function,
};

export default Button;
