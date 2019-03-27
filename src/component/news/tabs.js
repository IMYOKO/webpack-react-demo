import React, { Component } from 'react';
import { Row, Col, Button, Tabs  } from 'antd';
import StepsCompent from './steps'
import Item from 'antd/lib/list/Item';
const TabPane = Tabs.TabPane;
class TabesCompent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeKey: 'zh'
    }
  }
  onChange = () => {
    let activeKey = this.state.activeKey
    activeKey === 'zh' ? activeKey = 'en' : activeKey = 'zh'
    this.setState({ activeKey });
  }
  render () {
    console.log(this.props);
    const {steps, addSteps, delSteps} = this.props
    return (
      <Tabs type="card"
        onChange={this.onChange}
        activeKey={this.state.activeKey}
      > 
        {
          steps.map((item, index) =>{
            return <TabPane tab={item.title} key={item.key}>
              <StepsCompent  {...steps[index]} key={item.key} addSteps={addSteps} delSteps={delSteps} eq={index} />
            </TabPane>
          })
        }
        {/* <TabPane tab='中文' key='zh'>
          <StepsCompent {...steps[0]} key='zh' addSteps={addSteps} delSteps={delSteps} eq={0} />
        </TabPane>
        <TabPane tab='英文' key='en'>
          <StepsCompent  {...steps[1]} key='en' addSteps={addSteps} delSteps={delSteps} eq={1} />
        </TabPane> */}
      </Tabs>
    )
  }
}

export default TabesCompent