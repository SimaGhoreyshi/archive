import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const User = (props) => {
  const date = props.user.registerDate.toString();
  const id = props.user._id;
  console.log(id);

  return (
    <tr>
      <td>
        {props.user.firstName} {props.user.lastName}
      </td>
      <td>{props.user.email}</td>
      <td>{props.user.phoneNumber}</td>
      <td>{date.substring(0, 9)}</td>
      <td>
        <button
          className="btn btn-danger btn-sm"
          onClick={() => {
            props.handleDelete(props.user._id);
          }}
        >
          <i className="fas fa-trash-alt"></i>
        </button>{" "}
        <Link
          className="btn btn-info btn-sm"
          to={"/users/edit/" + props.user._id}
        >
          <i className="fas fa-pen"></i>
        </Link>{" "}
        <Link
          className="btn btn-success/danger btn-sm"
          to={"/users/activeToggle/" + props.user._id}
        >
          <i className="fas fa-user-slash"></i>
          <i className="fas fa-user"></i>
        </Link>
      </td>
    </tr>
  );
};

class UsersList extends Component {
  constructor(props) {
    super(props);

    this.handleDelete = this.handleDelete.bind(this);
    this.UserList = this.UserList.bind(this);

    this.state = { users: [] };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/users")
      .then((res) => {
        this.setState({ users: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  UserList() {
    return this.state.users.map((currentUser) => {
      return (
        <User
          user={currentUser}
          handleDelete={this.handleDelete}
          key={currentUser._id}
          userId={currentUser._id}
        />
      );
    });
  }
  handleDelete(id) {
    axios
      .delete("http://localhost:5000/users/" + id)
      .then((res) => console.log(res.data));
    this.setState({ users: this.state.users.filter((u) => u._id !== id) });
  }
  render() {
    return (
      <div className="container">
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">نام کامل</th>
              <th>ایمیل</th>
              <th>شماره همراه</th>
              <th>زمان ثبت نام</th>
              <th>ویرایش</th>
            </tr>
          </thead>
          <tbody>{this.UserList()}</tbody>
        </table>
      </div>
    );
  }
}

export default UsersList;
