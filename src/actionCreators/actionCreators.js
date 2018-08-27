import * as ActionTypes from '../actionTypes/actionTypes';
import Api from '../Api';

export const getTopUS = data => ({
    type: ActionTypes.FETCH_TOP_US_NEWS,
    payload: data
});

export const getTopUSMiddle = () => dispatch => {
    Api.then(data => {
        console.log(data);
        dispatch(getTopUS(data.articles))
    });
};