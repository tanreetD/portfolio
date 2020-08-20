import React, { Component } from 'react'
import '../../styles/utilites.css';
import '../../styles/skills.css';
import {Container, Col, Row} from 'react-bootstrap'

export class Skills extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col className = "square subheading"><p className = "pheading">FRONT END</p><Col className = "secondsquare subheading"><p className = "pheading">BACK END</p><Col className = "thirdsquare subheading"><p className = "pheading">FULL STACK</p><Col className = "fourthsquare subheading"><p className = "pheading">OTHER TOOLS</p></Col></Col></Col></Col>
                </Row>
                <Row>
                    <Col className = "body">
                    <p className = "pbody">&bull; React.js</p>
                    <p className = "pbody">&bull; Javascript</p>
                    <p className = "pbody">&bull; HTML</p>
                    <p className = "pbody">&bull; CSS/Sass</p>
                    <p className = "pbody">&bull; Typescript</p>
                    <p className = "pbody">&bull; Bootstrap</p>
                    <p className = "pbody">&bull; Redux</p>
                    <p className = "pbody">&bull; jQuery</p>
                   </Col>
                   <Col className = "secondbody">
                    <p className = "pbody">&bull; Java</p>
                    <p className = "pbody">&bull; Python</p>
                    <p className = "pbody">&bull; Google Cloud Firestore (NoSQL Database)</p>
                    <p className = "pbody">&bull; Thunk</p>
                    <p className = "pbody">&bull; REST Web Services</p>
                   </Col>
                   <Col className = "thirdbody">
                    <p className = "pbody">&bull; Swift</p>
                    <p className = "pbody">&bull; C#</p>
                    <p className = "pbody">&bull; Unity</p>
                    <p className = "pbody">&bull; Node.js</p>
                   </Col>
                   <Col className = "fourthbody">
                    <p className = "pbody">&bull; Normalizr Library</p>
                    <p className = "pbody">&bull; Pandas Library</p>
                    <p className = "pbody">&bull; Git</p>
                    <p className = "pbody">&bull; Stripe API</p>
                   </Col>
                </Row>
            </Container>
        )
    }
}

export default Skills
