import React, { Component } from 'react'
import {Container} from 'react-bootstrap'
import '../styles/dashboard.css';
import '../styles/utilites.css';
import Skills from './dashboardComponents/Skills'

export class Dashboard extends Component {
    render() {
        return (
            <Container className = "fade-in cont-standard dashboard">
                <h3 className = "header extraspacing"> &#128075;&#127996; Hi, my name is <b className = "name">Tanreet Dhaliwal!</b></h3>
                <p className = "p-body extraspacing">I enjoy building seamingless full stack software products that make a positive impact on the world around me.
                I strive to place myself in challenging enviroments to solve problems that push my capabilities as a software engineer. This past summer, I built a contactless dining platform
                from the ground up at Dyne Technologies that is currently being used in a restaurant. As a Fall Software Engineering Intern at Barnacle Systems, I am responsible for developing new features on their boat security and monitoring mobile app that is protecting recreational, industrial, and military vessels all around the world.
                In my free time, you can find me trying out a new recipe or obsessing over the latest panda videos. &#128060;
                </p>
                <h2 className ="section">Technical Skills</h2>
                <Skills></Skills>
            </Container>
        )
    }
}

export default Dashboard

//In styles set positioning of dashboard and remove top and left padding
