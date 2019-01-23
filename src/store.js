import {createStore, combineReducers, applyMiddleware, compose} from 'redux'
import emailPasswordReducer from './Reducers/emailPasswordReducer'
import logedInUserReducer from './Reducers/logedInUserReducer'


const store = createStore(combineReducers({emailPasswordReducer, logedInUserReducer}));

export default store;
