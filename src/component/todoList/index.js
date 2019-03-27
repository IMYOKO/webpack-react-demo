import React, { Component } from 'react';
import VisibleTodoList from './VisibleTodoList'

class TodoList extends Component {
  render () {
    return (
      <div>
        <p>TodoList</p>
        <VisibleTodoList />
      </div>
    )
  }
}

export default TodoList