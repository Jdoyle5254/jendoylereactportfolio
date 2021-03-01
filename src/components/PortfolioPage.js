import React from "react"
import {projectsData } from "../data/projectsData"
import ProjectList from "./ProjectList"
import LinksMenu from "./LinksMenu"
import {Container, Col, Row} from 'react-bootstrap';



export default function PortfolioPage() {
 
    return (
        <div>
        <Container>
        <Row>
        <Col md="2">
        <LinksMenu />
        </Col>
        <Col md="10">
        <h1 className="projectheader"> Check these out! </h1>
        <ProjectList projects = {projectsData} />

        </Col>
        </Row>
        </Container>

        </div>
        
        /* map over the array of projects to display on the 
        page  upto 6?
        */
    )
}