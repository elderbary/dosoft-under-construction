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
                                        <Col md={4}><Btn href="mailto:kontakt@dosoft.pl" btntext="Skontaktuj się" /> </Col>
                                        <Col md={4}><Btn href="" btntext="Wyceń projekt" /> </Col>
                                        <Col md={4}><Btn href="https://dribbble.com/dosoft/shots" btntext="Portfolio" /> </Col>
                                    </Row>
                                    <Row className="row-stats-mobile">
                                        <Col><Btn href="mailto:kontakt@dosoft.pl" btntext="Skontaktuj się" /> <Btn href="" btntext="Wyceń projekt" /> <Btn href="" btntext="Portfolio" /></Col>
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


