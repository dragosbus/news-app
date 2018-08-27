import React from 'react';
import { Link } from 'react-router-dom';

const ElementNews = props => {
  let imgNull =
    'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/No_image_3x4.svg/1024px-No_image_3x4.svg.png';
  let titleImg = props.article ? props.article.title : '';
  return (
    <li className="news">
      <img src={props.urlToImage || imgNull} alt={titleImg} />
      <Link to={`/movies/${props.id}`}>{props.title}</Link>
    </li>
  );
};

export default ElementNews;
