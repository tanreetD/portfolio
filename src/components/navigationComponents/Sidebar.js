import React, { Component } from 'react'
import {Container, Col, Row, Button} from 'react-bootstrap'
import '../../styles/utilites.css';
import '../../styles/sidebar.css';
import {NavLink} from "react-router-dom";

export class Sidebar extends Component {

    render() {

        return (
            <Container className = "cont-standard">
                <Col className = "col-standard">
                <Row className = "row-standard"><NavLink to = "/"><Button className = "btn-nav">
                    <img className = "icon" src="images/home.png" alt=""></img>Home</Button></NavLink></Row>
                <Row className = "row-standard"><NavLink to = "/work-experience">
                    <Button className = "btn-nav">
                    <img className = "icon" src="images/code.png" alt=""></img>Work Experience and Projects</Button></NavLink></Row>
                <Row className = "row-standard"><NavLink to = "/extra-curriculars">
                    <Button className = "btn-nav"><img className = "icon" src="images/setup.png" alt="">
                    </img>Extra-Curricular Activites</Button></NavLink></Row>
                </Col>
            </Container>
        )
    }
}

export default Sidebar

//Add email button
