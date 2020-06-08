import React, { Component } from "react";

class Footer extends Component {
  state = {};
  render() {
    return (
      <div
        style={{
          position: "fixed",
          bottom: "0",
          width: "100vw",
          height: "5vh",
          backgroundColor: "#bcc5cc",
          overflowX: "hidden !important",
        }}
      >
        <footer className="footer">
          <div className="container">
            <p
              className="text-muted"
              style={{ paddingTop: ".5%", textAlign: "end" }}
            >
              © 2015 Copyright.
            </p>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;