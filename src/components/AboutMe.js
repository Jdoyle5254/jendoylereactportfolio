import React from "react";
import BioPic from "../assets/BioPic.jpg"
import Canal from "../assets/Canal.jpg"
import Mexico from "../assets/Mexico.JPEG"
import { Col, Row} from 'react-bootstrap';
import '../App.css';

export default function AboutMe () {
    return (
        <div className="about">
            <Row>
                <Col md="3">
                 <img className="biopic" src={BioPic} alt="headshot" />
                 <img className="canal"  src={Canal} alt="grand canal" />
                 
                 </Col>
                <Col md="9">
                    <article className="article">
                        <p>Welcome, and thank you for stopping by this page.  My name is Jen Doyle and I welcm you to my world.  I am a highly skilled relationshipbuilder and innovative problem solver, who found a new passion in life, programming.  I am enhancing my soft skills by adding a whole new component of hard skills in full stack web development.  I want to use my knowlege to help create a unique expereince or creatively solve a problem.  I am an effective communictor who actively listens to people tell their story.  I am able to drill down and issue to find a creative solution.  I am a consumate networker skilled in bringing people together and bridge gaps to build stronger relationships.  I am passionate about learning people's stories and expereinces to help them bring their vision to life.</p>

                        <p>I am a fun loving dynamic individual, who wants to put the FUN in FUNctions.  I try to find the fun and smiles in everything I do.  I laugh a lot.  I like to meet new people and learn about them from their stories and expereinces. I have a lot of passions outside of coding that include football, travel, reading, cooking, and live music.  I love to explore new places and taking pictures of things that interest me. The pictures shown are from some of the trips I have taken in the last few years.   During quarantine, I enhanced my baking skills and spent a lot of time by the lakefront. Want to know more?  Contact me via <a href="www.linkedin.com/in/jenniferanndoyle">LinkedIn</a> or via <a href="mailto:jen.doyle5254@gmail.com">email</a>.</p>
                    </article>
                </Col>
            </Row>
        

        </div>
    )
}