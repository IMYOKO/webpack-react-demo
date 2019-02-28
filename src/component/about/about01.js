import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addAction, clicks } from '../../store/action'

const mapStateToProps = state => ({
  addActionState: state.addActions,
  clickFnstate: state.asyFns.asyncText
})

const mapDispatchToProps = dispatch => ({
  addActionStateDispatch: () => {
    dispatch(addAction())
  },
  clickFnDispatch: value => {
    dispatch(clicks(value))
  }
})

class About01 extends Component {
  render() {
    const {vals, addActionState, clickFnstate, addActionStateDispatch, clickFnDispatch} = this.props
    return (
      <div className="About01">
        这是About01
        <button onClick={addActionStateDispatch}>点击</button>

        <button onClick={()=>{clickFnDispatch('click 1s')}}>异步点击</button>

        <div>{addActionState} -- {vals}</div>
        <div>{clickFnstate}</div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(About01);