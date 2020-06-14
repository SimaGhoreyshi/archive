import React from "react";
import _ from "lodash";

const Pagination = (porps) => {
  const { pageSize, itemsCount } = this.porps;
  const pageCount = itemsCount / pageSize;

  const pages = _.range(1, pageCount + 1);
  pages.map((item) => (
    <li key={page} className="page-item">
      <a className="page-link">page</a>
    </li>
  ));
  return (
    <nav>
      <ul className="pagination"></ul>
    </nav>
  );
};

export default Pagination;
