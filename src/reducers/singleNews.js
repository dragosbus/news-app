import * as ActionTypes from '../actionTypes/actionTypes';

export const singleNewsReducer = (state = {}, {
    payload,
    type
}) => {
    switch (type) {
        case ActionTypes.FETCH_SINGLE_NEWS:
            return payload;
        default:
            return state;
    }
}