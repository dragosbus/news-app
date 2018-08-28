import React from 'react';

import './TopNews.css';

const TopNews = props => {
  return (
    <div className="top-news">
      {props.topNews.map(news => {
        return <h2 key={news.title}>{news.title}</h2>;
      })}
    </div>
  );
};

export default TopNews;
