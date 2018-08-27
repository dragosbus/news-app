import React from 'react';
import { findDOMNode } from 'react-dom';
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
    setTimeout(()=>{
      findDOMNode(document.querySelector('.carousel')).classList.add('fade-enter-active');
    },2000);
    setInterval(() => {
      this.setState({
        slideIndex: this.state.slideIndex < 4 ? this.state.slideIndex + 1 : 0
      });
    }, 5000);
  }

  componentDidUpdate() {
    findDOMNode(document.querySelector('.carousel')).classList.remove('fade-exit-active');
    setTimeout(() => {
      findDOMNode(document.querySelector('.carousel')).classList.add('fade-exit-active');
    }, 3500);
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
