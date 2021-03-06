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
      <ul className={style.buttonsList}>
        <li>
          <button name="good" onClick={onLeaveFeedback}>
            Good
          </button>
        </li>
        <li>
          <button name="neutral" onClick={onLeaveFeedback}>
            Neutral
          </button>
        </li>
        <li>
          <button name="bad" onClick={onLeaveFeedback}>
            Bad
          </button>
        </li>
      </ul>
    );
  }
}

export default FeedBackOptions;
