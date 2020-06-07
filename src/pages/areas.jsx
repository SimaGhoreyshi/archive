import React, { Component } from "react";

class Areas extends Component {
  state = {};
  render() {
    return (
      <div
        className="btn-group-vertical my-10"
        role="group"
        aria-label="Basic example"
        style={{ float: "right", margin: "10vh 5vw " }}
      >
        <button className="btn btn-primary btn-lg my-1">انتخاب ناحیه</button>
        <button className="btn btn-primary btn-lg my-1">فارغ التحصیلان</button>
        <button className="btn btn-primary btn-lg my-1">بایگانی</button>
        <button className="btn btn-primary btn-lg my-1">پذیرش</button>
        <button className="btn btn-primary btn-lg my-1">تحصیلات تکمیلی</button>
      </div>
    );
  }
}

export default Areas;
