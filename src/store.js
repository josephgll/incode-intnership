import {createStore} from 'redux'
import emailPasswordReducer from './Reducers/emailPasswordReducer'

const store = createStore(emailPasswordReducer);

export default store;
