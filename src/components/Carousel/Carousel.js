import React from 'react';
import Slide from './Slide';
import './Carousel.css';

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      slideIndex: 0
    };
    this.changeSlide = this.changeSlide.bind(this);
  }

  componentDidMount() {
    this.changeSlide();
  }

  changeSlide() {
    setInterval(() => {
      this.setState({
        slideIndex: this.state.slideIndex < 4 ? this.state.slideIndex + 1 : 0
      });
    }, 4000);
  }

  render() {
    return (
      <div className="carousel">
        <Slide article={this.props.slides[this.state.slideIndex]} />
      </div>
    );
  }
}

export default Carousel;
