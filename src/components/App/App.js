import React, { Component } from "react";
import SectionTittle from "../SectionTittle/SectionTittle";
import FeedBackOptions from "../FeedBackOptions/FeedBackOptions";
import Statistics from "../Statistics/Statistics";
import "./App.css";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  onLeaveFeedback = (e) => {
    this.setState((prevState) => {
      if (e.target.name === "good") {
        return { good: prevState.good + 1 };
      } else if (e.target.name === "neutral") {
        return { neutral: prevState.neutral + 1 };
      } else if (e.target.name === "bad") {
        return { bad: prevState.bad + 1 };
      }
    });
  };
  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    return Math.round((good / total) * 100);
  };
  countTotalFeedback = () => {
    let { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return total;
  };
  render() {
    let { good, neutral, bad } = this.state;
    return (
      <SectionTittle title={"Please leave feedback"}>
        <FeedBackOptions onLeaveFeedback={this.onLeaveFeedback} />
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={this.countTotalFeedback()}
          positivePercentage={this.countPositiveFeedbackPercentage()}
        />
      </SectionTittle>
    );
  }
}

export default App;
