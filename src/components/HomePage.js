import React from "react"
import {  Link } from "react-router-dom";
import lakefront2 from "../assets/lakefront2.jpg"





export default function HomePage() {

    return (
        <div className="bodyhome" >
         
        <Link to="/about"><button className="homebutton">Enter Here</button></Link>
     
        </div>
    )
}