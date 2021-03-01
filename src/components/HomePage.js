import React from "react"
import {  Link } from "react-router-dom";
import lakefront from "../assets/lakefront.jpg"





export default function HomePage() {

    return (
        <div className="bodyhome" style={{ backgroundImage: `url(${lakefront})`,
        backgroundReapeat: 'no-repeat',
        width: "auto",
        height: "auto"}}>
         
        <h1>Welcome to Jen's World of Coding!</h1>

        <Link to="/about"><button className="homebutton">Enter Here</button></Link>
     
        </div>
    )
}