import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

import Header from 'lazy!./component/common/header'
import AuthRouter from 'lazy!./component/common/authRouter'
import Home from 'lazy!./component/home/index'
import About from 'lazy!./component/about/index'
import User from 'lazy!./component/user/index'
import News from 'lazy!./component/news/index'
import Login from 'lazy!./component/login/index'
import Todolist from './component/todoList/index'
import Page4O4 from 'lazy!./component/404/index'

import Store from './store/index'

const middleware = [thunk]
const store = createStore(Store, applyMiddleware(...middleware));

class App extends Component {
  render() {
    return (
      <Router>
        <Provider store={store}>
          <div className="app">
            <Header />
            <Switch>
              <Route path='/' exact component={Home} />
              <Route path='/about' component={About} />
              <Route path='/news' exact component={News} />
              <Route path='/todolist' exact component={Todolist} />
              <Route path='/login' exact component={Login} />
              {/* 需要登录权限 */}
              <AuthRouter path='/user' component={User}></AuthRouter>
              <Route component={Page4O4}/>
            </Switch>
          </div>
        </Provider>
      </Router>
    )
  }
}

export default App;