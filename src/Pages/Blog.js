import React, {Component} from 'react';
import {Card, Col, Container, ListGroup, Media, Row} from "react-bootstrap";

class Blog extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col md="9">
                        <Media className="m-5">
                            <img
                                width={150}
                                height={150}
                                className="mr-3"
                                src="https://yt3.ggpht.com/a/AGF-l7_3YN68ajCzR9UBEe0bPgW0ecG06aBqLrauVw=s900-c-k-c0xffffffff-no-rj-mo"
                            />
                            <Media.Body>
                                <h5>Blog post</h5>
                                <p>
                                    erat nam at lectus urna duis convallis convallis tellus id interdum velit laoreet id
                                    donec ultrices tincidunt arcu non sodales neque sodales ut etiam sit amet nisl purus
                                    in mollis
                                </p>
                            </Media.Body>
                        </Media>
                        <Media className="m-5">
                            <img
                                width={150}
                                height={150}
                                className="mr-3"
                                src="https://yt3.ggpht.com/a/AGF-l7_3YN68ajCzR9UBEe0bPgW0ecG06aBqLrauVw=s900-c-k-c0xffffffff-no-rj-mo"
                            />
                            <Media.Body>
                                <h5>Blog post</h5>
                                <p>
                                    erat nam at lectus urna duis convallis convallis tellus id interdum velit laoreet id
                                    donec ultrices tincidunt arcu non sodales neque sodales ut etiam sit amet nisl purus
                                    in mollis
                                </p>
                            </Media.Body>
                        </Media>
                        <Media className="m-5">
                            <img
                                width={150}
                                height={150}
                                className="mr-3"
                                src="https://yt3.ggpht.com/a/AGF-l7_3YN68ajCzR9UBEe0bPgW0ecG06aBqLrauVw=s900-c-k-c0xffffffff-no-rj-mo"
                            />
                            <Media.Body>
                                <h5>Blog post</h5>
                                <p>
                                    erat nam at lectus urna duis convallis convallis tellus id interdum velit laoreet id
                                    donec ultrices tincidunt arcu non sodales neque sodales ut etiam sit amet nisl purus
                                    in mollis
                                </p>
                            </Media.Body>
                        </Media>
                        <Media className="m-5">
                            <img
                                width={150}
                                height={150}
                                className="mr-3"
                                src="https://yt3.ggpht.com/a/AGF-l7_3YN68ajCzR9UBEe0bPgW0ecG06aBqLrauVw=s900-c-k-c0xffffffff-no-rj-mo"
                            />
                            <Media.Body>
                                <h5>Blog post</h5>
                                <p>
                                    erat nam at lectus urna duis convallis convallis tellus id interdum velit laoreet id
                                    donec ultrices tincidunt arcu non sodales neque sodales ut etiam sit amet nisl purus
                                    in mollis
                                </p>
                            </Media.Body>
                        </Media>
                        <Media className="m-5">
                            <img
                                width={150}
                                height={150}
                                className="mr-3"
                                src="https://yt3.ggpht.com/a/AGF-l7_3YN68ajCzR9UBEe0bPgW0ecG06aBqLrauVw=s900-c-k-c0xffffffff-no-rj-mo"
                            />
                            <Media.Body>
                                <h5>Blog post</h5>
                                <p>
                                    erat nam at lectus urna duis convallis convallis tellus id interdum velit laoreet id
                                    donec ultrices tincidunt arcu non sodales neque sodales ut etiam sit amet nisl purus
                                    in mollis
                                </p>
                            </Media.Body>
                        </Media>
                    </Col>
                    <Col md="3">
                        <h5 className="text-center mt-5">Category</h5>
                        <Card>
                            <ListGroup variant="flush">
                                <ListGroup.Item>HTML/CSS</ListGroup.Item>
                                <ListGroup.Item>JavaScript</ListGroup.Item>
                                <ListGroup.Item>Python</ListGroup.Item>
                                <ListGroup.Item>Ruby</ListGroup.Item>
                                <ListGroup.Item>C++</ListGroup.Item>
                            </ListGroup>
                        </Card>
                        <Card className="mt-3" bg="light">
                            <Card.Body>
                                <Card.Title>
                                    Side widget
                                </Card.Title>
                                <Card.Text>
                                    erat nam at lectus urna duis convallis converat nam at lectus urna duis convallis
                                    converat nam at lectus urna duis convallis converat nam at lectus urna duis
                                    convallis converat nam at lectus urna duis convallis converat nam at lectus urna
                                    duis convallis conv
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Blog;