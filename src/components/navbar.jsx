import React from "react";
import { NavLink, Link } from "react-router-dom";
import "./navbar.css";

const NavBar = (props) => {
  return (
    <nav className="navbar ">
      <ul className="navbarNav">
        <li className="nav-item">
          <NavLink className="nav-link area" to="/areas">
            تغییر ناحیه کاربری<span className="sr-only"></span>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link myDashboard" to="/dashboard">
            داشبورد<span className="sr-only"></span>
          </NavLink>
        </li>
        <li className="nav-item dropdown">
          <Link
            className="nav-link dropdown-toggle users"
            to="#"
            id="navbarDropdownMenuLink"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            کاربران
          </Link>
          <div
            className="dropdown-menu usersDrop"
            aria-labelledby="navbarDropdownMenuLink"
          >
            <Link className="dropdown-item usersItem" to="/users/add">
              اپراتور جدید
            </Link>
            <Link className="dropdown-item usersItem" to="/users">
              مدیریت اپراتورها
            </Link>
            <Link className="dropdown-item usersItem" to="/students">
              مدیریت دانشجویان
            </Link>
            <Link className="dropdown-item usersItem" to="#">
              ثبت دانشجویان با اکسل
            </Link>
          </div>
        </li>
        <li className="nav-item dropdown">
          <Link
            className="nav-link dropdown-toggle reports"
            to="#"
            id="navbarDropdownMenuLink"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            گزارشات
          </Link>
          <div
            className="dropdown-menu reportsDrop"
            aria-labelledby="navbarDropdownMenuLink"
          >
            <Link className="dropdown-item reportsItem" to="#">
              عملکرد اپراتور
            </Link>
            <Link className="dropdown-item reportsItem" to="#">
              عکس‌های ثبت شده
            </Link>
            <Link className="dropdown-item reportsItem" to="#">
              تایید نشده‌ها
            </Link>
            <Link className="dropdown-item reportsItem" to="#">
              عملکرد تایید کننده
            </Link>
            <Link className="dropdown-item reportsItem" to="#">
              تغییرات اسناد
            </Link>
          </div>
        </li>
        <li className="nav-item dropdown">
          <Link
            className="nav-link dropdown-toggle sections"
            to="#"
            id="navbarDropdownMenuLink"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            مدیریت بخش ها
          </Link>
          <div
            className="dropdown-menu sectionsDrop"
            aria-labelledby="navbarDropdownMenuLink"
          >
            <Link className="dropdown-item sectionItem" to="/sections/add">
              بخش جدید
            </Link>
            <Link className="dropdown-item sectionItem" to="/sections">
              مدیریت بخش ها
            </Link>
          </div>
        </li>
      </ul>
      <div className="user dropdown">
        <Link
          className="nav-link dropdown-toggle user"
          to="#"
          id="navbarDropdownMenuLink"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          {props.username}
        </Link>

        <div
          className="dropdown-menu userDrop"
          aria-labelledby="navbarDropdownMenuLink"
          to="#"
        >
          <Link className="dropdown-item userItem" to="/user-info">
            حساب کاربری
          </Link>
          <Link className="dropdown-item userItem" to="#">
            خروج
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
