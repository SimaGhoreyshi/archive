import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./dashboard.css";

class Dashboard extends Component {
  state = {};
  render() {
    return (
      <div className="dashboard">
        <Link className="card">
          <i
            className="fas fa-file-alt"
            style={{ fontSize: "800%", padding: "10% 25%", color: "#a3a3a3" }}
          ></i>
          <div className="card-body">
            <p className="card-text">اسناد ثبت شده</p>
          </div>
        </Link>
        <Link className="card">
          <i
            className="far fa-file-alt"
            style={{ fontSize: "800%", padding: "10% 25% ", color: "#d90b2d" }}
          ></i>
          <div className="card-body">
            <p className="card-text">تغییرات بررسی نشده</p>
          </div>
        </Link>
        <Link className="card">
          <i
            className="fas fa-user-graduate"
            style={{ fontSize: "800%", padding: "10% 22% ", color: "#a307e6" }}
          ></i>
          <div className="card-body">
            <p className="card-text">دانشجویان</p>
          </div>
        </Link>
        <Link className="card">
          <i
            className="fas fa-user-cog"
            style={{ fontSize: "800%", padding: "10% 10%", color: "#ffdd00" }}
          ></i>
          <div className="card-body">
            <p className="card-text">اپراتورها</p>
          </div>
        </Link>
        <Link className="card">
          <i
            className="fas fa-user-edit"
            style={{ fontSize: "800%", padding: "10% 10% ", color: "#1dd150" }}
          ></i>
          <div className="card-body">
            <p className="card-text">دانشجویان دارای سند</p>
          </div>
        </Link>
      </div>
    );
  }
}

export default Dashboard;
