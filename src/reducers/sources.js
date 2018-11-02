import * as ActionTypes from '../actionTypes/actionTypes';

export const getSourcesReducer = (state = [], action) => {
  switch (action.type) {
    case ActionTypes.GET_SOURCES:
      return [...action.payload];
    default:
      return state;
  }
};