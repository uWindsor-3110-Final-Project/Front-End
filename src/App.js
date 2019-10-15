import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import NavBar from './components/navbar';
import HomePage from './components/homePage';
import SubPage from './components/subPage';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar></NavBar>
        <Switch>
          <Route path='/' exact component={HomePage}/>
          <Route path='/subpage' component={SubPage}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;