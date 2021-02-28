import React from "react"
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { fab } from '@fortawesome/free-brands-svg-icons'
import NavBar from "./components/NavBar"
import LinksMenu from "./components/LinksMenu"
import Footer from "./components/Footer"
import AboutMe from "./components/AboutMe"
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";
import {Container, Col, Row} from 'react-bootstrap';
import './App.css';

function App() {
  return (
    <div className="container">
      <NavBar />
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
  );
}

export default App;
