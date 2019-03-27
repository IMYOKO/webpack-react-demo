import React, { Component } from 'react';
import Text2 from './text2'

class Text extends Component {
  shouldComponentUpdate (nextProps,nextState) {
    console.log(this.props);
    console.log(nextProps);
    console.log(this.props.title === nextProps.title);
    if (this.props.title === nextProps.title) {
      return false
    } else {
      return true
    }
  }
  render() {
    const { title, content, add } = this.props
    return (
      <div>
        {title}
        <button onClick={add}>新增</button>
        {content.map((item, index) => {
          return <Text2 key={index} {...item} />
        })}
      </div>
    )
  }
}

export default Text