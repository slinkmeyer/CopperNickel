import { combineReducers } from 'redux'
import KPIs from './KPIs'
import visibilityFilter from './visibilityFilter'

export default combineReducers({
  KPIs,
  visibilityFilter
})
