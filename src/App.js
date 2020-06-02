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
import Users from "./pages/users";
import Reports from "./pages/reports";

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <Switch>
        <Route path="/areas" component={Areas} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/users" component={Users} />
        <Route path="/reports" component={Reports} />
        <Route path="/user-info" component={UserInfo} />
        <Redirect exact from="/" to="/user-info" />
        <Redirect t="/not-found" />
      </Switch>
      <Footer />
    </React.Fragment>
  );
}

export default App;
