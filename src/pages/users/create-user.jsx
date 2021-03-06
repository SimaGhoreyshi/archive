import React, { Component } from "react";
import axios from "axios";
import "./create-user.css";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

class CreateUser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: null,
      passwordRep: null,
      firstName: "",
      lastName: "",
      phoneNumber: 0,
      registerDate: new Date(),
      role: false,
      profilePic: "https://image.flaticon.com/icons/svg/1738/1738691.svg",
    };

    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onChangePasswordRep = this.onChangePasswordRep.bind(this);
    this.onChangeFirstName = this.onChangeFirstName.bind(this);
    this.onChangeLastName = this.onChangeLastName.bind(this);
    this.onChangePhoneNumber = this.onChangePhoneNumber.bind(this);
    this.onChangeRole = this.onChangeRole.bind(this);
    this.onChangeProfilePic = this.onChangeProfilePic.bind(this);
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

  onChangePasswordRep(e) {
    this.setState({
      passwordRep: e.target.value,
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

  onChangeProfilePic(e) {
    this.setState({
      profilePic: e.target.files[0],
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
      profilePic: this.state.profilePic,
    };
    axios
      .post("http://localhost:5000/users/add", user)
      .then((res) => console.log(res.data));
    toast.success("اپراتور اضافه گردید.");
    window.history.back();

    //window.location = "/users";
  }

  render() {
    console.log(this.state.profilePic);
    return (
      <div className="container form">
        <h2>
          <span className="badge badge-info ">ایجاد اپراتور جدید</span>
        </h2>
        <br />
        <form encType="multipart/form-data" action="/upload">
          <div className="row">
            <div className="input-group col">
              <input
                required
                type="text"
                aria-label="First name"
                placeholder="نام"
                className="form-control col"
                value={this.state.firstName}
                onChange={this.onChangeFirstName}
              />
            </div>
            <div className="input-group col">
              <input
                required
                type="text"
                aria-label="Last name"
                placeholder="نام خانوادگی"
                className="form-control col"
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
              />
            </div>
            <div className="input-group col-4">
              <input
                required
                type="number"
                className="form-control"
                placeholder="شماره همراه"
                aria-label="Phone number"
                onChange={this.onChangePhoneNumber}
              />
              <div className="input-group-append">
                <span className="input-group-text">09</span>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="input-group card user-card">
                <div className="card-body user-card-body">
                  <img
                    alt="profile"
                    src={this.state.profilePic}
                    className="rounded-circle"
                  />
                  <input
                    type="file"
                    className="form-control-file"
                    name="profilePic"
                    accept="image/png, image/jpg, image/jpeg, image/gif"
                    onChangeCapture={this.onChangeProfilePic}
                  />
                  <p>عکس پروفایل</p>
                </div>
                {console.log(this.state.profilePic)}
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
                value={this.state.passwordRep}
                onChange={this.onChangePasswordRep}
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
          <button
            type="submit"
            className="btn btn-primary"
            onClick={
              this.state.password !== this.state.passwordRep
                ? toast.error("تکرار کلمه عبور نادرست است")
                : this.onSubmit
            }
          >
            تایید
          </button>
        </form>
      </div>
    );
  }
}

export default CreateUser;
