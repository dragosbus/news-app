import React from 'react';
import "./Loader.css";

const Loader = props => {
  return(
    <div className="loader">
      <span className="spinner-1"></span>
      <span className="spinner-2"></span>
      <span className="spinner-3"></span>
    </div>
  );
};

export default Loader;