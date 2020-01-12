import React from 'react';
import "./FrontPage.css"
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import {applicationDescription, applicationName} from "../../assets/constants";
import {Link} from "react-router-dom";
import {mockCategoryData} from "../../assets/MockData/MockData";
import CategoryCardDeck from "../CategoryCardDeck/CategoryCardDeck";
import Carousel from "react-bootstrap/Carousel";
import CardImage from "../../assets/cardImage.svg";

const FrontPage = () => {
    return (
        <div>
            <Jumbotron className="front-page-call-to-action">
                <h1>Welcome to {applicationName}</h1>
                <p>
                    {applicationDescription}
                </p>
                <p>
                    <Link exact to="/search" >
                        <Button variant="success" href="/search">Start Searching</Button>
                    </Link>
                </p>
            </Jumbotron>
            <CategoryCardDeck categories={mockCategoryData.slice(0,4)} />
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={CardImage}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={CardImage}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={CardImage}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>

    );

};
export default FrontPage;