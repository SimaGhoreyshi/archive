import React, { Component } from "react";

class UserInfo extends Component {
  render() {
    const email = this.props.email;
    const firstName = this.props.firstName;
    const lastName = this.props.lastName;
    const phoneNumber = this.props.phoneNumber;

    return (
      <div className="container">
        <h2>
          <span className="badge badge-primary ">
            کاربر {firstName + " " + lastName} خوش آمدید
          </span>
        </h2>

        <br />
        <form>
          <div className="row">
            <div style={{ width: "200px", margin: "0.5% 1%" }}>
              <p className="badge badge-info ">نام کامل</p>
              <input
                readOnly
                required
                aria-label="First name"
                className="form-control "
                value={firstName + " " + lastName}
              />
            </div>

            <div style={{ width: "200px", margin: "0.5% 1%" }}>
              <p className="badge badge-info">ایمیل</p>
              <input readOnly required className="form-control" value={email} />
            </div>

            <div style={{ width: "200px", margin: "0.5% 1%" }}>
              <p className="badge badge-info">شماره تماس</p>
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
