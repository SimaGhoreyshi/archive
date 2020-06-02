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
        <a href="#" class="btn btn-primary btn-lg my-1">
          انتخاب ناحیه
        </a>
        <a href="#" class="btn btn-primary btn-lg my-1">
          فارغ التحصیلان
        </a>
        <a href="#" class="btn btn-primary btn-lg my-1">
          بایگانی
        </a>
        <a href="#" class="btn btn-primary btn-lg my-1">
          پذیرش
        </a>
        <a href="#" class="btn btn-primary btn-lg my-1">
          تحصیلات تکمیلی
        </a>
      </div>
    );
  }
}

export default Areas;
