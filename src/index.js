import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';
import  './reset.css';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import { ConnectedRouter } from 'connected-react-router'
import { Route, Switch } from 'react-router' // react-router v4
import configureStore, { history } from './configureStore'

const store = configureStore()

ReactDOM.render(<Provider store={store}><ConnectedRouter history={history}><App /></ConnectedRouter></Provider>, document.getElementById('root'));
