//Installed via NPM modules
import React from 'react';
import ReactDOM from 'react-dom';

import App, { AppDescription } from './components/app';


ReactDOM.render(
    <App /> // Instance of a react component
  , document.querySelector('.container') // Target where we want to render this particular component in the app. In this case, rendering in the place of the 'container' class
);
