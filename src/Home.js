import React, { Component } from "react";
import "./styles/home.css";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Text from "./Components/Text"
import Btn from "./Components/Btn"
import Logo from "./Components/Logo"
import Picture from "./Components/Picture"

class Home extends Component {
    redirect = (url) => {
        console.log(url);
    }

    componentDidMount() {
        document.getElementById('contact').addEventListener('click', function () {
            window.location.href = 'mailto:kontakt@dosoft.pl';
        });
        document.getElementById('pricing').addEventListener('click', function () {
            window.location.href = 'https://forms.gle/7e2MrJPc7KLBe19g8';
        });
        document.getElementById('portfolio').addEventListener('click', function () {
            window.location.href = 'https://dribbble.com/dosoft';
        });
        document.getElementById('contact-mobile').addEventListener('click', function () {
            window.location.href = 'mailto:kontakt@dosoft.pl';
        });
        document.getElementById('pricing-mobile').addEventListener('click', function () {
            window.location.href = 'https://forms.gle/7e2MrJPc7KLBe19g8';
        });
        document.getElementById('portfolio-mobile').addEventListener('click', function () {
            window.location.href = 'https://dribbble.com/dosoft';
        });
    }

    componentWillUnmount() {
        document.getElementById('contact').removeEventListener('click', function () {
            window.location.href = 'mailto:kontakt@dosoft.pl';
        });
        document.getElementById('pricing').removeEventListener('click', function () {
            window.location.href = 'https://forms.gle/7e2MrJPc7KLBe19g8';
        });
        document.getElementById('portfolio').removeEventListener('click', function () {
            window.location.href = 'https://dribbble.com/dosoft';
        });
        document.getElementById('contact-mobile').removeEventListener('click', function () {
            window.location.href = 'mailto:kontakt@dosoft.pl';
        });
        document.getElementById('pricing-mobile').removeEventListener('click', function () {
            window.location.href = 'https://forms.gle/7e2MrJPc7KLBe19g8';
        });
        document.getElementById('portfolio-mobile').removeEventListener('click', function () {
            window.location.href = 'https://dribbble.com/dosoft';
        });
    }

    render() {
        return (
            <div className="div-main">
                <Container className="container-std">
                    <Row className="row-main">
                        <Col className="col-std col-left" md={6}>
                            <div className="div-left">
                                <Container className="container-left">
                                    <Row className="row-logo">
                                        <Col className="col-std col-logo">{<Logo />}</Col>
                                    </Row>
                                    <Row className="row-text">
                                        <Col className="col-std col-text" md={12}>{<Text />}</Col>
                                    </Row>
                                    <Row className="row-stats">
                                        <Col md={4}><button id="contact">Skontaktuj się</button></Col>
                                        <Col md={4}><button id="pricing">Wyceń projekt</button></Col>
                                        <Col md={4}><button id="portfolio">Portfolio</button></Col>
                                    </Row>
                                    <Row className="row-stats-mobile">
                                        <Col><button id="contact-mobile">Skontaktuj się</button> <button id="pricing-mobile">Wyceń projekt</button> <button id="portfolio-mobile">Portfolio</button></Col>
                                    </Row>
                                </Container>
                            </div>
                        </Col>
                        <Col className="col-std col-right" md={6}>
                            <div className="div-right"> {<Picture />}
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            
        );
    }
}
export default Home;


