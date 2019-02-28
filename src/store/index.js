import { combineReducers } from 'redux'
import addActions from './rendcer'
import asyFns from './newRendcer'

const Store = combineReducers({
  addActions,
  asyFns
})

export default Store