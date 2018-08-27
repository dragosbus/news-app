import React from 'react';
import store from '../../store';

const FullNews = props => {
  console.log(props);
  let data = store.getState().topUS;
  let element = data.length > 0 ? <div>{data[props.match.params.id].title}</div> : <p>Article not found</p>;

  return element;
};

export default FullNews;
