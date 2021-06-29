import {React, useState} from 'react';
import {withRouter} from 'react-router-dom';
import Navbar from '../../components/navbar_cliente';
import { Row,Col, Input,Label,Form, Button , Jumbotron} from 'reactstrap';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Tassista = () => {

    //descrizione corrisponde a luogo di ritiro ed altre utili informazioni
    const [descrizione, setDescrizione] = useState("");
    const [dataRitiro, setdataRitiro] = useState(new Date());
    const [cellulare, setCellulare] = useState("");

    const controllo = () => {
      
      if ((descrizione === "")) {
        alert("Devi inserire un luogo di ritito!");
        document.invio.descrizione.value = "";
        document.invio.descrizione.focus();
        return false;
    }
      const phonePattern = /^(\((00|\+)39\)|(00|\+)39)?(38[890]|34[7-90]|36[680]|33[3-90]|32[89]|39[0-90])\d{7}$/gm;
      
      if ((cellulare === "") || !phonePattern.test(cellulare)) {
        alert("Devi inserire il telefono, attenzione deve essere numerico e/o rispettare il pattern!");
        document.invio.cellulare.value = "";
        document.invio.cellulare.focus();
        return false;
      }

    let dattuale = new Date();
    if ((dataRitiro === "") || dataRitiro < dattuale) {
        alert("Devi inserire una data di ritiro corretta");
        document.invio.dataRitiro.focus();
        return false;
    }
    

    
      document.invio.action = "#"; 
      let response = addToDB();
      response.then((res)=>{
        res.json()
        .then((json)=>{
          if(json.result){
            alert("Ordine inviato, da confermare");
            let ob = JSON.stringify(json.scelta);
            localStorage.setItem("scelta", ob);
            window.location = "/main";
          } else {
            alert("Errore nella nella conferma dell'ordine. Riprova!");
          }
        })
      })
    

    }
    
    const addToDB = () => {
      let cliente = JSON.parse(localStorage.getItem("profile"));
        return fetch("/ordinetassista", {
               method: "post",
               headers: {
                 'Accept': 'application/json',
                 'Content-Type': 'application/json',
                 "x-access-token": localStorage.getItem("token"),
               },
               body:JSON.stringify({
                tipoServizio: "taxi",
                descrizione: descrizione + "   Contatto: " + cellulare,
                stato: "in attesa di conferma",
                dataRitiro: dataRitiro,
                idCliente: cliente._id,
               })
             })  
           };

    return (

        <body>
        <Navbar/>
        <br></br>
        <br></br>
        <br></br>	
        <h1  style = {{"margin-left": "40px"}}>Servizio Taxi</h1>
        <br></br>
        	
        <Form action="#" name="invio" style = {{"margin-left": "40px"}}>
	<Row >  
  
        <Col>      
          <Label for="example">Luogo di ritiro </Label>
          <Input type="text" name="descrizione" id="descrizione" onChange={(event) => { setDescrizione(event.target.value);}}placeholder="Inserisci via " />
          <Label for="example">Numero di telefono </Label>
          <Input type="text" name="cellulare" id="cellulare" onChange={(event) => { setCellulare(event.target.value);}} placeholder="Inserisci numero di telefono" />
          <div class="card" style={{ "width": "350px", "height":"200px"}}>
                <article class="card-group-item">
                    <header class="card-header">
                        <h6 class="title">Data e orario di ritiro</h6>
                    </header>
                    <div class="filter-content">
                        <div class="card-body" >
                        <DatePicker name="dataRitiro" selected={dataRitiro}  onChange={(date) => setdataRitiro(date)} showTimeSelect dateFormat="Pp"/>
                        </div> 
                    </div>	
			        	</article>
			    </div>
            <br></br>
        </Col>

        <Col>
        						
	      </Col>	
  </Row>	
  </Form>		
    <Button type="submit" style={{"align-items" : "center", "margin-left":"40px"}} onClick={controllo} color="primary" size="lg">Conferma</Button>	
        </body>
    );
}

export default withRouter(Tassista);