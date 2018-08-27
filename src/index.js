import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import { render } from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './style.css';

import Header from './components/Header/Header';
import Home from './components/Home/Home';
import FullNews from './components/FullNews/FullNews';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <Header />
          <Switch>
            <Route
              exact
              path="/"
              render={() => {
                return (
                  <Provider store={store}>
                    <Home />
                  </Provider>
                );
              }}
            />
            <Route path="/movies/:id" component={FullNews} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

render(<App />, document.getElementById('root'));
