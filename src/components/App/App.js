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
      return { [e.target.name]: prevState[e.target.name] + 1 };
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
      <>
        <SectionTittle title={"Please leave feedback"}>
          <FeedBackOptions onLeaveFeedback={this.onLeaveFeedback} />
        </SectionTittle>
        <SectionTittle title={"Statistics"}>
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
        </SectionTittle>
      </>
    );
  }
}

export default App;
