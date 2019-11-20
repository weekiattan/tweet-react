import React from 'react';
import ReactDOM from 'react-dom';
import tweets from './tweets.js';

class Twts extends React.Component {
  render() {
    let twts = tweets.map(tweets => {
      return (
        <div>
          <p>Name:{tweets.user.screen_name}</p>
          <p>Text:{tweets.text}</p>
          <p>Created at:{tweets.user.created_at}</p>
        </div>
      );
    });
    return <div>{twts}</div>;
  }
}

export default Twts;
