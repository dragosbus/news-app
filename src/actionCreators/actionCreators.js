import * as ActionTypes from "../actionTypes/actionTypes";
import Api from "../Api";

export const getTopUS = data => ({
	type: ActionTypes.FETCH_TOP_US_NEWS,
	payload: data
});

export const getSingleNews = article => ({
	type: ActionTypes.FETCH_SINGLE_NEWS,
	payload: article
});

export const getMoreNews = data => ({
	type: ActionTypes.FETCH_MORE_NEWS,
	payload: data
});

export const getSources = data => ({
	type: ActionTypes.GET_SOURCES,
	payload: data
})

export const getTopUSMiddle = () => dispatch => {
	Api("https://newsapi.org/v2/top-headlines?country=us").then(data => {
		dispatch(getTopUS(data.articles));
	});
};

export const getSingleNewsMiddle = id => dispatch => {
	Api("https://newsapi.org/v2/top-headlines?country=us").then(data => {
		if (id <= data.articles.length) {
			dispatch(getSingleNews(data.articles[id]));
		} else {
			dispatch(getSingleNews("Article not Found"));
		}
	});
};

export const getMoreNewsMiddle = () => dispatch => {
	Api("https://newsapi.org/v2/everything?domains=wsj.com,nytimes.com").then(
		data => {
			dispatch(getMoreNews(data.articles));
		}
	);
};

export const fetchSourcesMiddle = () => dispatch => {
	Api('https://newsapi.org/v2/sources?apiKey=API_KEY')
		.then(res=>{
			dispatch(getSources(res));
		});
};
