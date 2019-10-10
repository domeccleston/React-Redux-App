import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../state/actionCreators';

export default connect(
    state => state,
    actionCreators,
)(Quote)

function Quote() {
    return (
        <h1>Quote Goes Here</h1>
    )
}