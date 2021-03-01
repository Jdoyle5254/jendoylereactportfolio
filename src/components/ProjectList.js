import React from "react"
import Project from "./Project"

export default function ProjectList(props) {
    const allProjects = props.projects.map(project => {
        return (
            <Project 
               key={project.id}
               id={project.id}
               title={project.title}
               github={project.github}
               description={project.description}
   
            />
        )
    })
    return (
        <div> {allProjects} </div>
    )
}