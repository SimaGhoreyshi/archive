import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./sections-list.css";
import Pagination from "../../components/pagination";
import { paginate } from "../../utils/paginate";

const Section = (props) => {
  const date = props.section.registerDate.toString().substring(0, 10);

  return (
    <tr>
      <td>{props.section.title}</td>
      <td>{props.section.managerName}</td>
      <td>{props.section.phoneNumber}</td>
      <td>{date}</td>
      <td>
        <Link
          className="btn btn-info btn-sm"
          to={"/sections/edit/" + props.section._id}
        >
          <i className="fas fa-pen"></i>
        </Link>{" "}
      </td>
    </tr>
  );
};

class SectionsList extends Component {
  constructor(props) {
    super(props);

    this.state = { sections: [], pageSize: 2, currentPage: 1 };
  }

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };
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

  render() {
    const { sections, pageSize, currentPage } = this.state;
    const mySections = paginate(sections, currentPage, pageSize);
    return (
      <div className="container sectionTbl">
        <h2>
          <span className="badge badge-info ">مدیریت بخش ها</span>
        </h2>
        <br />
        <table className="table table-striped sectionTable">
          <thead>
            <tr>
              <th>عنوان</th>
              <th>مدیر</th>
              <th>شماره همراه</th>
              <th>تاریخ ثبت</th>
              <th>ویرایش</th>
            </tr>
          </thead>
          <tbody>
            {mySections.map((currentSection) => {
              return (
                <Section
                  section={currentSection}
                  key={currentSection._id}
                  sectionId={currentSection._id}
                />
              );
            })}
          </tbody>
        </table>

        <Pagination
          itemsCount={sections.length}
          pageSize={pageSize}
          currentPage={currentPage}
          onPageChange={this.handlePageChange}
        />
      </div>
    );
  }
}

export default SectionsList;
