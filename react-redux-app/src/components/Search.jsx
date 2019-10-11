import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../state/actionCreators";

export default connect(
  state => state,
  actionCreators
)(Search);

export function Search(props) {
  return (
    <div className="search-container">
      <form>
        <input
          className="search-input"
          type="text"
          placeholder="search"
          onChange
        ></input>
      </form>
    </div>
  );
}
