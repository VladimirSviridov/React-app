import React, {Component} from 'react'
import CarouselBox from "../Components/CarouselBox";
import {Button, Card, CardDeck, Container} from "react-bootstrap";


export default class Home extends Component {
    render() {
        return (
            <>
                <CarouselBox/>
                <Container>
                    <h2 className="text-center m-4">Our team</h2>
                    <CardDeck className="m-4">
                        <Card bg="warning">
                            <Card.Img variant="top"
                                      src="https://images.pexels.com/photos/1560932/pexels-photo-1560932.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"/>
                            <Card.Body>
                                <Card.Title>Developers</Card.Title>
                                <Card.Text>integer enim neque volutpat ac tincidunt vitae semper quis lectus nulla
                                    at</Card.Text>
                                <Button variant="primary">About team</Button>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Body>
                                <Card.Title>Developers</Card.Title>
                                <Card.Text>integer enim neque volutpat ac tincidunt vitae semper quis lectus nulla
                                    at</Card.Text>
                                <Button variant="primary">About team</Button>
                            </Card.Body>
                            <Card.Img variant="bottom"
                                      src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"/>
                        </Card>
                        <Card>
                            <Card.Img variant="top"
                                      src="https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"/>
                            <Card.Body>
                                <Card.Title>Developers</Card.Title>
                                <Card.Text>integer enim neque volutpat ac tincidunt vitae semper quis lectus nulla
                                    at</Card.Text>
                                <Button variant="primary">About team</Button>
                            </Card.Body>
                        </Card>
                    </CardDeck>
                </Container>
            </>
        );
    }
}

