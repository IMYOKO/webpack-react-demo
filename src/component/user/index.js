import React, { Component } from 'react';
import Dorp from './dorp'

class User extends Component {
  clearUser = () => {
    localStorage.removeItem('userName')
    this.props.history.push(`/login`);
  }
  render() {
    return (
      <div className="User">
        这是User
        <button onClick={this.clearUser}>清空一个</button>
        <div>================================</div>
        <Dorp />
      </div>
    );
  }
}

export default User;