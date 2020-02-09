import React from 'react';
import "./FrontPage.css"
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import {applicationDescription, applicationName} from "../../assets/constants";
import {Link} from "react-router-dom";
import CategoryCardDeck from "./CategoryCardDeck";
import Card from "react-bootstrap/Card"
import FrontPageBackground from '../../assets/background.jpg';

const FrontPage = ({categories, fetchCategories}) => {

    return (
        <div>
            <Card className="bg-dark text-black">
                <Card.Img src={FrontPageBackground} className="front-page-image-card"/>
                <Card.ImgOverlay>
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
                </Card.ImgOverlay>
            </Card>

            <CategoryCardDeck categories={categories.slice(0,4)} />

        </div>

    );

};
export default FrontPage;