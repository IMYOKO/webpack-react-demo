import React, { Component } from 'react';

import About01 from './about01'
import About02 from './about02'

class About extends Component {
  state = {
    value: 'last'
  }
  changeValue = () =>{
    this.setState({
      value: 'changeValue'
    })
  }
  render() {
    return (
      <div className="About">
        这是Abouts
        <button onClick={this.changeValue}>click</button>
        <About01 vals={this.state.value} />

        <About02 title="yoko title" />
      </div>
    );
  }
}

export default About;