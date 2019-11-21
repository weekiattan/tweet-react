import React from 'react';
import ReactDOM from 'react-dom';
import Twts from './twts';
import Myheader from './header';

class App extends React.Component {
  render() {
    return (
      <div>
        <Myheader />
        <Twts />
      </div>
    );
  }
}

const element = document.getElementById('app');

ReactDOM.render(<App />, element); //

console.log('tweet react');
