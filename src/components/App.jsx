import { GlobalStyle } from "./GlobalStyle";
import { SectionTitles } from "./SectionTitles/SectionTitles";

const { Component } = require("react")


export class App extends Component {

state = {
  good: 0,
  neutral: 0,
  bad: 0,
  total: 0,
  positiveQuantity: 0
  }
  
  handleClickGood = () => {
    this.setState(
      (prevState) => {
        return { good: prevState.good + 1, };
      },    () => this.countTotalFeedback(),
     );
  };

  handleClickBad = () => {
    this.setState(
      (prevState) => {
        return { bad: prevState.bad + 1, };
      }, () => this.countTotalFeedback(),
      )
  };

 handleClickNeutral = () => {
    this.setState(
      (prevState) => {
        return {neutral: prevState.neutral + 1, };
      }, () => this.countTotalFeedback(),
      
    );
  };


  countTotalFeedback = () => {
    this.setState(
      ({ neutral, bad, good }) => {
        return { total: neutral + bad + good, };
      },
    () => this.countPositiveFeedbackPercentage());
  };

  countPositiveFeedbackPercentage = () => {
   this.setState(
      ({good, total}) => {
        const positivePercentage = Math.round((good * 100) / total);
      return { positiveQuantity: positivePercentage };
      },);
  };



  render() {
    return (
      <div>
        <SectionTitles onLeaveFeedbackGood={this.handleClickGood} onLeaveFeedbackBad={this.handleClickBad} onLeaveFeedbackNeutral={this.handleClickNeutral} good={this.state.good} neutral={this.state.neutral} bad={this.state.bad} total={this.state.total} positivePercentage={this.state.positiveQuantity} />
        <GlobalStyle/>
      </div>
  );
 }
};
