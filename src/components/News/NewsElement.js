import React from "react";

const ElementNews = props => {
  return(
    <li className="news">
      <img src={props.urlToImage}/>
      <p>{props.title}</p>
    </li>
  );
};

export default ElementNews;