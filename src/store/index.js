import { combineReducers } from 'redux'
import addActions from './rendcer'
import asyFns from './newRendcer'
import { steps, todo } from './steps'

const Store = combineReducers({
  addActions,
  asyFns,
  steps,
  todo
})

export default Store