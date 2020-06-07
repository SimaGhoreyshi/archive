import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Student = (props) => {
  //   const date = props.student.registerDate.toString();
  const id = props.student._id;
  console.log(id);

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
  constructor(props) {
    super(props);

    // this.StudentList = this.StudentList.bind(this);
    // this.onChangeFirstName = this.onChangeFirstName.bind(this);
    // this.onChangeLastName = this.onChangeLastName.bind(this);
    // this.onChangeNationalCode = this.onChangeNationalCode.bind(this);
    // this.onChangeBirthCertificateCode = this.onChangeBirthCertificateCode.bind(
    //   this
    // );
    // this.onChangeStudentNumber = this.onChangeStudentNumber.bind(this);
    // this.onChangeEnteringYear = this.onChangeEnteringYear.bind(this);
    // this.onChangeGraduationYear = this.onChangeEnteringYear.bind(this);
    // this.onChangeCollege = this.onChangeCollege.bind(this);
    // this.onChangeField = this.onChangeField.bind(this);
    // this.onChangeGrade = this.onChangeGrade.bind(this);
    // this.onChangeFund = this.onChangeFund.bind(this);
    // this.onChangeQuota = this.onChangeQuota.bind(this);
    // this.onChangeStatus = this.onChangeStatus.bind(this);

    this.state = { students: [] };
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

  StudentList() {
    let studentsList = this.state.students;
    return studentsList.map((currentStudent) => {
      return (
        <Student
          student={currentStudent}
          key={currentStudent._id}
          studentId={currentStudent._id}
        />
      );
    });
  }

  render() {
    return (
      <div className="table-responsive mx-0" style={{ marginLeft: "0" }}>
        {/* <input
          type="text"
          placeholder="نام"
          onChange={this.onChangeFirstName}
        /> */}
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
