import React from 'react';
import {Card, Col, Jumbotron, Row} from "react-bootstrap";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import {Link} from "react-router-dom";

const LoadableCategoryPage = ({category}) => {
    return (

        <Jumbotron>
            <Row className="justify-content-lg-center">
                <Col lg="2">
                    <Link exact to="/ulternative-ui/explore">
                        <Button variant="outline-success">Go Back To Explore Page</Button>
                    </Link>
                </Col>
                <Col lg="10">
                    <h1>{`Explore categories`}</h1>
                    <hr />
                </Col>
                <hr />
            </Row>
                <Row>
                    <Col sm="4">
                        <Image style={{width: "100%"}} src={category.categoryImage} rounded />
                    </Col>
                    <Col sm="8">
                    <Card>
                        <Card.Title>{category.categoryName}</Card.Title>
                        <Card.Body>{category.categoryDescription}</Card.Body>
                    </Card>
                    </Col>
                </Row>
        </Jumbotron>

    )
};
export default LoadableCategoryPage;