import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as ActionCreators from '../../actionCreators/actionCreators';

import './FullNews.css';

class FullNews extends React.Component {
  componentDidMount() {
    this.props.getSingleNews(this.props.id);
  }
  render() {
    let { singleNews } = this.props;
    
    let element = typeof singleNews === 'object' ? (
      <div className="article">
        <img src={singleNews.urlToImage} alt={singleNews.title} />
        <h2>{singleNews.title}</h2>
        <span>{singleNews.publishedAt}</span>
        <p>{singleNews.description}</p>
        <a href={singleNews.url} target="_blank">
          Read More...
        </a>
      </div>
    ) : (
      <p>{singleNews}</p>
    );

    return element;
  }
}

const mapStateToProps = state => ({
  singleNews: state.singleNews
});

const mapDispatchToProps = dispatch => ({
  getSingleNews: bindActionCreators(ActionCreators.getSingleNewsMiddle, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FullNews);
