import React from "react"
import {projectsData } from "../data/projectsData"
import ProjectList from "./ProjectList"
import LinksMenu from "./LinksMenu"


export default function PortfolioPage() {
 
    return (
        <div>
        <LinksMenu />
        <h1> Check these out! </h1>
        <ProjectList projects = {projectsData} />

        </div>
        
        /* map over the array of projects to display on the 
        page  upto 6?
        */
    )
}