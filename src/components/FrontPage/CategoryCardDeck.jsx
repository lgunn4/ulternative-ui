import React from "react";
import Card from "react-bootstrap/Card";
import { LinkContainer } from "react-router-bootstrap";
import defaultImage from "../../assets/cardImage.svg";
import "./card.css";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const CategoryCardDeck = ({categories, limit}) => {
    categories = limit === null ? categories : categories.slice(0, limit);
    const categoryCards = categories.map(category => {
        return (
            <Col sm='3' className="single-card" key={category.id}>
                <LinkContainer exact to={`category/${category.id}`}>
                    <Card className="cardDeck">
                        {category.image
                            ? <Card.Img variant="top" src={category.image.url}/>
                            : <Card.Img variant="top" src={defaultImage}/>
                        }
                        <Card.Body>
                            <Card.Title>{category.name}</Card.Title>
                            <Card.Text>
                                {category.description.slice(0, 150)}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </LinkContainer>
            </Col>
        )
    });

    return (
            <Row>
                {categoryCards}
            </Row>
    )
};

export default CategoryCardDeck;