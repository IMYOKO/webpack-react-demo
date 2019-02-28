import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

import Header from './component/common/header'
import Home from './component/home/index'
import About from './component/about/index'
import User from './component/user/index'
import News from './component/news/index'
import Login from './component/login/index'
import Page4O4 from './component/404/index'

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
              <Route path='/user' exact component={User} />
              <Route path='/news' exact component={News} />
              <Route path='/login' exact component={Login} />
              <Route component={Page4O4}/>
            </Switch>
          </div>
        </Provider>
      </Router>
    )
  }
}

export default App;