import React from "react"
// import Card from 'react-bootstrap/Card';

// layout for displaying projects from the data file projectData
export default function Project (props) {

    return (
      
        <div className="projectbody">

         <img src={props.projimage} alt="{props.title}"/>

          <h2>Title: {props.title}</h2>

         <h4 className="projlinks">Links to Project: <a rel="noreferrer noopener" target="_blank" href={props.github}> GitHub </a>
            <a rel="noreferrer noopener" target="_blank" href={props.deploy}>Project </a> </h4>
          <p>Tech Used: {props.tech}</p>
          <p> Description: {props.description}</p>
       
        </div>


    )
}