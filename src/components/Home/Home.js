import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as ActionCreators from '../../actionCreators/actionCreators';

import News from '../News/NewsList';
import Carousel from '../Carousel/Carousel';
import TopNews from '../TopNews/TopNews';
import Loader from '../Loader/Loader';

import './Home.css';

class Home extends Component {
  componentDidMount() {
    this.props.getTopUS();

    window.addEventListener('scroll', this.onScroll, false);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll, false);
  }

  onScroll = () => {
    if (
      (window.innerHeight + window.scrollY) >= (document.body.offsetHeight - 500) 
    ) {
      this.props.getMoreNews();
    }
  }

  render() {
    let { topUS } = this.props;
    console.log(topUS)
    return (
      <main className="home">
        <div className="intro-slides">
          <Carousel slides={topUS} />
          <TopNews topNews={topUS.slice(0, 4)} />
        </div>
        {topUS.length > 0 ? <News topUS={topUS} /> : <Loader />}
      </main>
    );
  }
}

const mapStateToProps = state => ({
  topUS: state.topUS
});

const mapDispatchToProps = dispatch => ({
  getTopUS: bindActionCreators(ActionCreators.getTopUSMiddle, dispatch),
  getMoreNews: bindActionCreators(ActionCreators.getMoreNewsMiddle, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
