import React from "react";
import './Footer.css'
import {Col, Container, Jumbotron, Row} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebookSquare, faInstagram, faTwitterSquare} from "@fortawesome/free-brands-svg-icons";
import {facebookLink, instagramLink, twitterLink} from "../../../assets/constants";
import {Link} from "react-router-dom";

const Footer = () => {
    return(
        <footer className="footer">
            <Jumbotron fluid>
               <hr/>
               <Container>
                   <Row>
                       <Col>
                   <h4>Company</h4>
                   <ul>
                       <Link  to="/ulternative-ui/"><li>Home</li></Link>
                       <Link  to="/ulternative-ui/about"><li>About</li></Link>
                       <Link  to="/ulternative-ui/contact"><li>Contact</li></Link>
                   </ul>
                       </Col>
                   <Col>
                    <h4>Product</h4>
                    <ul>
                        <Link  to="/ulternative-ui/search"><li>Search</li></Link>
                        <Link  to="/ulternative-ui/explore"><li>Explore</li></Link>
                    </ul>
                </Col>

                <Col>
                    <h4>Socials</h4>
                    <ul>
                        <li><a href={instagramLink} ><FontAwesomeIcon icon={faInstagram} /></a></li>
                        <li><a href={facebookLink} ><FontAwesomeIcon icon={faFacebookSquare} /></a></li>
                        <li><a href={twitterLink}><FontAwesomeIcon icon={faTwitterSquare} /></a></li>
                    </ul>
                </Col>
                   </Row>
                </Container>
            </Jumbotron>
            <div className="end-of-footer"><p>Created By <a href="https://lgunn4.github.io">Logan Gunn</a></p></div>
        </footer>
    )
};

export default Footer;