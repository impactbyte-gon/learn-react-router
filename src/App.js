import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import Home from './pages/Home'
import About from './pages/About'
import Help from './pages/Help'
import Haidar from './pages/Haidar'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/help">Help</Link>
            <Link to="/haidar">Haidar</Link>
          </nav>

          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/help" component={Help} />
            <Route path="/haidar" component={Haidar} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App
