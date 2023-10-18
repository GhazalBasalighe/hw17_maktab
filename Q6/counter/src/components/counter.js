import React, { useState } from "react";
import { Icon } from "@iconify/react";
import "./counter.css";

const Counter = () => {
  const [value, setValue] = useState(0);
  //0 is the initial value
  //useState returns an array
  const increaseValue = () => {
    setValue((prev) => {
      return prev + 1;
    });
  };
  const decreaseValue = () => {
    setValue((prev) => {
      if (prev > 0) return prev - 1;
      else return prev;
    });
  };
  return (
    <>
      <button onClick={increaseValue} className="increase-btn">
        <Icon icon="typcn:plus" />
      </button>
      <span className="count-value">{value}</span>
      <button onClick={decreaseValue} className="decrease-btn">
        <Icon icon="typcn:minus" />
      </button>
    </>
  );
};

export default Counter;
