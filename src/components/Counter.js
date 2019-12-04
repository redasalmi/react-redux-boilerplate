import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addCount, subCount, resetCount } from "../actions/addCount";

const Counter = () => {
  const count = useSelector(state => state.count.count);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>count: {count}</h1>
      <button onClick={() => dispatch(addCount())}>Count Up</button>
      <button onClick={() => dispatch(subCount())}>Count Down</button>
      <button onClick={() => dispatch(resetCount())}>RESET COUNTER</button>
    </div>
  );
};

export default Counter;
