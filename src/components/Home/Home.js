import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as ActionCreators from '../../actionCreators/actionCreators';

import News from '../News/NewsList';
import Carousel from '../Carousel/Carousel';
import TopNews from '../TopNews/TopNews';
import Loader from '../Loader/Loader';

import './Home.css';
import FullNews from '../FullNews/FullNews';

class Home extends Component {
  state = {
		fullNews: false
	};

  static getDerivedStatedFromProps(props, state) {
    return props;
  }

  componentDidMount() {
    this.props.getTopUS();

    window.addEventListener('scroll', this.onScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll);
  }

  onScroll = () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 300) {
      this.props.getMoreNews();
    }
	};
	
	toggleFullNews = () => {
		this.setState({fullNews: !this.state.fullNews})
	};
	

  render() {
    let { topUS, fullNews } = this.props;

    return (
      <main className="home">
        <div className="intro-slides">
          <Carousel slides={topUS} />
          <TopNews topNews={topUS.slice(0, 4)} />
        </div>
				{
					topUS.length > 0 
						? 
						<News 
							topUS={topUS} 
							showFullArticle={this.props.getFullNews} toggleFullNews={this.toggleFullNews}/> 
						: 
						<Loader />
				}
				<FullNews 
					fullNews={fullNews} 
					fullNewsShowed={this.state.fullNews}
					toggleFullNews={this.toggleFullNews}
				/>
      </main>
    );
  }
}

const mapStateToProps = state => ({
	topUS: state.topUS,
	fullNews: state.singleNews
});

const mapDispatchToProps = dispatch => ({
  getTopUS: bindActionCreators(ActionCreators.getTopUSMiddle, dispatch),
  getMoreNews: bindActionCreators(ActionCreators.getMoreNewsMiddle, dispatch),
  getFullNews: bindActionCreators(ActionCreators.getSingleNewsMiddle, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
