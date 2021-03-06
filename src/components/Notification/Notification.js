import React, { Component } from "react";
import PropTypes from "prop-types";
import style from "./Notification.module.css";

class Notification extends Component {
  static defaultProps = {
    message: "No feedback given",
  };
  static propTypes = {
    message: PropTypes.string,
  };
  render() {
    const { message } = this.props;
    return <p className={style.message}>{message}</p>;
  }
}

export default Notification;
