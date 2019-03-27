import React, { Component } from 'react';

class TodoList extends Component {
  render () {
    console.log(this.props);
    const {addTodo, todo} = this.props
    return (
      <div>
        <ul>
          {todo.map((item, index) => {
            return <li key={index} >{item.content}</li>
          })}
        </ul>
        <button onClick={()=>{addTodo({text:'', content: 'x'})}}>新增</button>
        <p>---------------------------------</p>

      </div>
    )
  }
}

export default TodoList