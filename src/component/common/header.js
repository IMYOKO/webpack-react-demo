import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <div className="Nav-list">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/user">Users</Link></li>
          <li><Link to="/news">News</Link></li>
          {/* <li><Link to="/needLogin">needLogin</Link></li> */}
        </ul>
      </div>
    );
  }
}

export default Header;