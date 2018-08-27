import React, { Component } from 'react';
import { render } from 'react-dom';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import './style.css';

import Header from './components/Header/Header';
import Home from './components/Home/Home';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      news: []
    }
  }

  render() {
    return (
      <div className="app">
        <BrowserRouter>
          <div>
            <Header/>
            <Route exact path='/' component={Home}/>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
