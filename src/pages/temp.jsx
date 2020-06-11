import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import SearchBox from "../../components/searchBox";

const Student = (props) => {
  //   const date = props.student.registerDate.toString();

  // studentNumber
  // firstName
  // lastName
  // phoneNumber
  // enteringYear
  // college
  // grade
  // nationalCode
  // dateOfBirth
  // lastEditDate
  // lastSamaUpdateDate

  const lastSamaUpdateDate = props.student.lastSamaUpdateDate.toString();
  const lastEditDate = props.student.lastEditDate.toString();
  return (
    <tr>
      <td>?</td>
      <td>
        {props.student.firstName} {props.student.lastName}
      </td>
      <td>{props.student.studentNumber}</td>
      <td>{props.student.grade}</td>
      <td>{props.student.fund}</td>
      <td>{props.student.quota}</td>
      <td>{props.student.enteringYear}</td>
      <td>{props.student.graduationYear}</td>
      <td>{props.student.birthCertificate}</td>
      <td>{lastEditDate.substring(0, 10)}</td>
      <td>{props.student.status}</td>
      <td>{lastSamaUpdateDate.substring(0, 10)}</td>
      <td> </td>
      <td>
        <Link
          className="btn btn-info btn-sm"
          to={"/students/edit/" + props.student._id}
        >
          <i className="fas fa-pen"></i>
        </Link>{" "}
        <Link
          className="btn btn-info btn-sm"
          to={"/students/details/" + props.student._id}
        >
          <i className="fas fa-student-slash"></i>
          <i className="far fa-eye"></i>
        </Link>
      </td>
    </tr>
  );
};

class StudentsList extends Component {
  constructor(props) {
    super(props);

    // this.StudentList = this.StudentList.bind(this);
    // this.onChangeFirstName = this.onChangeFirstName(this);
    // this.onChangeLastName = this.onChangeLastName(this);
    // this.onChangeNationalCode = this.onChangeNationalCode(this);
    // this.onChangeBirthCertificateCode = this.onChangeBirthCertificateCode(this);
    // this.onChangeStudentNumber = this.onChangeStudentNumber(this);
    // this.onChangeEnteringYear = this.onChangeEnteringYear(this);
    // this.onChangeGraduationYear = this.onChangeEnteringYear(this);
    // this.onChangeCollege = this.onChangeCollege(this);
    // this.onChangeField = this.onChangeField(this);
    // this.onChangeGrade = this.onChangeGrade(this);
    // this.onChangeFund = this.onChangeFund(this);
    // this.onChangeQuota = this.onChangeQuota(this);
    // this.onChangeStatus = this.onChangeStatus(this);

    this.state = {
      searchQuery: "",
      students: [],
    };
  }

  //   onChangeFirstName(e) {
  //     this.setState({
  //       firstName: e.target.value,
  //     });
  //   }

  //   onChangeLastName(e) {
  //     this.setState({
  //       lastName: e.target.value,
  //     });
  //   }

  //   onChangeNationalCode(e) {
  //     this.setState({
  //       nationalCode: e.target.value,
  //     });
  //   }

  //   onChangeBirthCertificateCode(e) {
  //     this.setState({
  //       birthCertificateCode: e.target.value,
  //     });
  //   }

  //   onChangeStudentNumber(e) {
  //     this.setState({
  //       studentNumber: e.target.value,
  //     });
  //   }

  //   onChangeEnteringYear(e) {
  //     this.setState({
  //       enteringYear: e.target.value,
  //     });
  //   }

  //   onChangeGraduationYear(e) {
  //     this.setState({
  //       graduationYear: e.target.value,
  //     });
  //   }

  //   onChangeCollege(e) {
  //     this.setState({
  //       college: e.target.value,
  //     });
  //   }

  //   onChangeField(e) {
  //     this.setState({
  //       field: e.target.value,
  //     });
  //   }

  //   onChangeGrade(e) {
  //     this.setState({
  //       grade: e.target.value,
  //     });
  //   }

  //   onChangeFund(e) {
  //     this.setState({
  //       fund: e.target.value,
  //     });
  //   }

  //   onChangeQuota(e) {
  //     this.setState({
  //       quota: e.target.value,
  //     });
  //   }

  //   onChangeStatus(e) {
  //     this.setState({
  //       status: e.target.value,
  //     });
  //   }

  componentDidMount() {
    axios
      .get("http://localhost:5000/students")
      .then((res) => {
        this.setState({ students: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  handleSearch = (e) => {
    this.setState({ searchQuery: e.target.value });
  };

  StudentList() {
    const { searchQuery } = this.state;
    let studentsList = {};
    const allStudents = this.state.students.map((currentStudent) => {
      return (
        <Student
          student={currentStudent}
          key={currentStudent._id}
          studentId={currentStudent._id}
        />
      );
    });

    console.log(searchQuery);
    if (searchQuery) {
      studentsList = allStudents.filter((s) => {
        if (s.firstName.indexOf(this.state.searchQuery) !== -1) {
          return s.firstName.indexOf(searchQuery) !== -1;
        } else return "نتیجه ای یافت نسد";
      });
      return studentsList;
    }
    return allStudents;
  }

  render() {
    return (
      <div className="table-responsive mx-0" style={{ marginLeft: "0" }}>
        <input
          className="form-control"
          value={this.state.searchQuery}
          placeholder="نام"
          onChange={this.handleSearch.bind(this)}
        />
        <h1 style={{ marginRight: "1vw" }}>مدیریت دانشجویان</h1>
        <br />
        <table className="table table-striped">
          <thead>
            <tr>
              <th>?</th>
              <th>نام کامل</th>
              <th>شماره دانشجویی</th>
              <th>مقطع</th>
              <th>دوره</th>
              <th>سهمیه</th>
              <th>سال ورود</th>
              <th>سال فراغت</th>
              <th>آخرین تغییرات</th>
              <th>وضعیت</th>
              <th>آخرین بروزرسانی</th>
              <th>توضیحات</th>
              <th> </th>
            </tr>
          </thead>
          <tbody>{this.StudentList()}</tbody>
        </table>
      </div>
    );
  }
}

export default StudentsList;

// const studentNumber = Number(req.body.studentNumber);
// const firstName = req.body.firstName;
// const lastName = req.body.lastName;
// const phoneNumber = Number(req.body.phoneNumber);
// const enteringYear = Number(req.body.enteringYear);
// const college = req.body.college;
// const grade = req.body.grade;
// const nationalCode = Number(req.body.nationalCode);
// const dateOfBirth = Number(req.body.dateOfBirth);
// const lastEditDate = Date(req.body.lastEditDate);
// const lastSamaUpdateDate = Date(req.body.lastSamaUpdateDate);
