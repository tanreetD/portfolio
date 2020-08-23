import React, { Component } from 'react'
import {Container, Col, Row, Button} from 'react-bootstrap'
import '../../styles/dashboard.css';
import '../../styles/utilites.css';
import {NavLink} from "react-router-dom";

export class CurrentCode extends Component {
    render() {
        return (
            <Container className = "fade-in cont-standard dashboard">
            <Row className = "row-standard">
            <h3 className = "techheader">Work Experience and Projects</h3></Row>
            <p className = "position instructions">Please click on each card to learn more about my role and product demos.</p>
            <Row className = "row-standard">
            <NavLink to = "/work-experience/barnacle"><Button className = "cardone"><Row className = "row-standard company">BARNACLE SYSTEMS</Row>
            <Row className = "row-standard" >Software Engineering Intern</Row>
            <Row className = "row-standard">Fall 2020</Row>
            <Row className = "row-standard"><span className = "dotyellow">&#x25CF;</span> Javascript</Row>
            <Row className = "row-standard label"><img className = "companylogo" src="images/barnaclelogo.png" alt=""></img></Row></Button></NavLink>
            <NavLink to = "/work-experience/dyne"><Button className = "cardtwo"><Row className = "row-standard company">DYNE TECHNOLOGIES</Row>
            <Row className = "row-standard">Software Engineering Intern</Row>
            <Row className = "row-standard">Summer 2020</Row>
            <Row className = "row-standard"><span className = "dotorange">&#x25CF;</span> Swift &nbsp;&nbsp;<span className = "dotyellow">&#x25CF;</span> Javascript</Row>
            <Row className = "row-standard label"><img className = "companylogo" src="images/dynelogo.png" alt=""></img></Row></Button></NavLink>
            <NavLink to = "/work-experience/ivey"><Button className = "cardthree"><Row className = "row-standard company">IVEY BUSINESS SCHOOL</Row>
            <Row className = "row-standard">Research Assistant Intern</Row>
            <Row className = "row-standard">Summer 2019</Row>
            <Row className = "row-standard"><span className = "dotblue">&#x25CF;</span> Python &nbsp;&nbsp;</Row>
            <Row className = "row-standard label"><img className = "companylogo" src="images/iveylogo.png" alt=""></img></Row></Button></NavLink>
            </Row>
            <Row className = "row-standard">
            <NavLink to = "/work-experience/mobile-app"><Button className = "cardone"><Row className = "company">STEM EDUCATION MOBILE APP</Row>
            <Row>Mobile Development Project</Row><Row>Present</Row>
            <Row className = "row-standard"><span className = "dotorange">&#x25CF;</span> Swift &nbsp;&nbsp;</Row>
            <Row className = "label"><img className = "companylogo" src="images/robotlogo.png" alt=""></img></Row></Button></NavLink>
            <Button className = "cardtwo"><Row className = "company">PERSONAL WEBSITE</Row>
            <Row>Web Development Project</Row><Row>Summer 2020</Row>
            <Row className = "row-standard"><span className = "dotyellow">&#x25CF;</span> Javascript &nbsp;&nbsp;</Row>
            <Row className = "label"><img className = "companylogo" src="images/weblogo.png" alt=""></img></Row></Button>
            <NavLink to = "/work-experience/game"><Button className = "cardthree"><Row className = "company">FREDRYCK'S FRONTIER</Row>
            <Row>Game Developemnt Project</Row><Row>Winter 2020</Row>
            <Row className = "row-standard"><span className = "dotgreen">&#x25CF;</span> C# &nbsp;&nbsp;</Row>
            <Row className = "label"><img className = "companylogo" src="images/gamelogo.png" alt=""></img></Row></Button></NavLink>
            </Row>
            </Container>
        )
    }
}

export default CurrentCode
