import React from "react";
import ElementNews from "./NewsElement";
import "./News.css";

const News = props => {
	return (
		<ul className="news-list">
			{props.topUS.map((news, i) => {
				return <ElementNews 
					key={i} 
					{...news} 
					id={i} 
					showFullArticle={() => {
						props.showFullArticle(i);
						props.toggleFullNews();
					}}
				/>
			})}
		</ul>
	);
};

export default News;
