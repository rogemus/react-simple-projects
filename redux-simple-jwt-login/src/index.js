import React from 'react';
import ReactDOM from 'react-dom';
import reduxThunk from 'redux-thunk';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import {AUTH_USER} from './actions/types';

import App from './components/app';
import Signin from './components/auth/signin';
import Signup from './components/auth/signup';
import Signout from './components/auth/signout';
import Feature from './components/feature';
import Home from './components/home';
import RequireAuth from './components/auth/require_auth';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(reducers);

const token = localStorage.getItem('token');

if (token) {
    store.dispatch({type: AUTH_USER});
}


ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={Home}/>
                <Route path="signin" component={Signin}/>
                <Route path="signup" component={Signup}/>
                <Route path="signout" component={Signout}/>
                <Route path="feature" component={RequireAuth(Feature)}/>
            </Route>
        </Router>
    </Provider>
    , document.querySelector('.container')
);
