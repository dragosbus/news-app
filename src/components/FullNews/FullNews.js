import React from 'react';

import './FullNews.css';

class FullNews extends React.Component {
  render() {
    let singleNews = this.props.fullNews;

    let element =
      typeof singleNews === 'object' ? (
        <div className="article" style={{ display: this.props.fullNewsShowed ? 'block' : 'none' }}>
          <button className="close-fullNews" onClick={this.props.toggleFullNews}>
            X
          </button>
          <img src={singleNews.urlToImage} alt={singleNews.title} />
          <div className="article-data" style={{ display: this.props.fullNewsShowed ? 'block' : 'none' }}>
            <h2>{singleNews.title}</h2>
            <span>{singleNews.publishedAt}</span>
            <p>{singleNews.description}</p>
            <a href={singleNews.url} target="_blank">
              Read More...
            </a>
          </div>
        </div>
      ) : (
        <p>{singleNews}</p>
      );

    return element;
  }
}

export default FullNews;
