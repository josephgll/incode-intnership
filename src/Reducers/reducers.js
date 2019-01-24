import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import emailPasswordReducer from './emailPasswordReducer'
import logedInUserReducer from './logedInUserReducer'
import exercisesReducer from './exercisesReducer'

export default (history) => combineReducers({
  router: connectRouter(history),
  emailPasswordReducer,
  logedInUserReducer,
  exercisesReducer
})
