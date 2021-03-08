import React from "react";
import PropTypes from "prop-types";
import shortId from "shortid";
import style from "./FeedBackOptions.module.css";

const FeedBackOptions = ({ onLeaveFeedback, options }) => {
  return (
    <ul onClick={onLeaveFeedback} className={style.buttonsList}>
      {options.map((el) => (
        <li key={shortId.generate()}>
          <button name={el}>{el[0].toUpperCase() + el.slice(1)}</button>
        </li>
      ))}
    </ul>
  );
};

export default FeedBackOptions;

FeedBackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func,
  options: PropTypes.arrayOf(PropTypes.string),
};
