import React from 'react';
import Jumbotron from "react-bootstrap/Jumbotron";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CardDeck from "../CardDeck/CardDeck";

const ExplorePage = ({categories}) => {

    return (
        <Jumbotron>
            <Row className="justify-content-lg-center">
                <Col lg="10">
                    <h1>{`Explore categories`}</h1>
                    <hr />
                </Col>
            </Row>
            <CardDeck categories={categories} limit={null}/>
        </Jumbotron>
    );
};
export default ExplorePage;