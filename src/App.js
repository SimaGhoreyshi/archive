import React from "react";
import "./App.css";
import NavBar from "./components/navbar";
import { Route, Redirect, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Areas from "./pages/areas";
import Dashboard from "./pages/dashboard";
import UserInfo from "./pages/user-info";
import Footer from "./components/footer";
import Reports from "./pages/reports";
import CreateUser from "./pages/create-user";
import EditUser from "./pages/edit-user";
import UsersList from "./pages/users-list";

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <br />
      <br />
      <br />
      <div className="container">
        <Switch>
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/users/add" component={CreateUser} />
          <Route path="/users/edit" component={EditUser} />
          <Route path="/users" component={UsersList} />

          <Route path="/reports" component={Reports} />
          <Route path="/user-info" component={UserInfo} />
          <Route path="/areas" component={Areas} />
          <Redirect exact from="/" to="/user-info" />
          <Redirect t="/not-found" />
        </Switch>
      </div>
      <br />
      <br />
      <Footer />
    </React.Fragment>
  );
}

export default App;
