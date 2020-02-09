import React from "react";
import CardDeck from "react-bootstrap/CardDeck";
import Card from "react-bootstrap/Card";
import { LinkContainer } from "react-router-bootstrap";
import defaultImage from "../../assets/cardImage.svg"

const CategoryCardDeck = ({categories}) => {
    const categoryCards = categories.map(category => {
        return (
            <LinkContainer exact to={`category/${category.categoryId}`}>
            <Card>
                {category.categoryImage
                    ? <Card.Img variant="top" src={category.categoryImage}/>
                    : <Card.Img variant="top" src={defaultImage}/>
                }
                <Card.Body>
                    <Card.Title>{category.categoryName}</Card.Title>
                    <Card.Text>
                        {category.categoryDescription}
                    </Card.Text>
                </Card.Body>
            </Card>
        </LinkContainer>
        )
    });

    return (
            <CardDeck>
                {categoryCards}
            </CardDeck>
    )
};

export default CategoryCardDeck;