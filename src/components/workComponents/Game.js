import React, { Component } from 'react'
import {Container, Col, Row} from 'react-bootstrap'
import '../../styles/dashboard.css';
import '../../styles/utilites.css';

export class Game extends Component {
    render() {
        return (
            <Container className = "fade-in cont-standard dashboard">
            <h3 className = "techheader companyheader">Fredryck's Frontier</h3>
            <p className = "position">Game Development Project</p>
            <p className = "position">January 2020 to March 2020</p>
            <Row className = "row-standard label"><img className = "companylogobig" src = "images/gamelogo.png"></img></Row>
            <Row className = "row-standard center">
            <Col className = "col-standard">
            <video className = "video" controls width = "370" autoplay>
            <source src="videos/Game.mp4" type="video/mp4"></source>
            Sorry, your browser doesn't support embedded videos.
            </video>
            </Col>
            <Col className = "col-standard bullets">
            <p className = "description">&bull; Led a group of four students to create a 2D platform game in Unity and C# designing customized characters, levels and storyline with accommodating technical documentation</p>
            <p className = "description2">&bull; Focused on applying OOP programming skills, implementing the Software Development Lifecycle in a real life application and learning version control on Github</p>
            <p className = "description2">&bull; Created start menu and character selection screens that render players with varying strengths and capabilities</p>
            <p className = "description2">&bull; Programmed entirety of level one and enemies that change direction based on position of players in level three</p>
            <p className = "description2">&bull; Coded a Pac-man style minigame with a randomized follow program for ghosts in the maze</p>
            <p className = "description2">&bull; Tools: Unity, C#, Git</p>
            </Col>
            </Row>
            </Container>
        )
    }
}

export default Game
