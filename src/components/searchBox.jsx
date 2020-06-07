import React from "react";

const SearchBox = (props) => {
  return (
    <input
      type="text"
      className="form-control my-1"
      placeholder={props.placeholder}
      value={props.value}
      onChange={(e) => props.onChange(e.currentTarget.value)}
    />
  );
};

export default SearchBox;
