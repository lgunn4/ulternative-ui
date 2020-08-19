import React from 'react';
import Jumbotron from "react-bootstrap/Jumbotron";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {Image} from "react-bootstrap";
import Card from "react-bootstrap/Card";

import './category.css';
import CardDeck from "../CardDeck/CardDeck";
import {Link} from "react-router-dom";

const CategoryPage = ({category}) => {

    console.log(category);
    return (
        <div>
            <Jumbotron>
                <Row className="justify-content-lg-center">
                    <Col lg="10">
                        <h1>{category.name}</h1>
                        <Card>
                            <Row>
                                <Col sm="8" className="category-image">
                                    <Image variant="top" src={category.image.url}/>
                                </Col>
                                <Col className="category-description" sm="4">
                                    <p>{category.description}</p>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                </Row>
                <Link className="explore-more" to="/explore"><h5>Explore More Categories</h5></Link>
            </Jumbotron>
            <Jumbotron className="card-deck">
                {category.items.length > 0 ?
                    (<div>
                        <h2>{`Items`}</h2>
                        <CardDeck categories={category.items} />
                    </div>) :
                    (<p>uhh ohh ....There are no items within this category yet</p>)
                }
            </Jumbotron>
        </div>
    );
};
export default CategoryPage;