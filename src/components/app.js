import React, { Component } from 'react';

import Button from './button';


// function printsToConsole() {
//   console.log('Click')
// }

// () -> fat arrow function set up by ES6, function() {}
// const App = () => (
//   <div>
//     <Button name={'Hello'} clicked={() => console.log('World ')} />
//     <Button name={'DO THE THING'} clicked={() => console.log('asdf')} />
//   </div>
// );
// export const AppDescription = 'App says hi';
// export default App;

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: '',
      textResult: '',
    };
  }
  textEntered = (event) => {
    this.setState({ searchValue: event.target.value });
  }

  changeText = () => {
    this.setState({ textResult: this.state.searchValue, searchValue: '' });
  }
  render() {
    return (
      <div>
        {this.state.textResult}
        <br />
        <input type="text" value={this.state.searchValue} onChange={this.textEntered} />
        <Button name={'Search'} clicked={this.changeText} />

      </div>
    );
  }
}
