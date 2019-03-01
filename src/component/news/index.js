import React, { Component } from 'react';
import { Row, Col, Button } from 'antd';
import NewsInner from './newsInner'

class News extends Component {
  constructor(props) {
    super(props);
    this.fileInput = React.createRef();
    this.textInput = React.createRef();
  }
  state = {
    fileValue: ''
  }
  changeValue = (e) => {
    console.log(e.target.value)
  }
  upLoad = () => {
    console.log(this.fileInput.current.files[0])
    console.log(this.textInput.current.value)
  }
  someFn = () => {
    console.log('some has fn')
    this.refs.handel.someFnChilder()
    const text = this.refs.handel.state.someState
    console.log(text)
  }
  render() {
    return (
      <div className="News">
        这是News
        <div>
          <Row>
            <Col xs={24} sm={4} md={6} lg={8} xl={10}>Col</Col>
            <Col xs={24} sm={16} md={12} lg={8} xl={4}>Col</Col>
            <Col xs={24} sm={4} md={6} lg={8} xl={10}>Col</Col>
          </Row>
        </div>
        <div>
          <input type="text" ref={this.textInput} />
          <input type="file" onChange={this.changeValue} />
          <input type="file" ref={this.fileInput} />
          <Button type="primary" onClick={this.upLoad}>upload</Button>
        </div>
        <div>
          <Button type="primary" onClick={this.someFn}>点击</Button>
          <NewsInner name="yoko" ref="handel" />
        </div>
      </div>
    );
  }
}

export default News;