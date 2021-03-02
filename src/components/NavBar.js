import React from "react"
import { NavLink } from "react-router-dom";

  

export default function NavBar() {
  const date = new Date()
  const hours = date.getHours()
  let timeOfDay


  if (hours < 12) {
    timeOfDay = "morning"
  } else if (hours >= 12 && hours < 17) {
    timeOfDay = "afternoon"
  } else {
    timeOfDay = "night"
  }
  return (

    <div className="navbar">
      <h3 >Good {timeOfDay} and welcome to Jen's World of Code! </h3>
      <NavLink activeClassName="is-active" to="/"> Home </NavLink>
      <NavLink activeClassName="is-active" to="/about"> About Jen</NavLink>
      <NavLink activeClassName="is-active" to="/portfolio">Portfolio</NavLink>
    </div>




  )

}