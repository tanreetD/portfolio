import React, { Component } from 'react'
import {Container, Col, Row, Button} from 'react-bootstrap'
import '../../styles/dashboard.css';
import '../../styles/utilites.css';

export class MobileApp extends Component {
    render() {
        return (
            <Container className = "cont-standard dashboard">
            <h3 className = "techheader companyheader">STEM Education Mobile App</h3>
            <p className = "position">Mobile Development Project</p>
            <p className = "position">Present</p>
            <Row className = "row-standard label"><img className = "companylogobig" src = "images/robotlogo.png"></img></Row>
            <Col className = "col-standard">
            <p className = "description4">&bull; Currently working on implementing new features on Web App and using maching learning to optimize product matching algorithm</p>
            </Col>
            </Container>
        )
    }
}

export default MobileApp
