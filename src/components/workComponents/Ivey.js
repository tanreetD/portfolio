import React, { Component } from 'react'
import {Container, Col, Row} from 'react-bootstrap'
import '../../styles/dashboard.css';
import '../../styles/utilites.css';

export class Ivey extends Component {
    render() {
        return (
            <Container className = "fade-in cont-standard dashboard">
            <h3 className = "techheader companyheader">Ivey Business School</h3>
            <p className = "position">Research Assistant</p>
            <p className = "position">May 2019 to June 2019</p>
            <Row className = "row-standard label"><img className = "companylogobig" src = "images/iveylogo.png"></img></Row>
            <Col className = "col-standard">
            <p className = "description4">&bull; Worked with a team of analysts under the supervision of Professor Michael King at Scotiabank Digital Banking Lab on Canada FinTech 150 project</p>
            <p className = "description4">&bull; Automated existing manual research processes by programming web scraping application using pandas library and Python to increase speed, efficiency and accuracy of data mining</p>
            <p className = "description4">&bull; Conducted research analyses of 150+ Fintech startups to establish a prediction model for success based on current industry and market trends</p>
            <p className = "description4">&bull; Tools: Python, Pandas Library</p>
            </Col>
            </Container>
        )
    }
}

export default Ivey
