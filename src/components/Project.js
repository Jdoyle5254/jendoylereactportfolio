import React from "react"
// import {projectsData} from "./data/projectsData"
// import Card from 'react-bootstrap/Card';

// layout for displaying projects from the data file projectData
function imagePath(path)
{
    return "/static/media/" + path;
}



export default function Project (props) {

    return (
      
        <div className="projectbody">

         {/* <img src={imagePath(props.projimage)} /> */}
         <img src={`${process.env.PUBLIC_URL}/assets/${props.projimage}`} alt={props.title}/>

          <h2>Title: {props.title}</h2>
          <p> Description: {props.description}</p>
          <p>Tech Used: {props.tech.join(', ')}</p>
       

         <h4 className="projlinks">Links to Project: <a rel="noreferrer noopener" target="_blank" href={props.github}> GitHub </a>
          <a rel="noreferrer noopener" target="_blank" href={props.deploy}>Project </a> </h4>
          
        </div>


    )
}
