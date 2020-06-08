import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

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
      <td>{lastEditDate.substring(0, 9)}</td>
      <td>{props.student.status}</td>
      <td>{lastSamaUpdateDate.substring(0, 9)}</td>
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
          <i className="far fa-eye"></i>
        </Link>
      </td>
    </tr>
  );
};

class StudentsList extends Component {
  constructor() {
    super();

    this.StudentList = this.StudentList.bind(this);
    this.onSerarchByFirstName = this.onSerarchByFirstName.bind(this);
    // this.onSerarchByLastName = this.onSerarchByLastName.bind(this);
    // this.onSerarchByNationalCode = this.onSerarchByNationalCode.bind(this);
    // this.onSerarchByBirthCertificateCode = this.onSerarchByBirthCertificateCode.bind(
    //   this
    // );
    // this.onSerarchByStudentNumber = this.onSerarchByStudentNumber.bind(this);
    // this.onSerarchByEnteringYear = this.onSerarchByEnteringYear.bind(this);
    // this.onSerarchByGraduationYear = this.onSerarchByEnteringYear.bind(this);
    // this.onSerarchByCollege = this.onSerarchByCollege.bind(this);
    // this.onSerarchByField = this.onSerarchByField.bind(this);
    // this.onSerarchByGrade = this.onSerarchByGrade.bind(this);
    // this.onSerarchByFund = this.onSerarchByFund.bind(this);
    // this.onSerarchByQuota = this.onSerarchByQuota.bind(this);
    // this.onSerarchByStatus = this.onSerarchByStatus.bind(this);

    this.state = { searchKey: "", students: [] };
  }

  onSerarchByFirstName(e) {
    this.setState({
      searchKey: e.target.value,
    });
  }

  onSearchLastName(e) {
    this.setState({
      searchKey: e.target.value,
    });
  }

  //   onSearchNationalCode(e) {
  //     this.setState({
  //       nationalCode: e.target.value,
  //     });
  //   }

  //   onSearchBirthCertificateCode(e) {
  //     this.setState({
  //       birthCertificateCode: e.target.value,
  //     });
  //   }

  //   onSearchStudentNumber(e) {
  //     this.setState({
  //       studentNumber: e.target.value,
  //     });
  //   }

  //   onSearchEnteringYear(e) {
  //     this.setState({
  //       enteringYear: e.target.value,
  //     });
  //   }

  //   onSearchGraduationYear(e) {
  //     this.setState({
  //       graduationYear: e.target.value,
  //     });
  //   }

  //   onSearchCollege(e) {
  //     this.setState({
  //       college: e.target.value,
  //     });
  //   }

  //   onSearchField(e) {
  //     this.setState({
  //       field: e.target.value,
  //     });
  //   }

  //   onSearchGrade(e) {
  //     this.setState({
  //       grade: e.target.value,
  //     });
  //   }

  //   onSearchFund(e) {
  //     this.setState({
  //       fund: e.target.value,
  //     });
  //   }

  //   onSearchQuota(e) {
  //     this.setState({
  //       quota: e.target.value,
  //     });
  //   }

  //   onSearchStatus(e) {
  //     this.setState({
  //       status: e.target.value,
  //     });
  //   }

  StudentList() {
    let allStudents = this.state.students;
    console.log(this.state.searchKey);
    const { searchKey } = this.state.searchKey;
    let studentsList = null;
    if (this.state.searchKey) {
      studentsList = allStudents.filter((s) => {
        if (s.firstName.indexOf(this.state.searchKey) !== -1) return s;
        else return null;
      });
    } else {
      studentsList = allStudents;
    }

    if (studentsList !== null) {
      return studentsList.map((currentStudent) => {
        return (
          <Student
            student={currentStudent}
            key={currentStudent._id}
            studentId={currentStudent._id}
          />
        );
      });
    } else {
      return <p>نتیجه ای یافت نشد</p>;
    }
  }

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

  render() {
    return (
      <div className="table-responsive" style={{ marginLeft: "0" }}>
        <input
          type="text"
          placeholder="نام"
          onChange={this.onSerarchByFirstName}
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
