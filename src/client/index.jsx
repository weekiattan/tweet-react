import React from 'react';
import ReactDOM from 'react-dom';

import Twts from './twts';

class App extends React.Component {
  render() {
    return (
      <div>
        <Twts />
      </div>
    );
  }
}

const element = document.getElementById('app');

ReactDOM.render(<App />, element); //

console.log('tweet react');
