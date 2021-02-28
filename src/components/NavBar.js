import React from "react"
import { BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";
import App from "../App";
import PortfolioPage from "./PortfolioPage"
  

export default  function NavBar() {
  const date = new Date ()
  const hours = date.getHours()
  let timeOfDay
    

  if (hours <12) {
    timeOfDay = "morning"
  } else if (hours >= 12 && hours < 17) {
    timeOfDay = "afternoon"
  } else {
    timeOfDay = "night"
  }
    return (
         
        <div className="navbar">
        <h3 >Good {timeOfDay} and welcome to my world! </h3>
        <Router>
            <Link to = "/">Home </Link>
            <Link to="/portfoliopage">Portfolio</Link>

            <Switch>
            <Route exact path="/">
                <App />
            </Route>
            <Route path="/portfolio">
                <PortfolioPage/>
            </Route>
            </Switch>
        </Router>
        
        </div>

        
      
    )

}