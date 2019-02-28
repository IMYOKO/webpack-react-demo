import React, { Component } from 'react';

class InnerHome extends Component {
  state = {
    innerHome: 'innerhome124'
  }
  render() {
    return (
      <div className="InnerHome">
        这是InnerHome  {this.state.innerHome}  -- {this.props.text}
      </div>
    );
  }
}

export default InnerHome;