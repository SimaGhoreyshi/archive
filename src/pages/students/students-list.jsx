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
    this.onChangeField = this.onChangeField.bind(this);
    this.StudentList = this.StudentList.bind(this);

    this.state = {
      searchKey: "",
      searchField: null,
      students: [],
      searchCollege: "همه دانشکده ها",
      searchGrade: "همه مقاطع",
      searchFund: "انتخاب نشده", //dore
      searchQuota: "انتخاب نشده", //sahmiye
      searchStatus: "انتخاب نشده", //vaz'iate
    };
  }

  onClickField(e) {
    this.setState({ searchField: e.target.name });
    console.log(this.state.students);
  }

  onChangeField(e) {
    this.setState({
      searchKey: e.target.value,
    });
  }

  StudentList() {
    let allStudents = this.state.students;
    console.log(this.state.searchField);
    console.log(this.state.searchKey);
    let studentsList = null;

    if (
      this.state.searchKey === "همه دانشکده ها" ||
      this.state.searchKey === "انتخاب نشده" ||
      this.state.searchKey === "همه مقاطع"
    ) {
      studentsList = allStudents;
    } else if (this.state.searchKey) {
      studentsList = allStudents.filter((s) => {
        const searchField = this.state.searchField;

        if (s[searchField].toString().indexOf(this.state.searchKey) !== -1)
          return s;
        else return null;
      });
    } else {
      studentsList = allStudents;
    }
    console.log(studentsList);

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
      return "نتیجه ای یافت نشد";
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
      <div className="table-responsive inline" style={{ marginLeft: "0" }}>
        <br />
        <h1 style={{ marginRight: "1vw" }}>مدیریت دانشجویان</h1>
        <br />
        <div className="searchBar">
          <input
            name="firstName"
            type="text"
            placeholder="نام"
            onChange={this.onChangeField}
            onClick={this.onClickField}
          />
          <input
            name="lastName"
            type="text"
            placeholder="نام خانوادگی"
            onChange={this.onChangeField}
            onClick={this.onClickField}
          />
          <input
            name="nationalCode"
            type="text"
            placeholder="کد ملی"
            onChange={this.onChangeField}
            onClick={this.onClickField}
          />
          <input
            name="birthCertificateCode"
            type="text"
            placeholder="شماره شناسنامه"
            onChange={this.onChangeField}
            onClick={this.onClickField}
          />
          <input
            name="studentNumber"
            type="text"
            placeholder="کد دانشجویی"
            onChange={this.onChangeField}
            onClick={this.onClickField}
          />
          <input
            name="enteringYear"
            type="text"
            placeholder="سال ورود"
            onChange={this.onChangeField}
            onClick={this.onClickField}
          />
          <input
            name="graduationYear"
            type="text"
            placeholder="سال فراغت از تحصیل"
            onChange={this.onChangeField}
            onClick={this.onClickField}
          />
          <div className="dropdown">
            <button
              className="btn btn-primary dropdown-toggle"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              {this.state.searchCollege}
            </button>
            <div className="dropdown-menu">
              <p
                className="dropdown-item"
                onClick={() =>
                  this.setState({
                    searchKey: "همه دانشکده ها",
                    searchField: "college",
                    searchCollege: "همه دانشکده ها",
                  })
                }
              >
                همه دانشکده ها
              </p>
              <p
                className="dropdown-item"
                onClick={() =>
                  this.setState({
                    searchKey: "فنی و مهندسی",
                    searchField: "college",
                    searchCollege: "فنی و مهندسی",
                  })
                }
              >
                فنی و مهندسی
              </p>
              <p
                className="dropdown-item"
                onClick={() =>
                  this.setState({
                    searchKey: "هنر و معماری",
                    searchField: "college",
                    searchCollege: "هنر و معماری",
                  })
                }
              >
                هنر و معماری
              </p>
            </div>
          </div>

          <div className="dropdown">
            <button
              className="btn btn-primary dropdown-toggle"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              {this.state.searchGrade}
            </button>
            <div className="dropdown-menu">
              <p
                className="dropdown-item"
                onClick={() =>
                  this.setState({
                    searchGrade: "همه مقاطع",
                    searchKey: "1",
                    searchField: "grade",
                  })
                }
              >
                همه مقاطع
              </p>
              <p
                className="dropdown-item"
                onClick={() =>
                  this.setState({
                    searchGrade: "کارشناسی",
                    searchKey: "کارشناسی",
                    searchField: "grade",
                  })
                }
              >
                کارشناسی
              </p>
              <p
                className="dropdown-item"
                onClick={() =>
                  this.setState({
                    searchGrade: "کارشناسی ارشد",
                    searchKey: "کارشناسی ارشد",
                    searchField: "grade",
                  })
                }
              >
                کارشناسی ارشد
              </p>
              <p
                className="dropdown-item"
                onClick={() =>
                  this.setState({
                    searchGrade: "دکتری",
                    searchKey: "دکتری",
                    searchField: "grade",
                  })
                }
              >
                دکتری
              </p>
            </div>
          </div>

          <div className="dropdown">
            <button
              className="btn btn-primary dropdown-toggle"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              {this.state.searchFund}
            </button>
            <div className="dropdown-menu">
              <p
                className="dropdown-item"
                onClick={() =>
                  this.setState({
                    searchFund: "انتخاب نشده",
                    searchField: "fund",
                    searchKey: "انتخاب نشده",
                  })
                }
              >
                انتخاب نشده
              </p>
              <p
                className="dropdown-item"
                onClick={() =>
                  this.setState({
                    searchFund: "روزانه",
                    searchField: "fund",
                    searchKey: "روزانه",
                  })
                }
              >
                روزانه
              </p>
              <p
                className="dropdown-item"
                onClick={() =>
                  this.setState({
                    searchFund: "شبانه",
                    searchField: "fund",
                    searchKey: "شبانه",
                  })
                }
              >
                شبانه
              </p>
            </div>
          </div>
          <div className="dropdown">
            <button
              className="btn btn-primary dropdown-toggle"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              {this.state.searchQuota}
            </button>
            <div className="dropdown-menu">
              <p
                className="dropdown-item"
                onClick={() =>
                  this.setState({
                    searchQuota: "انتخاب نشده",
                    searchField: "quota",
                    searchKey: "انتخاب نشده",
                  })
                }
              >
                انتخاب نشده
              </p>
              <p
                className="dropdown-item"
                onClick={() =>
                  this.setState({
                    searchQuota: "منطقه یک",
                    searchField: "quota",
                    searchKey: "منطقه یک",
                  })
                }
              >
                منطقه یک
              </p>
              <p
                className="dropdown-item"
                onClick={() =>
                  this.setState({
                    searchQuota: "منطقه دو",
                    searchField: "quota",
                    searchKey: "منطقه دو",
                  })
                }
              >
                منطقه دو
              </p>
              <p
                className="dropdown-item"
                onClick={() =>
                  this.setState({
                    searchQuota: "منطقه سه",
                    searchField: "quota",
                    searchKey: "منطقه سه",
                  })
                }
              >
                منطقه سه
              </p>
              <p
                className="dropdown-item"
                onClick={() =>
                  this.setState({
                    searchQuota: "ایثارگران",
                    searchField: "quota",
                    searchKey: "ایثارگران",
                  })
                }
              >
                ایثارگران
              </p>
              <p
                className="dropdown-item"
                onClick={() =>
                  this.setState({
                    searchQuota: "رزمندگان",
                    searchField: "quota",
                    searchKey: "رزمندگان",
                  })
                }
              >
                رزمندگان
              </p>
              <p
                className="dropdown-item"
                onClick={() =>
                  this.setState({
                    searchQuota: "خانواده شهدا",
                    searchField: "quota",
                    searchKey: "خانواده شهدا",
                  })
                }
              >
                خانواده شهدا
              </p>
              <p
                className="dropdown-item"
                onClick={() =>
                  this.setState({
                    searchQuota: "کارمندان",
                    searchField: "quota",
                    searchKey: "کارمندان",
                  })
                }
              >
                کارمندان
              </p>
            </div>
          </div>

          <div className="dropdown">
            <button
              className="btn btn-primary dropdown-toggle"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              {this.state.searchStatus}
            </button>
            <div className="dropdown-menu">
              <p
                className="dropdown-item"
                onClick={() => this.setState({ searchStatus: "انتخاب نشده" })}
              >
                انتخاب نشده
              </p>
              <p
                className="dropdown-item"
                onClick={() => this.setState({ searchStatus: "در حال تحصیل" })}
              >
                در حال تحصیل
              </p>
              <p
                className="dropdown-item"
                onClick={() => this.setState({ searchStatus: "فارغ التحصیل" })}
              >
                فارغ التحصیل
              </p>
            </div>
          </div>
          <div className="dropdown">
            <button
              className="btn btn-primary dropdown-toggle"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              تعامل با سرویس وب
            </button>
            <div className="dropdown-menu">
              <p className="dropdown-item">؟</p>
              <p className="dropdown-item">؟</p>
            </div>
          </div>
        </div>
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
