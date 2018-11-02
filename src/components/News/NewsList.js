import React from "react";
import ElementNews from "./NewsElement";
import "./News.css";

const News = props => {
	return (
		<ul className="news-list">
			{props.topUS.map((news, i) => <ElementNews key={i} {...news} id={i} />)}
		</ul>
	);
};

export default News;
