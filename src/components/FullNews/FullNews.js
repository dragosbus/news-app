import React from 'react';
import store from '../../store';

const FullNews = props => {
  console.log(props);
  let data = store.getState().topUS;
  return <div>{data[props.match.params.id].title}</div>;
};

export default FullNews;
