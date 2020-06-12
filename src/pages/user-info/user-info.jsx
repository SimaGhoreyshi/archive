import React, { Component } from "react";
import "./user-info.css";

class UserInfo extends Component {
  render() {
    const email = this.props.email;
    const firstName = this.props.firstName;
    const lastName = this.props.lastName;
    const phoneNumber = this.props.phoneNumber;
    const profilePic = "https://image.flaticon.com/icons/svg/1738/1738691.svg";

    return (
      <div className="container form">
        <h2 className="welcome">
          کاربر {firstName + " " + lastName} خوش آمدید
        </h2>

        <br />
        <form>
          <div className="row">
            <img
              alt="profile picture"
              src={profilePic}
              className="rounded-circle"
            />
          </div>
          <div className="row">
            <div className="col" style={{ width: "200px", margin: "0.5% 1%" }}>
              <label>نام کامل</label>
              <input
                readOnly
                required
                aria-label="First name"
                className="form-control "
                value={firstName + " " + lastName}
              />
            </div>

            <div className="col" style={{ width: "200px", margin: "0.5% 1%" }}>
              <label>ایمیل</label>
              <input readOnly required className="form-control" value={email} />
            </div>

            <div className="col" style={{ width: "200px", margin: "0.5% 1%" }}>
              <label>شماره تماس</label>
              <input
                readOnly
                required
                className="form-control"
                value={"09" + phoneNumber}
              />
            </div>
          </div>
          <br />
        </form>
      </div>
    );
  }
}

export default UserInfo;
