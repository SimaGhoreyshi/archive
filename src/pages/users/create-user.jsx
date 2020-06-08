import React, { Component } from "react";
import axios from "axios";
import "./create-user.css";

class CreateUser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      phoneNumber: 0,
      registerDate: new Date(),
      role: false,
    };

    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onChangeFirstName = this.onChangeFirstName.bind(this);
    this.onChangeLastName = this.onChangeLastName.bind(this);
    this.onChangePhoneNumber = this.onChangePhoneNumber.bind(this);
    this.onChangeRole = this.onChangeRole.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value,
    });
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value,
    });
  }

  onChangeFirstName(e) {
    this.setState({
      firstName: e.target.value,
    });
  }

  onChangeLastName(e) {
    this.setState({
      lastName: e.target.value,
    });
  }

  onChangePhoneNumber(e) {
    this.setState({
      phoneNumber: e.target.value,
    });
  }

  onChangeRole(e) {
    this.setState({
      role: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const user = {
      email: this.state.email,
      password: this.state.password,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      phoneNumber: this.state.phoneNumber,
      role: this.state.role,
    };

    console.log(user);

    axios
      .post("http://localhost:5000/users/add", user)
      .then((res) => console.log(res.data));

    //window.location = "/users";
  }

  render() {
    return (
      <div className="container">
        <h2>
          <span className="badge badge-info ">ایجاد اپراتور جدید</span>
        </h2>
        <br />
        <form onSubmit={this.onSubmit}>
          <div className="row">
            <div className="input-group col">
              <div className="input-group-prepend">
                <span className="input-group-text">نام و نام خانوادگی</span>
              </div>
              <input
                required
                type="text"
                aria-label="First name"
                placeholder="نام"
                className="form-control"
                value={this.state.firstName}
                onChange={this.onChangeFirstName}
              />
              <input
                required
                type="text"
                aria-label="Last name"
                placeholder="نام خانوادگی"
                className="form-control"
                value={this.state.lastName}
                onChange={this.onChangeLastName}
              />
            </div>
          </div>
          <div className="row">
            <div className="input-group col">
              <input
                required
                type="text"
                className="form-control"
                placeholder="ایمیل"
                aria-label="Email"
                value={this.state.email}
                onChange={this.onChangeEmail}
              ></input>
            </div>
            <div className="input-group col-4">
              <input
                required
                type="number"
                className="form-control"
                placeholder="شماره همراه"
                aria-label="Phone number"
                value={this.state.phoneNumber}
                onChange={this.onChangePhoneNumber}
              />
              <div className="input-group-append">
                <span className="input-group-text" id="basic-addon2">
                  09
                </span>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="input-group col">
              <input
                required
                type="text"
                className="form-control"
                placeholder="کلمه عبور"
                aria-label="Password"
                value={this.state.password}
                onChange={this.onChangePassword}
              ></input>
            </div>
            <div className="input-group col">
              <input
                type="text"
                className="form-control"
                placeholder="تکرار کلمه عبور"
                aria-label="Password"
              />
            </div>
          </div>
          <div className="form-check form-check-inline">
            <label className="form-check-label">مدیر پنل</label>
            <input
              className="form-check-input"
              type="checkbox"
              value={this.state.role}
              onChange={this.onChangeRole}
            />
          </div>
          <br />
          <br />
          <button type="submit" className="btn btn-primary">
            تایید
          </button>
        </form>
      </div>
    );
  }
}

export default CreateUser;