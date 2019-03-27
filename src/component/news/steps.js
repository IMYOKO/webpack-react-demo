import React, { Component } from 'react';

class StepsCompent extends Component {
  render () {
    console.log(this.props);
    const {content, addSteps, lang, delSteps} = this.props
    return (
      <div>
        <ul>
          {content.map((item, index) => {
            return <li key={item.id} onClick={()=>{delSteps(lang, index)}}>{item.type}</li>
          })}
        </ul>
        <button onClick={()=>{addSteps(lang)}}>新增</button>
        <p>---------------------------------</p>

      </div>
    )
  }
}

export default StepsCompent