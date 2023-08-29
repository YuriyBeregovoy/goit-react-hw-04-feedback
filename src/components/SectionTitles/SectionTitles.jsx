import { FeedbackOptions } from "components/FeedbackOptions/FeedbackOptions"
import { Statistics } from "components/Statistics/Statistics"



export const SectionTitles = ({onLeaveFeedbackGood, onLeaveFeedbackBad, onLeaveFeedbackNeutral, good, neutral, bad, total, positivePercentage }) => {
  return <div>
    <section>
      <h2>Please leave feedback</h2>
      <FeedbackOptions onLeaveFeedbackGood={onLeaveFeedbackGood} onLeaveFeedbackBad={onLeaveFeedbackBad} onLeaveFeedbackNeutral={onLeaveFeedbackNeutral}/>
    </section>
    
    <section >
      <h2>Statistics</h2>
      <Statistics good={good} neutral={neutral} bad={bad} total={total} positivePercentage={positivePercentage}/>
    </section>
    



</div>



}