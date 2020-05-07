import React, { Component } from "react";
import "./styles/home.css";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class Home extends Component {
    render() {
        return (
            <div className="div-main">
                <Container className="container-std">
                    <Row className="row-main">
                        <Col className="col-std col-left" md={12}>
                            <div className="div-left">
                                <Container className="container-left">
                                <Row className="row-logo">
                                        <Col className="col-std col-logo"> logo</Col>
                                    </Row>
                                    <Row className="row-text">
                                        <Col className="col-std col-text" md={6}>pierdu pierdu</Col>
                                    </Row>
                                    <Row className="row-btn">
                                        <Col className="col-std col-btn">kontakt</Col>
                                        <Col className="col-std col-btn">portfolio</Col>
                                        <Col className="col-std col-btn">wycena</Col>
                                    </Row>
                                    <Row className="row-social">
                                        <Col className="col-std col-social">fb</Col>
                                    </Row>
                                </Container>
                            </div>
                        </Col>
                        <Col className="col-std col-right" md={5}>
                            <div className="div-right">
                            <p> tu foto</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Home;