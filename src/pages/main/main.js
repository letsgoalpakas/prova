import React from 'react';
import {withRouter} from 'react-router-dom';
import Navbar from '../../components/navbar_cliente';
import Cards from '../../components/card_main';
import { Jumbotron, Container,Row, Col} from 'reactstrap'
// eslint-disable-next-line

 function Main(){
     
    return (
        <body>
           <br></br>
           <br></br>
            <Navbar></Navbar>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        
                <div>
                <br></br>
           
                 <Jumbotron fluid>
                   <Container fluid>
                   <br></br>
           <br></br>
           <br></br>
           <br></br>

                   <h1 className="display-3">Bentornat*</h1>
                    <p className="lead">Scopri la città con noi!</p>
                    </Container>
                   </Jumbotron>
                </div>  
                     <Cards></Cards>  
                <br></br>
                <br></br>

                <div>
                 <Jumbotron fluid>
                   <Container fluid>
                   <h1 className="display-3">Scopri i nostri servizi</h1>
                    <p className="lead">Scopri la città con noi!</p>
                    </Container>
                   </Jumbotron>
                </div>   
                <Row>

                <Col>
                <img class="circular" src="../../assets/images/chiavi.jpg" alt= "Tassista"  /> 
                 </Col>

                <Col>
                <img class="circular" src="../../assets/images/chiavi.jpg" alt= "Auto"  />  
                </Col>

                 <Col>
                 <img class="circular" src="../../assets/images/chiavi.jpg" alt= "Moto"  />
                </Col> 

                <Col>
                <img class="circular" src="../../assets/images/chiavi.jpg" alt= "Bici"  /> 
                </Col>
        
                <Col>
                 <img class="circular" src="../../assets/images/chiavi.jpg" alt= "Monopattino"  />   
                </Col> 

      </Row>
                        <br></br>
            </body>
    );

 }

export default withRouter(Main);
