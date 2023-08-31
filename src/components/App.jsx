import { useState, useEffect } from "react";
import { GlobalStyle } from "./GlobalStyle";
import { SectionTitles } from "./SectionTitles/SectionTitles";



export const App = () => {


  const [good, setGood] = useState(0);
  const [bad, setBad] = useState(0);
  const [neutral, setNeutral] = useState(0); 
  const [total, setTotal] = useState(0);
  const [positiveQuantity, setPositiveQuantity] = useState(0);


  const handleClickGood = () => setGood((prevState) => prevState + 1);
  
  const handleClickBad = () => setBad((prevState) => prevState + 1);

  const handleClickNeutral = () => setNeutral((prevState) => prevState + 1);


 useEffect(() => {
    const Total = neutral + bad + good;
    setTotal(Total);
    setPositiveQuantity(Math.round((good * 100) / Total));
   
  }, [good, bad, neutral]);


  
  return (
    <div>
      <SectionTitles
        onLeaveFeedbackGood={handleClickGood}
        onLeaveFeedbackBad={handleClickBad}
        onLeaveFeedbackNeutral={handleClickNeutral}
        good={good}
        neutral={neutral}
        bad={bad}
        total={total}
        positivePercentage={positiveQuantity} />
      <GlobalStyle />
    </div>
  );
};

