/* eslint-disable eqeqeq */
import React from "react";
import style from "./index.module.scss";

interface Props {
  usersPerPage: number;
  totalUsers: number;
  paginate: any;
  activePage: number;
}

const Pagination = ({
  usersPerPage,
  totalUsers,
  paginate,
  activePage,
}: Props) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalUsers / usersPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      <ul className={style["pagination"]}>
        {pageNumbers.map((number: number) => (
          <li key={number} className={style["page-item"]}>
            <a
              onClick={() => paginate(number)}
              href={`#${number}`}
              className={
                activePage === number
                  ? style["active-link"]
                  : style["page-link"]
              }
            >
              {number}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pagination;
