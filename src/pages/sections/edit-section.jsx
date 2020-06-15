import React, { Component } from "react";
import axios from "axios";

class EditSection extends Component {
  constructor(props) {
    super(props);

    this.state = {
      managerName: "",
      phoneNumber: 0,
      title: "",
      users: [],
    };

    this.onChangeManagerName = this.onChangeManagerName.bind(this);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangePhoneNumber = this.onChangePhoneNumber.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/users/")
      .then((res) => {
        this.setState({
          users: res.data,
          managerName: res.data[0].firstName + " " + res.data[0].lastName,
          phoneNumber: res.data[0].phoneNumber,
        });
      })
      .catch(function (error) {
        console.log(error);
      });

    axios
      .get("http://localhost:5000/sections/" + this.props.match.params.id)
      .then((res) => {
        this.setState({
          title: res.data.title,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  onChangeManagerName(e) {
    this.setState({
      managerName: e.target.value,
    });
  }

  onChangeTitle(e) {
    this.setState({
      title: e.target.value,
    });
  }

  onChangePhoneNumber(e) {
    this.setState({
      phoneNumber: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const user = {
      title: this.state.title,
      managerName: this.state.managerName,
      phoneNumber: Number(this.state.phoneNumber),
    };
    console.log(user);

    axios
      .post(
        "http://localhost:5000/sections/edit/" + this.props.match.params.id,
        user
      )
      .then((res) => console.log(res.data));

    window.location = "/sections";
  }
  render() {
    return (
      <div className="container">
        <h2>
          <span className="badge badge-primary ">ویرایش بخش</span>
        </h2>
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
          <button type="submit" className="btn btn-primary">
            تایید
          </button>
        </form>
      </div>
    );
  }
}

export default EditSection;
