import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./users-list.css";
import Pagination from "../../components/pagination";
import { paginate } from "../../utils/paginate";

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
      <td>{date.substring(0, 10)}</td>
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

    this.state = { users: [], pageSize: 2, currentPage: 1 };
  }

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };
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

  handleDelete(id) {
    axios
      .delete("http://localhost:5000/users/" + id)
      .then((res) => console.log(res.data));
    this.setState({ users: this.state.users.filter((u) => u._id !== id) });
  }
  render() {
    const { users, pageSize, currentPage } = this.state;
    const myUsers = paginate(users, currentPage, pageSize);
    return (
      <div className="container userTbl">
        <h2>
          <span className="badge badge-info ">لیست اپراتورها</span>
        </h2>
        <br />
        <table className="table table-striped myTbl">
          <thead>
            <tr>
              <th scope="col">نام کامل</th>
              <th>ایمیل</th>
              <th>شماره همراه</th>
              <th>زمان ثبت نام</th>
              <th>ویرایش</th>
            </tr>
          </thead>
          <tbody>
            {myUsers.map((currentUser) => {
              return (
                <User
                  user={currentUser}
                  handleDelete={this.handleDelete}
                  key={currentUser._id}
                  userId={currentUser._id}
                />
              );
            })}
          </tbody>
        </table>
        <Pagination
          itemsCount={users.length}
          pageSize={pageSize}
          currentPage={currentPage}
          onPageChange={this.handlePageChange}
        />
      </div>
    );
  }
}

export default UsersList;
