import React, { Component } from "react";
import "./App.css";

import { Route, Redirect, Switch } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";

import NavBar from "./components/navbar";
import Footer from "./components/footer";

import Areas from "./pages/areas";
import UserInfo from "./pages/user-info/user-info";
import Dashboard from "./pages/dashboard";

import UsersList from "./pages/users/users-list";
import CreateUser from "./pages/users/create-user";
import EditUser from "./pages/users/edit-user";

import StudentsList from "./pages/students/students-list";
import StudentDetail from "./pages/students/student-detail";

import SectionsList from "./pages/sections/sections-list";
import CreateSection from "./pages/sections/create-section";
import EditSection from "./pages/sections/edit-section";

import Reports from "./pages/reports";

import axios from "axios";

let validation = false;

class App extends Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: "",
      users: [],
      authenticatedUser: {},
      val: false,
      //  style :{
      //   fontSize: 60,
      //   opacity: 0,
      //   transition: 'all 2s ease',
      // }
    };

    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onSubmitLogin = this.onSubmitLogin.bind(this);
    this.render = this.render.bind(this);
    // this.transitionEnd = this.transitionEnd.bind(this);
    // this.mountStyle = this.mountStyle.bind(this);
    // this.unMountStyle = this.unMountStyle.bind(this);
  }

  onChangeEmail(e) {
    this.setState({ email: e.target.value });
  }

  onChangePassword(e) {
    this.setState({ password: e.target.value });
  }
  componentDidMount() {
    axios
      .get("http://localhost:5000/users")
      .then((res) => {
        this.setState({ users: res.data });
        console.log(this.state.users);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  onSubmitLogin = (e) => {
    e.preventDefault();
    const { email, password, users } = this.state;
    console.log(this);
    for (let i = 0; i < this.state.users.length; i++) {
      if (this.state.email === this.state.users[i].email) {
        validation = true;
        this.setState({ authenticatedUser: users[0] });
        if (validation) break;
        this.forceUpdate();
      } else {
        validation = false;
      }
    }
  };

  render() {
    if (validation === false) {
      console.log("login");

      return (
        <div className="loginBox">
          <form className="loginForm" onSubmit={this.onSubmitLogin}>
            <img
              alt="logo"
              src="https://image.flaticon.com/icons/svg/2038/2038116.svg"
              className="login-logo"
            />
            <p className="enter">ورود به آرشیو دانشجویی</p>
            <input
              type="text"
              placeholder="ایمیل"
              name="email"
              value={this.state.email}
              onChange={this.onChangeEmail}
            />
            <input
              type="text"
              placeholder="کلمه عبور"
              name="password"
              value={this.state.password}
              onChange={this.onChangePassword}
            />

            <button
              className="btnSubmit"
              value="submit"
              onClick={this.onSubmitLogin}
            >
              ورود
            </button>
          </form>
        </div>
      );
    } else {
      console.log("website", validation);

      return (
        <React.Fragment>
          <NavBar
            username={
              this.state.authenticatedUser.firstName +
              " " +
              this.state.authenticatedUser.lastName
            }
          />
          <br />
          <br />
          <br />
          <div>
            <Switch>
              <Route
                path="/user-info"
                render={() => (
                  <UserInfo
                    email={this.state.authenticatedUser.email}
                    firstName={this.state.authenticatedUser.firstName}
                    lastName={this.state.authenticatedUser.lastName}
                    phoneNumber={this.state.authenticatedUser.phoneNumber}
                    profilePic={
                      "https://image.flaticon.com/icons/svg/1738/1738691.svg"
                    }
                  />
                )}
              />
              <Route path="/users/add" component={CreateUser} />
              <Route path="/users/edit/:id" component={EditUser} />
              <Route path="/users" component={UsersList} />

              <Route path="/students/details/:id" component={StudentDetail} />
              <Route path="/students" component={StudentsList} />

              <Route path="/sections/add" component={CreateSection} />
              <Route path="/sections/edit/:id" component={EditSection} />
              <Route path="/sections" component={SectionsList} />

              <Route path="/areas" component={Areas} />
              <Route path="/dashboard" component={Dashboard} />
              <Route path="/reports" component={Reports} />

              <Route
                path="/"
                render={() => (
                  <UserInfo
                    email={this.state.authenticatedUser.email}
                    firstName={this.state.authenticatedUser.firstName}
                    lastName={this.state.authenticatedUser.lastName}
                    phoneNumber={this.state.authenticatedUser.phoneNumber}
                    profilePic={
                      "https://image.flaticon.com/icons/svg/1738/1738691.svg"
                    }
                  />
                )}
              />
              <Redirect exact from="/" to="/user-info" />
              <Redirect exact to="/not-found" />
            </Switch>
          </div>
          <br />
          <br />
          <Footer />
        </React.Fragment>
      );
    }
  }
}

export default App;
