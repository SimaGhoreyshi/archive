import React from "react";
import _ from "lodash";
import { Link } from "react-router-dom";

const Pagination = (props) => {
  const { pageSize, itemsCount, currentPage } = props;
  const pageCount = Math.ceil(itemsCount / pageSize);

  const pages = _.range(1, pageCount + 1);

  return (
    <nav>
      <ul className="pagination">
        {pages.map((page) => (
          <li
            key={page}
            className={page === currentPage ? "page-item active" : "page-item"}
          >
            <Link
              className="page-link"
              onClick={() => props.onPageChange(page)}
            >
              {page}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
