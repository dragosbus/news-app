import React, {Component} from 'react';
import Api from '../../Api';

import News from '../News/NewsList';
import Carousel from '../Carousel/Carousel';
import Loader from '../Loader/Loader';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topNewsUS: []
    }
  }
  componentDidMount() {
    Api.then(data=>{
      console.log(data)
      this.setState(prevState=>({
        topNewsUS: prevState.topNewsUS.concat(data.articles)
      }));
    })
  }

  render() {
    return(
      <main className="home">
        <Carousel slides={this.state.topNewsUS}/>
        {
          this.state.topNewsUS.length > 0 ? 
            <News topUS={this.state.topNewsUS}/> 
            : 
            <Loader/>
        }
      </main>
    );
  }
}