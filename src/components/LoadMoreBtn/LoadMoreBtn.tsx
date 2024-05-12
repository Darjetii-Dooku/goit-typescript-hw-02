import React from "react";
import css from "./LoadMoreBtn.module.css";
import { LoadMoreBtnProps } from "./LoadMoreBtn.types";

const LoadMoreBtn: React.FC<LoadMoreBtnProps> = ({ setPage }) => {
  const handleClick = (): void => {
    setPage((prevPage) => prevPage + 1);
  };
  return (
    <div>
      <button className={css.button} type="button" onClick={handleClick}>
        Load more
      </button>
    </div>
  );
};

export default LoadMoreBtn;
