import React from "react";
import "./App.css";

import { Route, Redirect, Switch } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";

import NavBar from "./components/navbar";
import Footer from "./components/footer";

import Areas from "./pages/areas";
import UserInfo from "./pages/user-info";
import Dashboard from "./pages/dashboard";

import UsersList from "./pages/users/users-list";
import CreateUser from "./pages/users/create-user";
import EditUser from "./pages/users/edit-user";

import StudentsList from "./pages/students/students-list";
import StudentDetail from "./pages/students/student-detail";

import Reports from "./pages/reports";

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <br />
      <br />
      <br />
      <div>
        <Switch>
          <Route path="/user-info" component={UserInfo} />
          <Route path="/areas" component={Areas} />
          <Redirect exact from="/" to="/user-info" />
          <Route path="/dashboard" component={Dashboard} />

          <Route path="/users/add" component={CreateUser} />
          <Route path="/users/edit/:id" component={EditUser} />
          <Route path="/users" component={UsersList} />

          <Route path="/students/details/:id" component={StudentDetail} />
          <Route path="/students" component={StudentsList} />

          <Route path="/reports" component={Reports} />

          <Redirect to="/not-found" />
        </Switch>
      </div>
      <br />
      <br />
      <Footer />
    </React.Fragment>
  );
}

export default App;
