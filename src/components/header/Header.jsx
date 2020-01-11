import React from 'react';
import {Nav, Navbar} from "react-bootstrap";
import Logo from '../../assets/logo.jpg'
import {applicationName} from "../../assets/constants";

const Header = () => {
    return (
        <div>
            <Navbar fixed="top" bg="dark" variant="dark" >
                <Navbar.Brand href="/">
                    <img alt={`${applicationName} company logo`} src={Logo} width="30" height="30"/>
                </Navbar.Brand>
                <Navbar.Brand>{applicationName}</Navbar.Brand>
                <Nav id='header-navigation' className="ml-auto">
                    <Nav.Link href="/" >Home</Nav.Link>
                    <Nav.Link href="/about">About</Nav.Link>
                    <Nav.Link href="/contact">Contact</Nav.Link>
                    <Nav.Link href="/search">Search</Nav.Link>
                </Nav>
            </Navbar>
        </div>
    );
};
export default Header;