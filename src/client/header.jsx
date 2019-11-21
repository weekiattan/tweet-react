import React from 'react';
import ReactDOM from 'react-dom';

class MyHeader extends React.Component {
  render() {
    const mystyle = {
      color: 'white',
      backgroundColor: 'DodgerBlue',
      padding: '10px',
      fontFamily: 'Arial'
    };
    return (
      <div>
        <h1 style={mystyle}>twitter !!</h1>
      </div>
    );
  }
}

export default MyHeader;
