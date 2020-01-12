import React from 'react';
import "./Header.css";
import {Nav, Navbar} from "react-bootstrap";
import Logo from '../../../assets/logo.jpg'
import {applicationName} from "../../../assets/constants";
import { LinkContainer } from "react-router-bootstrap";

const Header = () => {
    return (
        <div>
            <Navbar className="navigation-bar" fixed="top" bg="dark" variant="dark" >
                <LinkContainer exact to="/">
                    <Navbar.Brand href="/">
                        <img alt={`${applicationName} company logo`} src={Logo} width="30" height="30"/>
                    </Navbar.Brand>
                </LinkContainer>
                <LinkContainer exact to="/">
                    <Navbar.Brand>{applicationName}</Navbar.Brand>
                </LinkContainer>
                <Nav id='header-navigation' className="ml-auto">
                    <LinkContainer exact to="/"><Nav.Link>Home</Nav.Link></LinkContainer>
                    <LinkContainer to="/about"><Nav.Link>About</Nav.Link></LinkContainer>
                    <LinkContainer to="/contact"><Nav.Link>Contact</Nav.Link></LinkContainer>
                    <LinkContainer exact to="/search"><Nav.Link>Search</Nav.Link></LinkContainer>
                </Nav>
            </Navbar>
        </div>
    );
};
export default Header;