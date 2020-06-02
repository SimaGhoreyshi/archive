import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink, Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <div className="navbar-expand" id="navbarNav">
        <ul className="navbar-nav">
          <li class="nav-item dropdown">
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
            >
              <Link className="dropdown-item" href="/user-info">
                حساب کاربری
              </Link>
              <Link className="dropdown-item" href="#">
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
          <li class="nav-item dropdown">
            <Link
              className="nav-link dropdown-toggle"
              to="#"
              id="navbarDropdownMenuLink"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              کاربران
            </Link>
            <div
              className="dropdown-menu"
              aria-labelledby="navbarDropdownMenuLink"
            >
              <Link className="dropdown-item" href="#">
                اپراتور جدید
              </Link>
              <Link className="dropdown-item" href="#">
                مدیریت اپراتورها
              </Link>
              <Link className="dropdown-item" href="#">
                مدیریت دانشجویان
              </Link>
              <Link className="dropdown-item" href="#">
                ثبت دانشجویان با اکسل
              </Link>
            </div>
          </li>
          <li class="nav-item dropdown">
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
              <Link className="dropdown-item" href="#">
                عملکرد اپراتور
              </Link>
              <Link className="dropdown-item" href="#">
                عکس‌های ثبت شده
              </Link>
              <Link className="dropdown-item" href="#">
                تایید نشده‌ها
              </Link>
              <Link className="dropdown-item" href="#">
                عملکرد تایید کننده
              </Link>
              <Link className="dropdown-item" href="#">
                تغییرات اسناد
              </Link>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
