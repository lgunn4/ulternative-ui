import React from "react";
import CardDeck from "react-bootstrap/CardDeck";
import {Link} from "react-router-dom";
import Jumbotron from "react-bootstrap/Jumbotron";
import Card from "react-bootstrap/Card";
import CardImage from "../../assets/cardImage.svg";
import Button from "react-bootstrap/Button";

const CategoryCardDeck = ({categories}) => {
    const categoryCards = categories.map(category => {
        return (
            <Card>
                <Card.Img variant="top" src={CardImage} />
                <Card.Body>
                    <Card.Title>{category.categoryName}</Card.Title>
                    <Card.Text>
                        {category.categoryDescription}
                    </Card.Text>
                    <Link exact to={`category/${category.categoryId}`}><Button variant="success">See {category.categoryName}</Button></Link>
                </Card.Body>
            </Card>
        )
    });
    return (
        <Jumbotron className="front-page-browse-categories">
            <h2>Browse Categories</h2>
            <hr/>
            <CardDeck>
                {categoryCards}
            </CardDeck>
            <Link exact to="/expore"><h5>Explore More Categories</h5></Link>
        </Jumbotron>

    )
};

export default CategoryCardDeck;