import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../state/actionCreators";

export default connect(
  state => state,
  actionCreators
)(Quote);

export function Quote({ quote, getQuote }) {
  console.log(quote.text);

  useEffect(() => {
    getQuote();
  }, []);

  async function fetchNewQuote() {
    const newData = getQuote();
  }

  return (
    <>
      <div className="quote-container">
        <h1>{quote.text}</h1>
        <div className="button-container">
          <button onClick={fetchNewQuote}>New Quote</button>
        </div>
      </div>
    </>
  );
}
