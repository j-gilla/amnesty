import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import reducer from './reducers';
import {fetchUserInfo} from './actions/fetchUser';

import thunkMiddleware from 'redux-thunk';

import {Router, Route, hashHistory, IndexRoute} from 'react-router';
import TaskToolbar from './components/TaskToolbar';
import TaskPresenter from './components/TaskPresenter';
import UserProfile from './components/user/UserProfile';
import AccountSettings from './components/user/AccountSettings';
import UserMngToolbar from './components/UserMngToolbar';

const store = createStore(reducer, applyMiddleware(thunkMiddleware));

import App from './App';

//style file in fist row to define common thing, it can be override by component style
import './style/style.scss';

ReactDOM.render((
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/"component={App}>
        <IndexRoute components={{
          main: TaskPresenter,
          nav: TaskToolbar
        }}/>
        <Route path="user/profile" components={{
          main: UserProfile,
          nav: UserMngToolbar
        }} />
        <Route path="user/account-settings" components={{
          main: AccountSettings,
          nav: UserMngToolbar
        }} />
      </Route>
    </Router>
  </Provider>
), document.getElementById('root'));

store.dispatch(fetchUserInfo());
//style file in last row to override library style
import './style/common.scss';