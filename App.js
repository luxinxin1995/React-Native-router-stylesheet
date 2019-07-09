/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Fragment } from 'react';
import { Router, Scene } from 'react-native-router-flux';

import Login from './components/login';
import Home from './components/home';

const App = () => {
  return (
    <Fragment>
      <Router>
        <Scene key="app">
          <Scene key="login" component={Login} title="登录" initial={true}></Scene>
          <Scene key="home" component={Home} title="首页"></Scene>
        </Scene>
      </Router>
      
    </Fragment>
  )
};
export default App;
