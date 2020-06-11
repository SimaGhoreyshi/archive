import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink, Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <div className="navbar-expand" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item dropdown">
            <Link
              className="nav-link dropdown-toggle"
              to="#"
              id="navbarDropdownMenuLink"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              UserInfo
            </Link>
            <div
              className="dropdown-menu"
              aria-labelledby="navbarDropdownMenuLink"
              to="#"
            >
              <Link className="dropdown-item" to="/user-info">
                حساب کاربری
              </Link>
              <Link className="dropdown-item" to="#">
                خروج
              </Link>
            </div>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/areas">
              تغییر ناحیه کاربری<span className="sr-only"></span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/dashboard">
              داشبورد<span className="sr-only"></span>
            </NavLink>
          </li>
          <li className="nav-item dropdown">
            <NavLink
              className="nav-link dropdown-toggle"
              to="#"
              id="navbarDropdownMenuLink"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              کاربران
            </NavLink>
            <div
              className="dropdown-menu"
              aria-labelledby="navbarDropdownMenuLink"
            >
              <Link className="dropdown-item" to="/users/add">
                اپراتور جدید
              </Link>
              <Link className="dropdown-item" to="/users">
                مدیریت اپراتورها
              </Link>
              <Link className="dropdown-item" to="/students">
                مدیریت دانشجویان
              </Link>
              <Link className="dropdown-item" to="#">
                ثبت دانشجویان با اکسل
              </Link>
            </div>
          </li>
          <li className="nav-item dropdown">
            <Link
              className="nav-link dropdown-toggle"
              to="#"
              id="navbarDropdownMenuLink"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              گزارشات
            </Link>
            <div
              className="dropdown-menu"
              aria-labelledby="navbarDropdownMenuLink"
            >
              <Link className="dropdown-item" to="#">
                عملکرد اپراتور
              </Link>
              <Link className="dropdown-item" to="#">
                عکس‌های ثبت شده
              </Link>
              <Link className="dropdown-item" to="#">
                تایید نشده‌ها
              </Link>
              <Link className="dropdown-item" to="#">
                عملکرد تایید کننده
              </Link>
              <Link className="dropdown-item" to="#">
                تغییرات اسناد
              </Link>
            </div>
          </li>
          <li className="nav-item dropdown">
            <Link
              className="nav-link dropdown-toggle"
              to="#"
              id="navbarDropdownMenuLink"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              مدیریت بخش ها
            </Link>
            <div
              className="dropdown-menu"
              aria-labelledby="navbarDropdownMenuLink"
            >
              <Link className="dropdown-item" to="/sections/add">
                بخش جدید
              </Link>
              <Link className="dropdown-item" to="/sections">
                مدیریت بخش ها
              </Link>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
