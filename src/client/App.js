import React, { Component } from 'react';

import './styles/app.css';
import Noflake from './assets/Noflake.png';

export default class App extends Component {
  state = { username: null };

  componentDidMount() {
    fetch('/api/getUsername')
      .then(res => res.json())
      .then(user => this.setState({ username: user.username }));
  }

  render() {
    const { username } = this.state;
    return (
      <div>
        {username
          ? <h1>{`Hello ${username}`}</h1>
          : <h1>No flake? Please wait!</h1>
        }
        <img src={Noflake} alt="Noflake" />
      </div>
    );
  }
}
