import React from 'react';
import store from '../../store';

import './FullNews.css';

const FullNews = props => {
  let data = store.getState().topUS;
  let dataPage = data[props.match.params.id];

  let element =
    data.length > 0 ? (
      <div className="article">
        <img src={dataPage.urlToImage} alt={dataPage.title} />
        <h2>{dataPage.title}</h2>
        <span>{dataPage.publishedAt}</span>
        <p>{dataPage.description}</p>
        <a href={dataPage.url} target="_blank">Read More...</a>
      </div>
    ) : (
      <p>Article not found</p>
    );

  return element;
};

export default FullNews;
