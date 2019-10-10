import * as actionCreators from "../state/actionCreators";
import { connect } from "react-redux";
import React from "react";

export function Counter(props) {
  const { count, increment, decrement, reset } = props;
  return (
    <div>
      The count is {count}
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default connect(
  state => state,
  actionCreators
)(Counter);
