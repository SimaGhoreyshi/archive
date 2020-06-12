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
          backgroundColor: "rgba(44, 44, 44, 0.651)",
          color: "#fff",
          overflowX: "hidden !important",
        }}
      >
        <footer className="footer">
          <div className="container">
            <p
              style={{
                paddingTop: ".2%",
                textAlign: "end",
                textDecorationColor: "#fff",
              }}
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
