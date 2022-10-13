/* eslint-disable eqeqeq */
import React from "react";
import style from "./index.module.scss";
import prevArrow from "../../assets/icons/next-arrow.svg";
import nextArrow from "../../assets/icons/prev-arrow.svg";

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

  const totalPages = totalUsers / usersPerPage;

  function createDots() {
    return <div className="page">...</div>;
  }

  if (totalPages < 7) {
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i);
    }
  }

  // Otherwise create the first three page links
  for (let i = 1; i <= 3; i++) {
    pageNumbers.push(i);
  }

  // Create the dots
  pageNumbers.push(createDots());

  // Last three page links
  for (let i = totalPages - 2; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      <ul className={style["pagination"]}>
        <button
          disabled={activePage === 1}
          className={style["prev"]}
          onClick={() => paginate(activePage - 1)}
        >
          <img src={prevArrow} alt="prev-arrow" />
        </button>
        {pageNumbers.map((number: any) => (
          <li key={number} className={style["page-item"]}>
            <a
              onClick={() => paginate(number)}
              href={`?page=${number}`}
              className={
                activePage === number
                  ? style["active-link"]
                  : style["page-link"]
              }
            >
              {number}
            </a>
          </li>
        ))}{" "}
        <button
          disabled={activePage === usersPerPage}
          className={style["next"]}
          onClick={() => paginate(activePage + 1)}
        >
          {" "}
          <img src={nextArrow} alt="next-arrow" />
        </button>
      </ul>
    </div>
  );
};

export default Pagination;
