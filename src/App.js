import React, { useState } from "react";
import "./styles.css";

export default function App() {
  var sleepArray = [
    "At least 6-8hrs",
    "No gadgets before 45mins",
    "No eating, 2-3hrs before bed"
  ];
  var dietArray = [
    "Min 2hrs break Btwn any meals",
    "Eat only when you feel hunger",
    "Do intermettent fasting 12/12"
  ];
  var mindArray = [
    "Meditate 15mins/day",
    "Try 4/7/8 breathing method",
    "Either accept or let it go"
  ];
  var [displayVar, displayFun] = useState([""]);
  function onClickHandeler() {
    displayVar = sleepArray;
    displayFun(displayVar);
  }
  function onClickHandeler2() {
    displayVar = dietArray;
    displayFun(displayVar);
  }
  function onClickHandeler3() {
    displayVar = mindArray;
    displayFun(displayVar);
  }

  return (
    <div className="App">
      <div className="header">
        <h1>📢 Health Tips</h1>
        <p className="usp">Some important health advices, Click below to see</p>
      </div>
      <button className="button-one" onClick={onClickHandeler}>
        Sleep{" "}
      </button>
      <button className="button-two" onClick={onClickHandeler2}>
        Diet{" "}
      </button>
      <button onClick={onClickHandeler3}>Mind</button>
      <div className="main-item">
        {displayVar.map((item, index) => {
          console.log(item);
          return <p key={index}>{item}</p>;
        })}
      </div>
    </div>
  );
}
