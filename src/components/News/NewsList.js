import React from "react";
import ElementNews from './NewsElement';

const News = props => {
  return(
    <ul className='news-list'>
      {props.topUS.map(news=><ElementNews key={news.title }{...news}/>)}
    </ul>
  );
};

export default News;