import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/main';
import Chapter1 from './pages/Chapter1';
import Chapter2 from './pages/Chapter2';
import Chapter3 from './pages/Chapter3';
import Chapter4 from './pages/Chapter4';
import Chapter5 from './pages/Chapter5';
import Chapter6 from './pages/Chapter6';


function App() {
  return (
      <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/chapter1'component={Chapter1} />
          <Route path='/chapter2' component={Chapter2} />
          <Route path='/chapter3' component={Chapter3} />
          <Route path='/chapter4' component={Chapter4} />
          <Route path='/chapter5' component={Chapter5} />
          <Route path='/chapter6' component={Chapter6} />
        </Switch>
      </Router>  
      </>
  );
}

export default App;
