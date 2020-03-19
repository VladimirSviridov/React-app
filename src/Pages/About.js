import React, {Component} from 'react';
import {Col, Container, Nav, Row, Tab} from "react-bootstrap"


class About extends Component {
    render() {
        return (
            <Container>
                <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                    <Row>
                        <Col sm={3}>
                            <Nav variant={"pills"} className="flex-column mt-2">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">
                                        Design
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">
                                        Team
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">
                                        Programming
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="fourth">
                                        Frameworks
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="fifth">
                                        Libraries
                                    </Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col sm={9}>
                            <Tab.Content className="mt-3">
                                <Tab.Pane eventKey="first">
                                    <img src="https://sun9-62.userapi.com/c850024/v850024866/17c114/QP-CWpbCpUg.jpg"
                                         alt="Design"/>
                                    <p>
                                        quisque non tellus orci ac auctor augue mauris augue neque gravida in fermentum
                                        et sollicitudin ac orci phasellus egestas tellus rutrum tellus pellentesque eu
                                        tincidunt
                                    </p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <img
                                        src="https://image.shutterstock.com/image-photo/developing-programming-coding-technologies-website-260nw-696061297.jpg"
                                        alt="Team"/>
                                    <p>
                                        quisque non tellus orci ac auctor augue mauris augue neque gravida in fermentum
                                        et sollicitudin ac orci phasellus egestas tellus rutrum tellus pellentesque eu
                                        tincidunt
                                    </p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                    <img
                                        src="https://sun3-10.userapi.com/ZTr27XFc-5NJ4PeSk2yPcx2Y5BmG_ky9f2GEPg/buzRm8dcvdg.jpg"
                                        alt="Programming"/>
                                    <p>
                                        quisque non tellus orci ac auctor augue mauris augue neque gravida in fermentum
                                        et sollicitudin ac orci phasellus egestas tellus rutrum tellus pellentesque eu
                                        tincidunt
                                    </p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="fourth">
                                    <img
                                        src="https://i2.wp.com/oracle-patches.com/images/141/JavaScript_Frameworks.jpeg"
                                        alt="Frameworks"/>
                                    <p>
                                        quisque non tellus orci ac auctor augue mauris augue neque gravida in fermentum
                                        et sollicitudin ac orci phasellus egestas tellus rutrum tellus pellentesque eu
                                        tincidunt
                                    </p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="fifth">
                                    <img
                                        src="https://montana-media-arts.github.io/web-tech/modules/week-8/imgs/javaScript-libraries.png"
                                        alt="Libraries"/>
                                    <p>
                                        quisque non tellus orci ac auctor augue mauris augue neque gravida in fermentum
                                        et sollicitudin ac orci phasellus egestas tellus rutrum tellus pellentesque eu
                                        tincidunt
                                    </p>
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>

                </Tab.Container>
            </Container>
        );
    }
}

export default About;