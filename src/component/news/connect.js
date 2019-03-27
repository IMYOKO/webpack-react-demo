import React, { Component } from 'react';
import { connect } from 'react-redux'
import { setSteps, addSteps, delSteps } from '../../store/action'
import TabesCompent from './tabs'


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
    },
    delSteps: (key, index) => {
      dispatch(delSteps(key, index))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TabesCompent)