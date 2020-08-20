import React, { Component } from 'react'
import {Container} from 'react-bootstrap'
import '../../styles/utilites.css';
import '../../styles/profile.css';

export class Profile extends Component {
    render() {
        return (
            <Container className = "cont-standard">
                <img className = "profile" src="images/profile.jpeg" alt=""></img>
            </Container>
        )
    }
}

export default Profile
