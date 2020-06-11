import React, { Component } from "react";
import axios from "axios";

class StudentDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      studentNumber: 0,
      firstName: "",
      lastName: "",
      phoneNumber: 0,
      enteringYear: 0,
      grade: "",
      college: "",
      nationalCode: 0,
      dateOfBirth: Date(),
      lastEditDate: Date(),
      lastSamaUpdateDate: Date(),
    };
  }
  componentDidMount() {
    axios
      .get(
        "http://localhost:5000/students/details/" + this.props.match.params.id
      )
      .then((res) => {
        this.setState({
          firstName: res.data.firstName,
          lastName: res.data.lastName,
          phoneNumber: Number(res.data.phoneNumber),
          studentNumber: Number(res.data.studentNumber),
          grade: res.data.grade,
          enteringYear: Number(res.data.enteringYear),
          college: res.data.college,
          nationalCode: Number(res.data.nationalCode),
          dateOfBirth: res.data.dateOfBirth,
          lastEditDate: res.data.lastEditDate,
          lastSamaUpdateDate: res.data.lastSamaUpdateDate,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="container">
        <h2>
          <span className="badge badge-primary ">اطلاعات دانشجو</span>
        </h2>

        <br />
        <form>
          <div className="row">
            <div style={{ width: "200px", margin: "0.5% 1%" }}>
              <p className="badge badge-info ">نام کامل</p>
              <input
                readOnly
                required
                aria-label="First name"
                className="form-control "
                value={this.state.firstName + " " + this.state.lastName}
              />
            </div>

            <div style={{ width: "200px", margin: "0.5% 1%" }}>
              <p className="badge badge-info">شماره دانشجویی</p>
              <input
                readOnly
                required
                className="form-control"
                value={this.state.studentNumber}
              ></input>
            </div>
            <div style={{ width: "200px", margin: "0.5% 1%" }}>
              <p className="badge badge-info">مقطع</p>
              <input
                readOnly
                required
                className="form-control"
                value={this.state.grade}
              ></input>
            </div>
            <div style={{ width: "200px", margin: "0.5% 1%" }}>
              <p className="badge badge-info">شماره تماس</p>
              <input
                readOnly
                required
                className="form-control"
                value={"09" + this.state.phoneNumber}
              />
            </div>
            <div style={{ width: "200px", margin: "0.5% 1%" }}>
              <p className="badge badge-info">سال ورود</p>
              <input
                readOnly
                required
                className="form-control"
                value={this.state.enteringYear}
              />
            </div>
          </div>
          <br />
          <div className="row">
            <div style={{ width: "200px", margin: "0.5% 1%" }}>
              <p className="badge badge-info">دانشکده</p>
              <input
                readOnly
                required
                className="form-control"
                value={this.state.college}
              />
            </div>
            <div style={{ width: "200px", margin: "0.5% 1%" }}>
              <p className="badge badge-info">کد ملی</p>
              <input
                readOnly
                required
                className="form-control"
                value={this.state.nationalCode}
              />
            </div>
            <div style={{ width: "200px", margin: "0.5% 1%" }}>
              <p className="badge badge-info">تاریخ تولد</p>
              <input
                readOnly
                required
                className="form-control"
                value={this.state.dateOfBirth.toString().substring(0, 10)}
              />
            </div>
            <div style={{ width: "200px", margin: "0.5% 1%" }}>
              <p className="badge badge-info">تاریخ آخرین ویرایش</p>
              <input
                readOnly
                required
                className="form-control"
                value={this.state.lastEditDate.toString().substring(0, 10)}
              />
            </div>
            <div style={{ width: "200px", margin: "0.5% 1%" }}>
              <p className="badge badge-lg badge-info">آخرین بروزرسانی سما</p>
              <input
                readOnly
                required
                className="form-control"
                value={this.state.lastSamaUpdateDate
                  .toString()
                  .substring(0, 10)}
              />
            </div>
          </div>
        </form>
      </div>
    );
  }
}
export default StudentDetail;
