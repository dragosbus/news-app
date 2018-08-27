import React from 'react';
import Slide from './Slide';
import './Carousel.css';


const Carousel = props => {
  return(
    <div className="carousel">
      {props.slides.map(slide=><Slide {...slide}/>)}
    </div>
  );
}

export default Carousel;