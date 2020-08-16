import React from 'react';
import Jumbotron from "react-bootstrap/Jumbotron";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CategoryCardDeck from "../FrontPage/CategoryCardDeck";

const ExplorePage = ({categories}) => {

    return (
        <Jumbotron>
            <Row className="justify-content-lg-center">
                <Col lg="10">
                    <h1>{`Explore categories`}</h1>
                    <hr />
                    <CategoryCardDeck categories={categories} limit={null}/>
                </Col>
            </Row>
        </Jumbotron>
    );
};
export default ExplorePage;