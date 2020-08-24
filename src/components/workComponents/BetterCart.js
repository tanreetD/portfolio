import React, { Component } from 'react'
import {Container, Col, Row, Button} from 'react-bootstrap'
import '../../styles/dashboard.css';
import '../../styles/utilites.css';

export class BetterCart extends Component {
    render() {
        return (
            <Container className = "fade-in cont-standard dashboard">
            <h3 className = "techheader companyheader">Barnacle Systems</h3>
            <p className = "position">Software Engineering Intern</p>
            <p className = "position">September 2020 to December 2020</p>
            <Row className = "row-standard label"><img className = "companylogobig" src = "images/barnaclelogo.png"></img></Row>
            <Col className = "col-standard">
            <p className = "description4">&bull; Barnacle Systems provides boat security and monitoring products that are currently protecting recreational, industrial, and military vessels around the world </p>
            <p className = "description4">&bull; Currently working on implementing new features and improving BRNKL software applicaton used by clients</p>
            <p className = "description4">&bull; Tools: Javascript, Node.js, Angular.js, Jest, Ionic, ReactiveX</p>
            </Col>
            </Container>
        )
    }
}

export default BetterCart
