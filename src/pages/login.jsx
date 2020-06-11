import React, { Component } from "react";
import axios from "axios";

class Login extends Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: "",
    };

    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChangeEmail(e) {
    this.setState({ email: e.target.value });
  }

  onChangePassword(e) {
    this.setState({ password: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    axios
      .post("/auth/getToken", {
        email: this.state.email,
        password: this.state.password,
      })
      .then((res) => localStorage.setItem("jwt", res.data));
  }

  render() {
    return (
      <div className="container center">
        <form onSubmit={this.onSubmit}>
          <input
            className="form-control"
            type="text"
            placeholder="ایمیل"
            name="email"
            value={this.state.email}
            onChange={this.onChangeEmail}
          />
          <input
            className="form-control"
            type="text"
            placeholder="کلمه عبور"
            name="password"
            value={this.state.password}
            onChange={this.onChangePassword}
          />
          <button
            className="btn btn-primary"
            value="submit"
            onClick={this.onSubmit}
          >
            ورود
          </button>
        </form>
      </div>
    );
  }
}

export default Login;
