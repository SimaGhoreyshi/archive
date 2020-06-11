import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Section = (props) => {
  const date = props.section.registerDate.toString();
  const id = props.section._id;
  console.log(id);

  return (
    <tr>
      <td>
        {props.section.firstName} {props.section.lastName}
      </td>
      <td>{props.section.email}</td>
      <td>{props.section.phoneNumber}</td>
      <td>{date.substring(0, 10)}</td>
      <td>
        <button
          className="btn btn-danger btn-sm"
          onClick={() => {
            props.handleDelete(props.section._id);
          }}
        >
          <i className="fas fa-trash-alt"></i>
        </button>{" "}
        <Link
          className="btn btn-info btn-sm"
          to={"/sections/edit/" + props.section._id}
        >
          <i className="fas fa-pen"></i>
        </Link>{" "}
        <Link
          className="btn btn-success/danger btn-sm"
          to={"/sections/activeToggle/" + props.section._id}
        >
          <i className="fas fa-section-slash"></i>
          <i className="fas fa-section"></i>
        </Link>
      </td>
    </tr>
  );
};

class SectionsList extends Component {
  constructor(props) {
    super(props);

    this.handleDelete = this.handleDelete.bind(this);
    this.SectionList = this.SectionList.bind(this);

    this.state = { sections: [] };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/sections")
      .then((res) => {
        this.setState({ sections: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  SectionList() {
    return this.state.sections.map((currentSection) => {
      return (
        <Section
          section={currentSection}
          handleDelete={this.handleDelete}
          key={currentSection._id}
          sectionId={currentSection._id}
        />
      );
    });
  }
  handleDelete(id) {
    axios
      .delete("http://localhost:5000/sections/" + id)
      .then((res) => console.log(res.data));
    this.setState({
      sections: this.state.sections.filter((u) => u._id !== id),
    });
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
          <tbody>{this.SectionList()}</tbody>
        </table>
      </div>
    );
  }
}

export default SectionsList;
