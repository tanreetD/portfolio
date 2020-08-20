import React, { Component } from 'react'
import {Container, Col, Row} from 'react-bootstrap'
import '../../styles/dashboard.css';
import '../../styles/utilites.css';

export class WIE extends Component {
    render() {
        return (
            <Container className = "cont-standard dashboard">
            <h3 className = "techheader companyheader">Women In Engineering</h3>
            <p className = "position">Outreach Executive</p>
            <p className = "position">Sept 2018 to Present</p>
            <Row className = "row-standard label"><img className = "companylogobig" src = "images/wielogo.png"></img></Row>
            <Col className = "col-standard">
            <p className = "description4">&bull; Appointed as a first year representative as a freshman to bridge the gap between the executive team and become a voice for new club members</p>
            <p className = "description4">&bull; Took a leadership role as an Outreach Intern in my sophmore year to host STEM workshops and present on behalf of WIE at engineering events in the university community</p>
            <p className = "description4">&bull; Hosted hands on programming workshops for 50+ elementary school girls at conferences such as GO ENG GIRL and GO CODE GIRL</p>
            <Row className = "row-standard"><img className = "wie1" src = "images/Wie3.png"></img><img className = "wie2" src = "images/Wie1.png"></img><img className = "wie2" src = "images/Wie2.png"></img></Row>
            </Col>
            </Container>
        )
    }
}

export default WIE
