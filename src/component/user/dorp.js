import React, { Component } from 'react';
import { Dragact, GridItemEvent } from 'dragact'

const fakeData = [
  { GridX: 0, GridY: 0, w: 1, h: 1, key: '0', index: '0' },
  { GridX: 0, GridY: 0, w: 1, h: 1, key: '1', index: '1' },
  { GridX: 0, GridY: 0, w: 1, h: 1, key: '2', index: '2' },
  { GridX: 0, GridY: 0, w: 1, h: 1, key: '3', index: '3' }
]

const getblockStyle = isDragging => {
  return {
    background: isDragging ? '#1890ff' : 'white'
  }
}

class Dorp extends Component {
  state = {
    layout: fakeData
  }
  onDragEnd = () => {
    const layout = this.refs.handel.getLayout()
    let newList = [];
    layout.map(item => {
      newList.push(item.key)
    })
    this.setState({
      layout
    })
    console.log(newList)
  }
  render() {
    return (
      <div className="Dorp">
        这是Dorp
        <div>================================</div>
        <div>
          <Dragact
            ref="handel"
            layout={this.state.layout} //必填项
            col={1} //必填项
            width={200} //必填项
            rowHeight={40} //必填项
            margin={[5, 5]} //必填项
            className="plant-layout" //必填项
            style={{ background: '#e0e0e0' }} //非必填项
            placeholder={true}
            onDragEnd={this.onDragEnd} // 拖拽结束的回调
          >
            {(item, provided) => {
              return (
                <div
                  {...provided.props}
                  {...provided.dragHandle}
                  style={{
                      ...provided.props.style,
                      ...getblockStyle(provided.isDragging)
                  }}
                >
                  这里是标题 key - {item.key} index - {item.index}
                  {/* {provided.isDragging ? '正在抓取' : '停放'} */}
                </div>
              )
            }}
          </Dragact>
        </div>
        <ul>
          {this.state.layout.map(item=>{
            return <li key={item.key}>{item.key}</li>
          })}
        </ul>
      </div>
    );
  }
}

export default Dorp;