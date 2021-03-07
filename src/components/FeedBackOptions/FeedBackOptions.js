import React, { Component } from "react";
import PropTypes from "prop-types";
import style from "./FeedBackOptions.module.css";

class FeedBackOptions extends Component {
  static propTypes = {
    onLeaveFeedback: PropTypes.func,
  };
  render() {
    const { onLeaveFeedback } = this.props;
    return (
      <ul onClick={onLeaveFeedback} className={style.buttonsList}>
        <li>
          <button name="good">Good</button>
        </li>
        <li>
          <button name="neutral">Neutral</button>
        </li>
        <li>
          <button name="bad">Bad</button>
        </li>
      </ul>
    );
  }
}

export default FeedBackOptions;
