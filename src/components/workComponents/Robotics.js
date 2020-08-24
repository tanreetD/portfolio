import React, { Component } from 'react'
import {Container, Col, Row, Button} from 'react-bootstrap'
import '../../styles/dashboard.css';
import '../../styles/utilites.css';

export class Robotics extends Component {
    render() {
        return (
            <Container className = "fade-in cont-standard dashboard">
            <h3 className = "techheader companyheader">FRC Team 1325 Inverse Paradox</h3>
            <p className = "position">Business Operations Lead and Mentor</p>
            <p className = "position">Sept 2015 to Present</p>
            <Row className = "row-standard label"><img className = "companylogobig" src = "images/roboticslogo.png"></img></Row>
            <Col className = "col-standard">
            <p className = "description4">&bull; Obtained problem resolution skills by leading the development of 120 pound competitive robot with 50+ students according to technical specifications </p>
            <p className = "description4">&bull; Increased annual corporate sponsorships by 300% by implementing tiered sponsorship levels and monthly newsletters communications</p>
            <p className = "description4">&bull; Managed $40,000 yearly operating budget through online accounting system to conduct annual financial analysis to establish organizational goals, sustainability plans and risk mitigation strategies</p>
            <p className = "description4">&bull; Organized international outreach campaign with free STEM camps for 700 youth by partnering with Yamana Gold and conducted 5 service trips to India facilitating education in rural schools</p>
            </Col>
            </Container>
        )
    }
}

export default Robotics
