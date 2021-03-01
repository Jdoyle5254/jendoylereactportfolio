import React from "react"
 
import Footer from "./Footer"
import LinksMenu from "./LinksMenu"
import AboutMe from "./AboutMe"
import {Container, Col, Row} from 'react-bootstrap';



export default function AboutMePage () {
 
    return (
    <div className="container">

    <Container>
      <Row>
        <Col md="2">
          <LinksMenu />
        </Col>
        <Col md="10">
          <AboutMe />
        </Col>
    
      </Row>
    
    </Container>
    
    <Footer />
    </div>
    
 )

}

