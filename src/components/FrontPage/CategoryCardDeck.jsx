import React from "react";
import Card from "react-bootstrap/Card";
import { LinkContainer } from "react-router-bootstrap";
import defaultImage from "../../assets/cardImage.svg";
import "./card.css";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const CategoryCardDeck = ({categories}) => {
    const categoryCards = categories.map(category => {
        return (
            <Col sm='3'>
                <LinkContainer exact to={`category/${category.categoryId}`}>
                    <Card className="cardDeck">
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