import React, { Component } from 'react';

class Text2 extends Component {
  render() {
    const { type, content, onClick } = this.props
    console.log('object');
    return (
      <div>
        <p>{content}</p>
      </div>
    )
  }
}

export default Text2