import React from "react"
// import Card from 'react-bootstrap/Card';

// layout for displaying projects from the data file projectData
export default function Project (props) {

    return (
      <div>
      <ul>
          <li>Title: {props.title}</li>
          <li>GitHub: {props.github}</li>
          <li> Description: <p>{props.description}</p></li>
      </ul>

      </div>

    )
}