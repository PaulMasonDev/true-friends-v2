import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './pages/homepage/HomePage';
import Header from './components/Header/Header';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import SignupLogin from './pages/SignupLogin/SignupLogin';

import './App.scss';

const App = () => {
  return (
    <Router>
      <div>
        <Header />  
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/signuplogin" component={SignupLogin} />
        </Switch> 
      </div>
    </Router>
  );
}

export default App;