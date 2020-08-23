import React, { Component } from 'react'
import {Container, Col, Row, Button} from 'react-bootstrap'
import '../../styles/dashboard.css';
import '../../styles/utilites.css';

export class Work extends Component {
    render() {
        return (
            <Container className = "cont-standard dashboard">
            <h3 className = "techheader companyheader">Dyne</h3>
            <p className = "position">Software Engineering Intern</p>
            <p className = "position">April 2020 to August 2020</p>
            <Row className = "row-standard label"><img className = "companylogobig" src = "images/dynelogo.png"></img></Row>
            <Row className = "row-standard center">
            <Col className = "col-standard">
            <video className = "video" controls width = "370" autoplay>
            <source src="videos/dyne.mp4" type="video/mp4"></source>
            Sorry, your browser doesn't support embedded videos.
            </video>
            </Col>
            <Col className = "col-standard bullets">
            <p className = "description">&bull; Built a contactless dining platform consisting of a React.js and native iOS app in an agile development team</p>
            <p className = "description2">&bull; Created responsive screens with modal views, animations and reusable components on web and mobile apps</p>
            <p className = "description2">&bull; Optimized Firestore NoSQL database to reduce read operations by 56% to ensure efficient scaling</p>
            <p className = "description2">&bull; Executed asynchronous data queries to retrieve live customer and corresponding orders from Firestore</p>
            <p className = "description2">&bull; Remodelled state architecture using react-redux from scratch to improve data flow between component hierarchy</p>
            <p className = "description2">&bull; Wrote cloud functions in Node.js to perform server-side logic to set up notification system between apps</p>
            <p className = "description4">&bull; iOS Features Worked On: QR Code Table Generator, Notification System, Multi-Dining Check In</p>
            <p className = "description4">&bull; Web App Features Worked On: Table Selection, Authentication, Order Flow, Order Status Indicator</p>
            <p className = "description4">&bull; Tools: React.js, Javascript, Typescript, HTML, CSS, Bootstrap, Redux, Firestore, Swift, Node.js, Stripe API, Normalizr, Git</p>
            </Col>
            </Row>
            </Container>
        )
    }
}

export default Work

/*<video controls width = "400">
<source src="videos/dyne.mp4"
 type="video/mp4"></source>
 Sorry, your browser doesn't support embedded videos.
</video>
<img src = "images/dynelogo.png"></img>*/
