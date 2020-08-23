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
            <p className = "description4">&bull; Developed over 40 page robotics and STEM curriculum for teachers to integrate robotics education relating to Mechanical Design, Electrical and Programming in elementary school classrooms</p>
            <p className = "description4">&bull; Currently working on programming lesson plans into an educational native iOS app in Swift</p>
            <p className = "description4">&bull; Inital launch planned with with Right to Play to reach over 80 schools in Ontario</p>
            <p className = "description4">&bull; Future plans to add social media posts feature across app audience</p>
            <p className = "description4">&bull; Tools: Swift, CoreData, CoreGraphics, CoreAnimation, Git, Firebase, Sketch</p>
            <Row className = "row-standard"><img className = "wie1" src = "images/App1.png"></img><img className = "wie2" src = "images/App2.png"></img><img className = "wie2" src = "images/App3.png"></img></Row>
            </Col>
            
            </Container>
        )
    }
}

export default MobileApp
