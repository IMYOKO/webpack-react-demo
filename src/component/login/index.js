import React, { Component } from 'react';

class Login extends Component {
  setUser = () => {
    console.log(this.props.history)
    localStorage.setItem('userName', 'yoko')
    this.props.history.push(`/user`);
  }
  render() {
    return (
      <div className="Login">
        这是Login

        <button onClick={this.setUser}>设置一个</button>
      </div>
    );
  }
}

export default Login;