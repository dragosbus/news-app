import React, { Component } from 'react';
import Api from '../../Api';

import News from '../News/NewsList';
import Carousel from '../Carousel/Carousel';
import TopNews from '../TopNews/TopNews';
import Loader from '../Loader/Loader';

import './Home.css';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topNewsUS: []
    };
  }
  componentDidMount() {
    Api.then(data => {
      console.log(data);
      this.setState(prevState => ({
        topNewsUS: prevState.topNewsUS.concat(data.articles)
      }));
    });
  }

  render() {
    return (
      <main className="home">
        <div className="intro-slides">
          <Carousel slides={this.state.topNewsUS} />
          <TopNews topNews={this.state.topNewsUS.slice(0, 4)} />
        </div>
        {this.state.topNewsUS.length > 0 ? <News topUS={this.state.topNewsUS} /> : <Loader />}
      </main>
    );
  }
}
