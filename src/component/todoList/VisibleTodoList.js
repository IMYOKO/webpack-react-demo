import React, { Component } from 'react';
import { connect } from 'react-redux'
import { setSteps, addSteps, addTodo } from '../../store/action'
import TodoList from './TodoList'


const mapStateToProps = state => {
  return {
    todo: state.todo
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addTodo: value => {
      dispatch(addTodo(value))
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(TodoList)