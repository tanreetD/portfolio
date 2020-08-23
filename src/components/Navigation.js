import React, { Component } from 'react'
import '../styles/navigation.css';
import '../styles/utilites.css';
import {Container, Col, Row, Button} from 'react-bootstrap'
import Profile from './navigationComponents/Profile'
import Sidebar from './navigationComponents/Sidebar'
import Pdf from "../SoftwareResume.pdf";

export class Navigation extends Component {

    onResumeClick() {
        window.open("https://tanreetd.github.io/portfolio/static/media/SoftwareResume.ca8ec021.pdf");
      }

    onGitClick() {
        window.open("https://github.com/tanreetD");
    }

    onLinkedClick() {
        window.open("https://www.linkedin.com/in/tanreet-dhaliwal/");
    }

    onEmailClick() {
        window.open("mailto:tdhali@uwo.ca")
    }

    render() {
        return (
        <Container className = "cont-standard navigation">
           <Col className = "col-standard">
           <Row className = "row-standard">
               <Profile></Profile>
           </Row>
           <Row className = "row-standard">
               <p className = "p-highlight">Third Year <br></br> Software Engineering Student<br></br> at Western University</p>
           </Row>
           <Row className = "row-standard">
               <Sidebar></Sidebar>
           </Row>
           <Row className = "row-standard">
               <Button onClick= {this.onResumeClick} className = "btn-standard">Download Resume</Button>
           </Row>
           <Row className = "row-standard">
            <Button onClick = {this.onGitClick}className = "btn-social"><img className = "social" src="images/git.png" alt=""></img></Button>
            <Button onClick = {this.onLinkedClick} className = "btn-social"><img className = "linked" src="images/linkedin.png" alt=""></img></Button>
            <Button onClick = {this.onEmailClick}  className = "btn-social"><img className = "email" src="images/email.png" alt=""></img></Button>

           </Row>
           </Col>
        </Container>
        )
    }
}

export default Navigation
