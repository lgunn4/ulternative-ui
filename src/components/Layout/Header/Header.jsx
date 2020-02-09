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
                <LinkContainer exact to="/ulternative-ui/">
                    <Navbar.Brand>
                        <img alt={`${applicationName} company logo`} src={Logo} width="30" height="30"/>
                    </Navbar.Brand>
                </LinkContainer>
                <LinkContainer exact to="/ulternative-ui">
                    <Navbar.Brand>{applicationName}</Navbar.Brand>
                </LinkContainer>
                <Nav id='header-navigation' className="ml-auto">
                    <LinkContainer exact to="/ulternative-ui/"><Nav.Link>Home</Nav.Link></LinkContainer>
                    <LinkContainer to="/ulternative-ui/about"><Nav.Link>About</Nav.Link></LinkContainer>
                    <LinkContainer to="/ulternative-ui/contact"><Nav.Link>Contact</Nav.Link></LinkContainer>
                    <LinkContainer exact to="/ulternative-ui/search"><Nav.Link>Search</Nav.Link></LinkContainer>
                </Nav>
            </Navbar>
        </div>
    );
};
export default Header;