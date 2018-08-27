import React from 'react';
import {Link} from 'react-router-dom';

import './Header.css'

const Header = props => {
  return(
    <header className="main-header">
      <h1 className="logo">
        <Link to='/'>Home</Link>
      </h1>
    </header>
  );
};

export default Header;