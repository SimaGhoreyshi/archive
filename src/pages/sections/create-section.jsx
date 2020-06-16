import React, { Component } from "react";
import axios from "axios";
import "./create-section.css";

import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

class CreateSection extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      managerName: "",
      phoneNumber: 0,
      registerDate: new Date(),
      users: [],
    };

    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeManagerName = this.onChangeManagerName.bind(this);
    this.onChangePhoneNumber = this.onChangePhoneNumber.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/users")
      .then((res) => {
        if (res.data.length) {
          this.setState({
            users: res.data,
            managerName: res.data[0].firstName + " " + res.data[0].lastName,
            phoneNumber: res.data[0].phoneNumber,
          });
          console.log(this.state.managerName + this.state.phoneNumber);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  onChangeTitle(e) {
    this.setState({
      title: e.target.value,
    });
  }

  onChangeManagerName(e) {
    this.setState({
      managerName: e.target.value,
    });
  }

  onChangePhoneNumber(e) {
    this.setState({
      phoneNumber: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const section = {
      title: this.state.title,
      managerName: this.state.managerName,
      phoneNumber: this.state.phoneNumber,
      registerDate: Date(),
    };

    axios
      .post("http://localhost:5000/sections/add", section)
      .then((res) => {
        toast.success("بخش جدید اضافه گردید");
      })
      .catch((err) => console.log(err));
    window.history.back();
    //window.location = "/sections";
  }

  render() {
    return (
      <div className="container form">
        <h2>
          <span className="badge badge-info ">ایجاد بخش جدید</span>
        </h2>
        <br />
        <form onSubmit={this.onSubmit}>
          <div className="input-group ">
            <input
              required
              type="text"
              className="form-control"
              placeholder="عنوان"
              aria-label="title"
              value={this.state.title}
              onChange={this.onChangeTitle}
            ></input>
          </div>
          <div className="input-group ">
            <label>انتخاب مدیر</label>
            <select
              ref="userInput"
              required
              className="form-control"
              value={this.state.managerName}
              onChange={this.onChangeManagerName}
            >
              {this.state.users.map((user) => {
                return (
                  <option key={user._id}>
                    {user.firstName + " " + user.lastName}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="input-group">
            <input
              required
              type="number"
              className="form-control "
              placeholder="شماره همراه"
              aria-label="Phone number"
              value={"09" + this.state.phoneNumber}
              readOnly
            />
          </div>

          <br />
          <br />
          <button
            type="submit"
            className="btn btn-primary"
            onClick={this.onSubmit}
          >
            تایید
          </button>
        </form>
      </div>
    );
  }
}

export default CreateSection;
