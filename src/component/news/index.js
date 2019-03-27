import React, { Component } from 'react';
import { Row, Col, Button, Tabs  } from 'antd';
import NewsInner from './newsInner'
import { connect } from 'react-redux'
import { setSteps, addSteps } from '../../store/action'
import StepsCompent from './steps'
import TabesCompent from './tabs'
import ConnectCompent from './connect'

const mapStateToProps = state => {
  return {
    steps: state.steps
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setSteps: value => {
      dispatch(setSteps(value))
    },
    addSteps: key => {
      dispatch(addSteps(key))
    }
  }
}

const TabPane = Tabs.TabPane;

let key = 0
class News extends Component {
  constructor(props) {
    super(props);
    this.fileInput = React.createRef();
    this.textInput = React.createRef();
    this.state = {
      fileValue: '',
      activeKey: 'zh',
      testData: [
        { lang: 'zh', key: 'zh', title: '标题1', content: [ {id: 'zh_0', type: 'text', content: '111'}, {id: 'zh_1', type: 'text', content: '2222'} ] },
        { lang: 'en', key: 'en', title: '标题2', content: [ {id: 'en_0', type: 'text', content: '111'}, {id: 'en_1', type: 'text', content: '2222'} ] }
      ]
    }
  }
  componentDidMount () {
    this.state.testData.map((item, index) => {
      key ++
    })
    console.log(key);
    // this.props.setSteps(this.state.testData)
  }
  componentWillReceiveProps (nextProp) {
    console.log(nextProp);
  }
  changeValue = (e) => {
    console.log(e.target.value)
  }
  onChange = () => {
    let activeKey = this.state.activeKey
    activeKey === 'zh' ? activeKey = 'en' : activeKey = 'zh'
    this.setState({ activeKey });
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
  add = (index) => {
    key ++ 
    const testData = this.state.testData
    testData.push({ lang: 'us', key, id: 1, title: '标题' + key, content: [ {type: 'text', content: '111'}, {type: 'text', content: '2222'} ] })
    this.setState({testData})
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
          {/* {
            this.state.testData.map((item, index) => {
              return <Text {...item} key={index} add={() => this.add(index)} />
            })
          } */}
          <ConnectCompent />
          {/* <Tabs type="card"
            onChange={this.onChange}
            activeKey={this.state.activeKey}
          > 
            <TabPane tab='中文' key='zh'>
              <ConnectCompent key='zh' eq={0} />
            </TabPane>
            <TabPane tab='英文' key='en'>
              <ConnectCompent key='en' eq={1} />
            </TabPane> */}
            {/* {this.props.steps.map(item => 
              <TabPane tab={item.title} key={item.key}>
                <StepsCompent {...item} key={item.key} addSteps={this.props.addSteps} />
              </TabPane>
            )} */}
            {/* <TabPane tab="中文" key="zh">Content of Tab Pane 1</TabPane>
            <TabPane tab="英文" key="en">Content of Tab Pane 2</TabPane> */}
          {/* </Tabs> */}
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(News);