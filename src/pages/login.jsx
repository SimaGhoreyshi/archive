import React, { Component } from "react";
import axios from "axios";

class Login extends Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: "",
      users: [],
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
      .get("http://localhost:5000/users")
      .then((res) => {
        this.setState({ users: res.data });
        console.log(this.state.users);
      })
      .catch((err) => {
        console.log(err);
      });

    const { email, password, users } = this.state;
    console.log(email + password);

    const validation = users.map((u) => {
      if (u.email === email && u.password === password) return true;
      else return false;
    });
    console.log(validation);
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
