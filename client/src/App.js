import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from './components/Navbar';
import Search from './pages/Search';
import Saved from './pages/Saved';
import './App.css';

function App() {
  return (
    <div className="container-fluid">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={ Search } />
          <Route exact path="/search/" component={ Search } />
          <Route exact path="/saved/" component={ Saved } />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
