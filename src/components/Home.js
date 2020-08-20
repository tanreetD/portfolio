import React, { Component } from 'react'
import '../styles/home.css';
import '../styles/utilites.css';
import {Container} from 'react-bootstrap'
import Dashboard from './Dashboard'
import Navigation from './Navigation'
import CurrentCode from '../components/dashboardComponents/CurrentCode'
import Extracurriculars from '../components/dashboardComponents/Extracurriculars'
import {Route, HashRouter} from "react-router-dom";
import BetterCart from '../components/workComponents/BetterCart'
import Dyne from '../components/workComponents/Dyne'
import Ivey from '../components/workComponents/Ivey'
import Game from '../components/workComponents/Game'
import WIE from '../components/workComponents/WIE'
import MobileApp from '../components/workComponents/MobileApp'

class Home extends Component {
    render() {
      return (
    <HashRouter>
    <Container className = "cont-standard background">
            <Navigation></Navigation>
            <Route exact path = "/" component = {Dashboard}/>
            <Route exact path = "/work-experience" component = {CurrentCode}/>
            <Route path = "/work-experience/barnacle" component = {BetterCart}/>
            <Route path = "/work-experience/dyne" component = {Dyne}/>
            <Route path = "/work-experience/ivey" component = {Ivey}/>
            <Route path = "/work-experience/game" component = {Game}/>
            <Route path = "/work-experience/mobile-app" component = {MobileApp}/>
            <Route exact path = "/extra-curriculars" component = {Extracurriculars}/>
            <Route exact path = "/extra-curriculars/wie" component = {WIE}/>
    </Container>
    </HashRouter>
)}  
}
    
export default Home

//Font: 200, 300, 400, 600, 700, 900