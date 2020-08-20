import React, { Component } from 'react'
import {Container, Col, Row, Button} from 'react-bootstrap'
import '../../styles/dashboard.css';
import '../../styles/utilites.css';
import {NavLink} from 'react-router-dom'

export class Extracurriculars extends Component {
    render() {
        return (
            <Container className = "fade-in cont-standard dashboard">
            <Row className = "row-standard">
            <h3 className = "techheader">Extracurriculars</h3></Row>
            <p className = "position instructions">Please click on each card to learn more about my role and view photos.</p>
            <Row className = "row-standard">
            <NavLink to = "/extra-curriculars/wie"><Button className = "cardone"><Row className = "row-standard company extra">WOMEN IN ENGINEERING CLUB</Row><Row className = "row-standard" >Outreach Executive</Row><Row className = "row-standard">Fall 2018 to Present</Row><Row className = "row-standard label"><img className = "companylogo extralogo" src="images/wielogo.png" alt=""></img></Row></Button></NavLink>
            <Button className = "cardtwo"><Row className = "row-standard company extra">FRC TEAM 1325 INVERSE PARADOX</Row><Row className = "row-standard">Business Operations Lead and Mentor</Row><Row className = "row-standard">Fall 2015 to Present</Row><Row className = "row-standard label"><img className = "companylogo extralogo" src="images/roboticslogo.png" alt=""></img></Row></Button>
            <Button className = "cardthree"><Row className = "row-standard company extra">TAVARES GROUP CONSULTING</Row><Row className = "row-standard">Marketing Intern</Row><Row className = "row-standard">Fall 2018 to Winter 2019</Row><Row className = "row-standard label"><img className = "companylogo extralogo" src="images/tavareslogo.png" alt=""></img></Row></Button>
            </Row>
            </Container>
        )
    }
}

export default Extracurriculars
