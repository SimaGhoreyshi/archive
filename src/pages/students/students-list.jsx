import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Student = (props) => {
  ////   const date = props.student.registerDate.toString();

  //// studentNumber
  //// firstName
  //// lastName
  //// phoneNumber
  //// enteringYear
  //// college
  //// grade
  //// nationalCode
  //// dateOfBirth
  //// lastEditDate
  //// lastSamaUpdateDate

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

    this.onClickField = this.onClickField.bind(this);
    this.onChange = this.onChange.bind(this);
    this.StudentList = this.StudentList.bind(this);
    // this.onSerarchByFirstName = this.onSerarchByFirstName.bind(this);
    //// this.onSerarchByLastName = this.onSerarchByLastName.bind(this);
    //// this.onSerarchByNationalCode = this.onSerarchByNationalCode.bind(this);
    //// this.onSerarchByBirthCertificateCode = this.onSerarchByBirthCertificateCode.bind(
    ////   this
    //// );
    //// this.onSerarchByStudentNumber = this.onSerarchByStudentNumber.bind(this);
    //// this.onSerarchByEnteringYear = this.onSerarchByEnteringYear.bind(this);
    //// this.onSerarchByGraduationYear = this.onSerarchByEnteringYear.bind(this);
    //// this.onSerarchByCollege = this.onSerarchByCollege.bind(this);
    //// this.onSerarchByField = this.onSerarchByField.bind(this);
    //// this.onSerarchByGrade = this.onSerarchByGrade.bind(this);
    //// this.onSerarchByFund = this.onSerarchByFund.bind(this);
    //// this.onSerarchByQuota = this.onSerarchByQuota.bind(this);
    //// this.onSerarchByStatus = this.onSerarchByStatus.bind(this);

    this.state = { searchKey: "", searchField: null, students: [] };
  }

  onClickField(e) {
    this.setState({ searchField: e.target.name });
    console.log(this.state.students);
  }

  onChange(e) {
    this.setState({
      searchKey: e.target.value,
    });
  }

  //   onSerarchByFirstName(e) {
  //     this.setState({
  //       searchKey: e.target.value,
  //     });
  //   }

  //   onSearchLastName(e) {
  //     this.setState({
  //       searchKey: e.target.value,
  //     });
  //   }

  ////   onSearchNationalCode(e) {
  ////     this.setState({
  ////       nationalCode: e.target.value,
  ////     });
  ////   }

  ////   onSearchBirthCertificateCode(e) {
  ////     this.setState({
  ////       birthCertificateCode: e.target.value,
  ////     });
  ////   }

  ////   onSearchStudentNumber(e) {
  ////     this.setState({
  ////       studentNumber: e.target.value,
  ////     });
  ////   }

  ////   onSearchEnteringYear(e) {
  ////     this.setState({
  ////       enteringYear: e.target.value,
  ////     });
  ////   }

  ////   onSearchGraduationYear(e) {
  ////     this.setState({
  ////       graduationYear: e.target.value,
  ////     });
  ////   }

  ////   onSearchCollege(e) {
  ////     this.setState({
  ////       college: e.target.value,
  ////     });
  ////   }

  ////   onSearchField(e) {
  ////     this.setState({
  ////       field: e.target.value,
  ////     });
  ////   }

  ////   onSearchGrade(e) {
  ////     this.setState({
  ////       grade: e.target.value,
  ////     });
  ////   }

  ////   onSearchFund(e) {
  ////     this.setState({
  ////       fund: e.target.value,
  ////     });
  ////   }

  ////   onSearchQuota(e) {
  ////     this.setState({
  ////       quota: e.target.value,
  ////     });
  ////   }

  ////   onSearchStatus(e) {
  ////     this.setState({
  ////       status: e.target.value,
  ////     });
  ////   }

  StudentList() {
    let allStudents = this.state.students;
    console.log(this.state.searchField);
    console.log(this.state.searchKey);
    let studentsList = null;

    if (this.state.searchKey) {
      studentsList = allStudents.filter((s) => {
        const searchField = this.state.searchField;

        console.log(s[searchField]);

        if (s[searchField].toString().indexOf(this.state.searchKey) !== -1)
          return s;
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
      .get("http:////localhost:5000/students")
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
        <br />
        <h1 style={{ marginRight: "1vw" }}>مدیریت دانشجویان</h1>
        <br />
        <div className="searchBar">
          <input
            name="firstName"
            type="text"
            placeholder="نام"
            onChange={this.onChange}
            onClick={this.onClickField}
          />
          <input
            name="lastName"
            type="text"
            placeholder="نام خانوادگی"
            onChange={this.onChange}
            onClick={this.onClickField}
          />
          <input
            name="nationalCode"
            type="text"
            placeholder="کد ملی"
            onChange={this.onChange}
            onClick={this.onClickField}
          />
          <input
            name="birthCertificateCode"
            type="text"
            placeholder="شماره شناسنامه"
            onChange={this.onChange}
            onClick={this.onClickField}
          />
          <input
            name="studentNumber"
            type="text"
            placeholder="کد دانشجویی"
            onChange={this.onChange}
            onClick={this.onClickField}
          />
          <input
            name="enteringYear"
            type="text"
            placeholder="سال ورود"
            onChange={this.onChange}
            onClick={this.onClickField}
          />
          <input
            name="graduationYear"
            type="text"
            placeholder="سال فراغت از تحصیل"
            onChange={this.onChange}
            onClick={this.onClickField}
          />
        </div>
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

//// const studentNumber = Number(req.body.studentNumber);
//// const firstName = req.body.firstName;
//// const lastName = req.body.lastName;
//// const phoneNumber = Number(req.body.phoneNumber);
//// const enteringYear = Number(req.body.enteringYear);
//// const college = req.body.college;
//// const grade = req.body.grade;
//// const nationalCode = Number(req.body.nationalCode);
//// const dateOfBirth = Number(req.body.dateOfBirth);
//// const lastEditDate = Date(req.body.lastEditDate);
//// const lastSamaUpdateDate = Date(req.body.lastSamaUpdateDate);
