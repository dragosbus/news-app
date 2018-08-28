import * as ActionTypes from '../actionTypes/actionTypes';
import Api from '../Api';

export const getTopUS = data => ({
    type: ActionTypes.FETCH_TOP_US_NEWS,
    payload: data
});

export const getSingleNews = article => ({
    type: ActionTypes.FETCH_SINGLE_NEWS,
    payload: article
});

export const getTopUSMiddle = () => dispatch => {
    Api.then(data => {
        console.log(data);
        dispatch(getTopUS(data.articles))
    });
};

export const getSingleNewsMiddle = id => dispatch => {
    Api.then(data=>{
        console.log(id)
        dispatch(getSingleNews(data.articles[id]))
    });
};