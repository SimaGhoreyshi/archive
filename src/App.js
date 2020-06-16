import React, { Component } from "react";
import "./App.css";
import { Route, Redirect, Switch } from "react-router-dom";

import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";

import NavBar from "./components/navbar";
import Footer from "./components/footer";

import Zones from "./pages/zones";
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
      email: null,
      password: null,
      users: [],
      authenticatedUser: {},
      passwordType: false,
      errorEmail: false,
      errorPassword: false,
      //  style :{
      //   fontSize: 60,
      //   opacity: 0,
      //   transition: 'all 2s ease',
      // }
    };

    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onSubmitLogin = this.onSubmitLogin.bind(this);
    this.showPassword = this.showPassword.bind(this);
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

    if (email !== "" && password !== "")
      for (let i = 0; i < this.state.users.length; i++) {
        if (
          email === this.state.users[i].email &&
          password === this.state.users[i].password
        ) {
          validation = true;
          this.setState({ authenticatedUser: users[i] });
          if (validation) break;
        } else {
          validation = false;
        }
      }
    if (!validation) toast.error("ایمیل یا کلمه عبور نادرست است.");
  };
  showPassword() {
    if (this.state.passwordType) this.setState({ passwordType: false });
    else this.setState({ passwordType: true });
  }
  render() {
    if (validation === false) {
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
              className="emailField"
              value={this.state.email}
              onChange={this.onChangeEmail}
            />
            {this.state.email === "" && (
              <div className="alert alert-danger">
                لطفا ایمیل را وارد نمایید
              </div>
            )}
            <div class="input-group password">
              <i
                className={
                  this.state.passwordType ? "far fa-eye" : "fas fa-eye-slash"
                }
                onClick={this.showPassword}
                aria-hidden="true"
              ></i>
              <input
                type={this.state.passwordType ? "text" : "password"}
                className="passwordField"
                placeholder="کلمه عبور"
                name="password"
                value={this.state.password}
                onChange={this.onChangePassword}
              />
              {this.state.password === "" && (
                <div className="alert alert-danger alert-password">
                  لطفا کلمه عبور را وارد نمایید
                </div>
              )}
            </div>

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
                      this.state.authenticatedUser.profilePic === undefined
                        ? "https://image.flaticon.com/icons/svg/1738/1738691.svg"
                        : this.state.authenticatedUser.profilePic
                    }
                    {...console.log(this.state.authenticatedUser.profilePic)}
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

              <Route path="/areas" component={Zones} />
              <Route path="/dashboard" component={Dashboard} />
              <Route path="/reports" component={Reports} />
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
