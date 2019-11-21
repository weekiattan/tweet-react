import React from 'react';
import ReactDOM from 'react-dom';
import tweets from './tweets.js';

class Twts extends React.Component {
  render() {
    let twts = tweets.map(tweets => {
      const name = tweets.user.screen_name;
      const text = tweets.text;
      const created = tweets.user.created_at;

      return (
        <div className="row justify-content-center">
          <div className="card-body">
            <h1 className="card-name">{name}</h1>
            <h5 className="card-text">{text}</h5>
            <h5 className="card-text">{created}</h5>
          </div>
        </div>
      );
    });
    return <div>{twts}</div>;
  }
}

export default Twts;
