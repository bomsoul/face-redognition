import React, { Component } from 'react';
import { Route, Router } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import './App.css';

import Home from './views/Home';
import ImageInput from './views/ImageInput';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router history={createHistory()}>
          <div className="route">
            <Route exact path="/" component={Home} />
            <Route exact path="/photo" component={ImageInput} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;