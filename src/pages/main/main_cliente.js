import React from 'react';
import {withRouter} from 'react-router-dom';
// eslint-disable-next-line
import Carousel from '../../components/carousel';
import Navbar from '../../components/navbar_cliente';
import { Jumbotron, Container,Row, Col} from 'reactstrap';
import massimo from '../../assets/images/massimo.jpg';

// eslint-disable-next-line

 function Main(){
     
    return (
        <body>
            <Navbar></Navbar>
                        <br></br>
                        <br></br>
                <div>
                  <Jumbotron fluid>
                     <Container fluid >
                      <h1 className="display-3" >Bentornat*</h1>
                        <p className="lead">Scopri la città con noi!</p>
                     </Container>
                  </Jumbotron>
                </div>  
                      
                <br></br>
                <br></br>

                 
                <br></br>
         <Row >
               <Col>
               </Col>
               <Col >
                  <img class="circular" src={massimo} alt= "Tassista"/> 
               </Col> 
               <Col>
               </Col>   
         </Row>
         <br></br>
         <br></br>
         <br></br><br></br>
         <br></br>
         <br></br>

                        <br></br>
            </body>
    );

 }

export default withRouter(Main);
