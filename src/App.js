import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';

import Navigation from './components/Navigation';

import Home from './pages/Home';
import About from './pages/About';
import Help from './pages/Help';
import Mario from './pages/Mario';

const AppContainer = styled.div`
  font-family: Arial, Helvetica, sans-serif;
`;

class App extends Component {
  render() {
    return (
      <Router>
        <AppContainer>
          <Navigation />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/help" component={Help} />
            <Route path="/mario" component={Mario} />
          </Switch>
        </AppContainer>
      </Router>
    );
  }
}

export default App;
