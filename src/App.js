import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// import pages
import Home from './components/pages/HomePage';
import About from './components/pages/AboutPage';
import SinglePage from './components/pages/SinglePage';
import Error from './components/pages/ErrorPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about" >
          <About />
        </Route>
        <Route path="/singlePage/:id">
          <SinglePage />
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
