import React from 'react';


const Slide = props =>{
    return(
        <div className="carousel-slide">
            <img src={props.urlToImage} alt={props.title}/>
        </div>
    );
};

export default Slide;