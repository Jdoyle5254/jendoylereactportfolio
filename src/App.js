import React from "react"
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { fab } from '@fortawesome/free-brands-svg-icons'
import NavBar from "./components/NavBar"
import Footer from "./components/Footer"
import AboutMePage from "./components/AboutMePage"
import HomePage from "./components/HomePage"
import PortfolioPage from "./components/PortfolioPage"
import {  HashRouter as Router, Switch, Route} from "react-router-dom";

import './App.css';

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <div className="container">
          <Route path="/portfolio"><PortfolioPage/></Route>
          <Route path="/about"><AboutMePage /></Route>
          <Route exact path="/"><HomePage /></Route>
        </div>
      </Switch>
      <Footer />

    </Router>

  
  );
}

export default App;
