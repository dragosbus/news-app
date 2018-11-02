import * as ActionTypes from "../actionTypes/actionTypes";

export const topUSReducer = (state = [], { payload, type }) => {
	switch (type) {
		case ActionTypes.FETCH_TOP_US_NEWS:
			return [...payload];
		case ActionTypes.FETCH_MORE_NEWS:
			return [...state, ...payload.slice(0, 3)];
		default:
			return state;
	}
};
