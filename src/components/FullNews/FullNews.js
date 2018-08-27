import React from 'react';


const FullNews = (props) => {
    console.log(props)
    return(
        <div>
            {props.match.params.id}
        </div>
    );
}

export default FullNews;