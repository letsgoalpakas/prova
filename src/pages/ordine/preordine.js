import React from 'react';
import {withRouter} from 'react-router-dom';
import Navbar from '../../components/navbar_cliente';
import { Jumbotron} from "reactstrap";
import { Row, Col } from 'reactstrap';
function PreOrdine(){

    const redirectToAutonomo = () => {
        window.location = "/ordine";
    }

    const redirectToTaxi = () => {
        window.location = "/tassista";
    }
    
    return (
       
        <body>
           <Navbar/> 
            <br></br>
           <br></br>
           
        
          
           <div style={{ margin: "14px", display: "flex" }}>
            <Jumbotron>
                <h1 className="display-3">INIZIO PRENOTAZIONE</h1>
                <p className="lead">
                Scegli il tipo di servizio di cui vuoi usufruire:
                </p>
                <hr className="my-2" />
            </Jumbotron>
            </div>
           <br></br>
           <br></br>


       
        
        <Row>
            <Col>
            </Col>
            <Col>
                <div style={{"justify-content": "center","text-align": "center"}}>
                    <h3 style={{"color":"white", "text-shadow": "-1px 0 #000, 0 1px #000, 1px 0 #000, 0 -1px #000"}}>Servizio Autonomo</h3>
                    <button onClick={redirectToAutonomo} style={{"width": "100%", "height":"150px", "background-image": "url('https://www.bable-smartcities.eu/fileadmin/user_upload/ext/nd_solutions/img/170907_icons_spot_update_withoutcircles_Vehicle_Sharing_System.png')" ,"background-size":"contain",  "background-position": "center", "background-repeat": "no-repeat" }} > </button>
                </div> 

            </Col>
            <Col>
                <div style={{"justify-content": "center", "text-align": "center"}}>
                    <h3 style={{"color":"white", "text-shadow": "-1px 0 #000, 0 1px #000, 1px 0 #000, 0 -1px #000"}}>Servizio Taxi</h3>
                    <button onClick={redirectToTaxi} style={{"width": "100%", "height":"150px", "background-image": "url('https://creazilla-store.fra1.digitaloceanspaces.com/emojis/47423/oncoming-taxi-emoji-clipart-md.png')", "background-size":"contain",  "background-position": "center", "background-repeat": "no-repeat"}}></button>
                </div>       
            </Col>
            <Col>
            </Col>
        </Row>

   


            
           
                

      
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
        </body>
    )
}

export default withRouter(PreOrdine);