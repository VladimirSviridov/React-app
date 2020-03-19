import React, {Component} from 'react';
import Carousel from "react-bootstrap/Carousel"
import flowersOne from "../Assets/nature-spring-pink-cherry-tree-112141.jpg"
import flowersTwo from "../Assets/depth-of-field-photography-of-cherry-blossom-tree-860833.jpg"
import flowersThree from "../Assets/selective-focus-photography-of-white-cherry-blossom-flowers-1009831.jpg"


class CarouselBox extends Component {
    render() {
        return (
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100 "
                        src={flowersOne}
                        alt="Flowers"
                    />
                    <Carousel.Caption>
                        <h3>
                            Flowers image
                        </h3>
                        <p>
                            Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={flowersTwo}
                        alt="Flowers"
                    />
                    <Carousel.Caption>
                        <h3>
                            Flowers image
                        </h3>
                        <p>
                            Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={flowersThree}
                        alt="Flowers"
                    />
                    <Carousel.Caption>
                        <h3>
                            Flowers image
                        </h3>
                        <p>
                            Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        );
    }
}

export default CarouselBox;