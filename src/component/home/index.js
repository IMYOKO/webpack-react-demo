import React, { Component } from 'react';

import CommonApi from '../../api/server'
import InnerHome from './innerHome.jsx'
import { Button } from 'antd';
import './home.css'
import './home.less'

class Home extends Component {
  state = {
    name: '',
    text: 'props.text',
    list: []
  }
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     name: ''
  //   };
  // }
  add = (id) => {
    console.log(id)
  }
  async getData () {
    try {
      const result = await CommonApi.getData('/static/data2.json')
      return result
    } catch (error) {
      console.log(error)
    }
  }
  componentDidMount = () => {
    CommonApi.getData('/static/data2.json').then(res => {
      const name = res.data.data.data.name
      this.setState({
        name
      })
    })

    CommonApi.getData('/api/mock').then(res => {
      console.log(res)
    })

    CommonApi.getList().then(res => {
      console.log(res)
    })

    CommonApi.login('/api/login', {name: 'yoko', password: '123456'}).then(res => {
      console.log(res)
    })

    this.getData().then(res => {
      const list = res.data.data.list;
      this.setState({
        list
      })
    })

    let a = {
      name: 'yoko',
      age: 27,
      addr: '广东省深圳市'
    }

    let b = {...a, isOK: true, other: {book: '《云南虫谷》'}}

    console.log(b)
  }
  render() {
    return (
      <div className="Home">
        这是Home
        <img src="../../assets/images/keybox.jpg" width="200" />
        <div className="home-img">
          这里是图片
        </div>
        
        <Button type="primary">Primary</Button>
        
        <InnerHome text={this.state.text} />
        <ul>
          {this.state.list.map(value => {
            return <li key={value.id} onClick={()=>{this.add(value.id)}}>{value.title}</li>
          })}
        </ul>
        <ul className="list">
          <li>dhsahdasjh</li>
          <li>dhsahdasjh</li>
          <li className="color333">dhsahdasjh</li>
          <li>{this.state.name}</li>
        </ul>
      </div>
    );
  }
}

export default Home;