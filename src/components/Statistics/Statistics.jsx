import { ItemCount } from "./Statistics.styled"

export const Statistics = ({neutral, bad, good, total, positivePercentage}) => {
  if (total > 0) {return <ul>
    <li>Good: {good}</li>
    <li>Bad: {bad}</li>
    <li>Neutral: {neutral}</li>
    <ItemCount>Total: {total}</ItemCount>
    <ItemCount>Positive feedback: {positivePercentage}%</ItemCount>
  </ul>
  } else {
    return <p>There is no feedback</p>
  }
}