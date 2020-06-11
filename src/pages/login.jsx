import React, { Component } from "react";

class Login extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
  }
  render() {
    return (
      <div className="container center">
        <div className="card">
          <form>
            <input
              type="text"
              placeholder="ایمیل"
              name="email"
              onChange={this.handleChange}
            />
            <input
              type="text"
              placeholder="کلمه عبور"
              name="password"
              onChange={this.handleChange}
            />
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
