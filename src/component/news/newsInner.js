import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Button } from 'antd';

class NewsInner extends Component {
  static propTypes = {
    name: PropTypes.string
  }
  state = {
    someState: 'im yoko'
  }
  someFnChilder = () => {
    console.log('子组建的方法')
  }
  render() {
    return (
      <div className="NewsInner">
        这是NewsInner {this.props.name}
      </div>
    );
  }
}

export default NewsInner;