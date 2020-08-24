import React, { Component } from 'react'
import {Container, Col, Row, Button} from 'react-bootstrap'
import '../../styles/dashboard.css';
import '../../styles/utilites.css';

export class Website extends Component {
    render() {
        return (
            <Container className = "fade-in cont-standard dashboard">
            <h3 className = "techheader companyheader">Personal Website</h3>
            <p className = "position">Web Development Project</p>
            <p className = "position">July 2020 to August 2020</p>
            <Row className = "row-standard label"><img className = "companylogobig" src = "images/weblogo.png"></img></Row>
            <Col className = "col-standard">
            <p className = "description4">&bull; Programmed customized personal website with React.js to showcase experiences and projects</p>
            <p className = "description4">&bull; Future plans to implement mobile responsiveness</p>
            <p className = "description4">&bull; Designed user interface in Sketch from scratch</p>
            <p className = "description4">&bull; Tools: React.js, HTML, CSS, Sketch</p>
            </Col>
            </Container>
        )
    }
}

export default Website
