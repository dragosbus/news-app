import React from 'react';

const Slide = props => {
  let article = props.article;
  let srcImg = article
    ? article.urlToImage
    : '';
  let imgNull = 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/No_image_3x4.svg/1024px-No_image_3x4.svg.png';
  let titleImg = article ? article.title : '';
  let href = article ? article.url : '';

  return (
    <div className="carousel-slide">
      <img src={srcImg || imgNull} alt={titleImg} />
      <a className="carousel-slide-title" href={href}>
        {titleImg}
      </a>
    </div>
  );
};

export default Slide;
