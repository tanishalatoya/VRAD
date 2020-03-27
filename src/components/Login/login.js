import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class UserLogin extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      reason: ''
    };
  }

  handleChange = e => {
    this.setState({e.target.name: e.target.value})
  }

  loginUser = () => {

  }

  render() {
    return (
      <form>
        <input
          type='text'
          placeholder='name'
          value={this.state.name}
          name='name'
          onChange={this.handleChange}
        />
        <input
          type='text'
          placeholder='email'
          value={this.state.email}
          name='eamil'
          onChange={this.handleChange}
        />
        <label htmlFor="reason-for-login">Reason for visit</label>
        <select onChange={this.handleChange} name='reason'>
          <option disabled selected value>
          -- select an option --
          </option>
          <option value="business">Business</option>
          <option value="vacation">Vacation</option>
          <option value="other">Other</option>
        </select>
        <button onClick={this.loginUser}>Login</button>
      </form>
    )
  }
}
