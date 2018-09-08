import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, withRouter } from 'react-router-dom'
//import store, { history } from './store'
import { history } from './store'
//import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css';
import RegisterDriver from './components/pages/registerDriver'
import Home from './components/pages/home'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" history={history} component={Home} />
        <Route exact path="/register-driver" history={history} component={RegisterDriver} />
      </div>
    );
  }
}

function mapStateToProps (state) {
    return {
    }
}

export default withRouter(connect(mapStateToProps)(App))
