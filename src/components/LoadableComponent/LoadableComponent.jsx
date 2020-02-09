import React from 'react';
import './LoadableComponent.css'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {BeatLoader} from "react-spinners";

const LoadableComponent = ({isLoading, component}) => {
    console.log(isLoading, component);

    if(isLoading) {
        return (
            <Row className="loader">
                <Col>
                    <BeatLoader loading={isLoading} />
                </Col>
            </Row>
        );
    }
    return (<div>{component}</div>);

};
export default LoadableComponent;