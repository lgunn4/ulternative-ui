import React from 'react';
import LoadableCategoryCardDeck from "../FrontPage/containers/LoadableCategoryCardDeck";
import Jumbotron from "react-bootstrap/Jumbotron";
import './explore.css';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const ExplorePage = ({fetchCategories}) => {
    fetchCategories();

    return (
        <Jumbotron>
            <Row className="justify-content-lg-center">
                <Col lg="10">
                    <h1>{`Explore categories`}</h1>
                    <hr />
                    <LoadableCategoryCardDeck/>
                </Col>
            </Row>
        </Jumbotron>
    );
};
export default ExplorePage;