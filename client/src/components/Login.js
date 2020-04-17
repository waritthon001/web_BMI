import React, { Component } from 'react'
import { login } from './UserFunctions'

class Login extends Component {
  constructor() {
    super()
    this.state = {
      email: '',
      password: '',
      errors: {}
    }

    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }
  onSubmit(e) {
    e.preventDefault()

    if (!this.validateForm(this.state.email, this.state.password)) {
      return false;
    }

    const user = {
      email: this.state.email,
      password: this.state.password
    }

    login(user).then(res => {
      if (res) {
        this.props.history.push(`/profile`)
      }
    })
  }

  
  validateForm = (email, password) => {
    if (!email || !password) {
      window.alert('Please fill in ALL data fields.');
      return false;
    } else if (!isNaN(email)) {
      window.alert('Please fill only TEXT detail in transaction name.');
      return false;
    } else if (+password === 0) {
      window.alert('Amount CANNOT be zero!');
      return false;
    }

    return true;
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 mt-5 mx-auto">
            <form noValidate onSubmit={this.onSubmit}>
              <h1 className="h3 mb-3 font-weight-normal" id="aa02">Please sign in</h1>
              <div className="form-group">
                <label htmlFor="email" id="aa03">Email address</label>
                <input
                id="aa06"
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder="Enter email"
                  value={this.state.email}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password" id="aa03">Password</label>
                <input
                id="aa06"
                  type="password"
                  className="form-control"
                  name="password"
                  placeholder="Password"
                  value={this.state.password}
                  onChange={this.onChange}
                />
              </div>
              <button
                type="submit"
                className="btn btn-lg btn-block" id="aa04"
              >
                Sign in
              </button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default Login