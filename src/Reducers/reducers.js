import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import emailPasswordReducer from './emailPasswordReducer'
import logedInUserReducer from './logedInUserReducer'

export default (history) => combineReducers({
  router: connectRouter(history),
  emailPasswordReducer,
  logedInUserReducer
})
