import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./dashboard.css";

class Zones extends Component {
  state = {};
  render() {
    return (
      <div className="container" style={{ marginTop: "5%" }}>
        <Link
          className="card hover-pulse my-card"
          to="#"
          style={{ minWidth: "12vw" }}
        >
          <i
            className="fas fa-layer-group"
            style={{ fontSize: "800%", padding: "10% 12%", color: "#ce7dff" }}
          ></i>
          <div className="card-body">
            <p className="card-text">انتخاب ناحیه</p>
          </div>
        </Link>
        <Link
          className="card hover-pulse my-card"
          to="#"
          style={{ minWidth: "12vw" }}
        >
          <i
            class="fas fa-user-graduate"
            style={{ fontSize: "800%", padding: "10% 20%", color: "#ce7dff" }}
          ></i>
          <div className="card-body">
            <p className="card-text">فارغ التحصیلان</p>
          </div>
        </Link>
        <Link
          className="card hover-pulse my-card"
          to="#"
          style={{ minWidth: "12vw" }}
        >
          <i
            className="fas fa-inbox"
            style={{ fontSize: "800%", padding: "10% 10%", color: "#ce7dff" }}
          ></i>
          <div className="card-body">
            <p className="card-text">بایگانی</p>
          </div>
        </Link>
        <Link
          className="card hover-pulse my-card"
          to="#"
          style={{ minWidth: "12vw" }}
        >
          <i
            class="fas fa-user-check"
            style={{ fontSize: "800%", padding: "10% 5%", color: "#ce7dff" }}
          ></i>
          <div className="card-body">
            <p className="card-text">پذیرش</p>
          </div>
        </Link>
        <Link
          className="card hover-pulse my-card"
          to="#"
          style={{ minWidth: "12vw" }}
        >
          <i
            class="fas fa-university"
            style={{ fontSize: "800%", padding: "10% 23%", color: "#ce7dff" }}
          ></i>
          <div className="card-body">
            <p className="card-text">تحصیلات تکمیلی</p>
          </div>
        </Link>
      </div>
    );
  }
}

export default Zones;
