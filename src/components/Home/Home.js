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
  }

  render() {
    let { topUS } = this.props;

    return (
      <main className="home">
        <div className="intro-slides">
          {/* <Carousel slides={this.state.topNewsUS} /> */}
          {/* <TopNews topNews={this.state.topNewsUS.slice(0, 4)} /> */}
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
  getTopUS: bindActionCreators(ActionCreators.getTopUSMiddle, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
