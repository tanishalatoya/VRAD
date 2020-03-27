import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '/Users/trondmakonese/mod_3/V-RAD/v-rad-project/src/components/Login/login.css'



export default class UserLogin extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      reason: '',
      error: '',
      areasC: ''
    };
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  loginUser = event => {
    event.preventDefault()
    if (this.state.name === '' || this.state.email === ''|| this.state.reason === '') {
      this.setState({error: 'Please Fill In All Inputs'})
    } else {
      const { setUserInfo } = this.props;
      this.props.setUserInfo(this.state);
    }
  }

  render() {
    return (
      <form>
      <h1>Welcome to V-RAD</h1>
      <div>
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
          name='email'
          onChange={this.handleChange}
        />
      </div>
      <div>
        <label htmlFor="reason-for-login">Reason for visit</label>
      </div>
        <select onChange={this.handleChange} name='reason'>
          <option disabled selected value>
          -- select an option --
          </option>
          <option value="business">Business</option>
          <option value="vacation">Vacation</option>
          <option value="other">Other</option>
        </select>
        <div>
          <Link onClick={() => this.loginUser} className="login-button" to="/areas">
            Login
          </Link>
        </div>
      {this.state.error &&
        <div>
          <p>{this.state.error}</p>
        </div>
      }
      </form>
    );
  }
}
