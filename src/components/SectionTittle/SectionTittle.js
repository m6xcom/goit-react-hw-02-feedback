import React, { Component } from "react";
import PropTypes from "prop-types";
import style from "./SectionTittle.module.css";

class SectionTittle extends Component {
  static defaultProps = {
    title: "Please leave feedback",
  };
  static propTypes = {
    title: PropTypes.string,
  };
  render() {
    const { title, children } = this.props;
    return (
      <section className={style.main}>
        <h2>{title}</h2>
        {children}
      </section>
    );
  }
}

export default SectionTittle;
