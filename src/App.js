import React from 'react';
import logo from './logo.svg';
import './App.css';
import UserLogin from '../src/components/Login/login.js';
import { Switch, Route } from 'react-router-dom';
import { Component } from 'react';


export default class App extends Component {
  constructor() {
    super();
    this.state = {
      user: {},
    }
  }

  setUserInfo = user => {
    if (!user.name) {
      this.setState({ favorites: [] });
    }
    this.setState({ user });
  }

  render() {
    return (
      <main>
       <Route path='/' component={UserLogin}/>
      </main>
    )
  }
}
