import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/navbar";
import HomePage from "./components/homePage";
import SubPage from "./components/subPage";
import Schedule from "./components/schedule";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar></NavBar>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/subpage" component={SubPage} />
          <Route exact pUserInfoath="/schedule" component={Schedule} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
