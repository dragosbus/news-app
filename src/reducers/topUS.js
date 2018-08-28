import * as ActionTypes from '../actionTypes/actionTypes';

const topUSReducer = (state=[], {payload, type}) => {
    switch(type) {
        case ActionTypes.FETCH_TOP_US_NEWS:
            return [...payload];
        case ActionTypes.FETCH_MORE_NEWS:
            return [...state, ...payload];
        default:
            return state;
    }
}

export default topUSReducer;