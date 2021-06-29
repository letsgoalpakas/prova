import React from 'react';
import Carousel from '../../components/carousel';
import { Jumbotron } from "reactstrap";
import Navbar from '../../components/navbar_utente';

import Card1 from '../../components/card1';
import Card2 from '../../components/card2';
import Card3 from '../../components/card3';
import Card4 from '../../components/card4';
import Card5 from '../../components/card5';
import Card6 from '../../components/card6';
import Card7 from '../../components/card7';


import { Container, Row, Col } from 'reactstrap'

function paginaIniziale(){
        
    return (
        
        <body>
            <Navbar></Navbar>
                <div style={{"margin":"45px"}}>      
                <br></br>
                <br></br>
                <Jumbotron>
                <br></br>
                <br></br>
                <h1 className="display-3">Let's go by Alpakas</h1>
                <p className="lead">Registrati e viaggia con noi.</p>
                <hr className="my-2" />
                </Jumbotron>
                </div>        
                <br></br>
                    <Container fluid="sm" >
                        <Carousel>
                        </Carousel>
                    </Container>
                <br></br>
                <br></br>
                    <Container fluid="lg" >
                        <Row xs={1} md={3} lg={3}>
                            <Col>
                                <Card1></Card1>
                            </Col>
                            <Col>
                                <Card2></Card2>
                            </Col>
                            <Col>
                                <Card3></Card3>
                            </Col>
                        </Row>
                    <br></br>
                    <br></br>
                        <Row xs={1} md={1} lg={5}>
                            <Col>
                                <Card4></Card4>
                            </Col>
                            <Col>
                                <Card5></Card5>
                            </Col>
                            <Col>
                                <Card6></Card6>
                            </Col>
                            <Col>
                                <Card6></Card6>
                            </Col>
                            <Col>
                                <Card7></Card7>
                            </Col>
                        </Row>
                    </Container>
                <br></br>
        </body>

    )  
        
}

export default paginaIniziale;