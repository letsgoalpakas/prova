import { React, useState, ReactDOM } from "react";
import {withRouter} from 'react-router-dom';
import Navbar from '../../components/navbar_cliente';
import { Jumbotron, Button } from 'reactstrap';
import pagamento from './pagamento.css';

function Pagamento(){

    const logout = () => {
        localStorage.clear();
        window.location = "/";
      };


      
    const [nome, setNome] = useState("");
    const [cognome, setCognome] = useState("");
    const [cvv, setCvv] = useState("");
    const [dataScadenza, setDataScadenza] = useState("");
    const [numeroCarta, setNumeroCarta] = useState("");


    let scelta = JSON.parse(localStorage.getItem("scelta"));

    async function checkScadenza(){
        let cliente = JSON.parse(localStorage.getItem("profile"));
        let di = new Date(localStorage.getItem("DataInizio"));
        let df = new Date(localStorage.getItem("DataFine"));
   
        let response = await fetch("/conferma", {
          method:"post",
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            "x-access-token": localStorage.getItem("token"),
            "x-access-scadenza": localStorage.getItem("scadenza"),
          },
          body:JSON.stringify({
            scelta: scelta,
            datainizio: di,
            datarilascio: df,
            idCliente: cliente._id,
            
          })
      });
      return response;
  };



    const valida = () => {
        
         if (nome === "") {
             alert("Devi inserire un nome");
             
             document.invio.nome.focus();
             return false;
         }

       
         if ((cognome === "")) {
           alert("Inserisci un cognome");
           document.invio.cognome.focus();
           return false;
         }

          const numeroCartaPattern = /^[0-9]{16}$/gm;
         
          if (!numeroCartaPattern.test(numeroCarta) || (numeroCarta === "")) {
            alert("Devi inserire un numero di carta nel formato corretto!");
            document.invio.numeroCarta.focus();
            return false;
          } 

          const cvvPattern = /^[0-9]{3}$/gm;
          
          if (!cvvPattern.test(cvv) || (cvv === "")) {
            alert("Devi inserire un CVV!");
            document.invio.cvv.focus();
            return false;
          } 

        
          if ((dataScadenza === "")) {
            alert("Devi inserire una data di scadenza!");
            document.invio.dataScadenza.focus();
            return false;
          } 

        let r = checkScadenza();
        
        r.then((res)=>{
            res.json()
            .then((json)=>{
                if(json.auth){
                    if(json.result){
                        alert("Ordine completato con successo,  lo troverai nel tuo storico");
                        window.location = "/main";
                    } else {
                        alert("Errore nella conferma dell'ordine, forse è stato prenotato recentemente");
                        window.location = "/main";
                    }
                   
                    
                } else {
                    alert("Sessione scaduta");
                    logout();
                  
                }
            })
        })
        }

    return (
        <body>
         <Navbar></Navbar>
         <br></br>
         <br></br>
         <br></br>
           
        <br></br>
        <br></br>
        <br></br>
         <Jumbotron>
            <h1 className="display-3">Conferma prenotazione</h1>
            <p className="lead">  Effettua il pagamento per terminare la prenotazione.</p>
            <hr className="my-2" />
         </Jumbotron>   
        
        <br></br>
        <br></br>
        <br></br>
          
        <br></br>
        <br></br>
        <br></br>

        <div class="ass">
            <div style={{"text-align":"center"}}>
                <br/>
                <h2>Pagamento</h2>
            </div>
            <div class="row">
                <div class="column">
                    <form name="invio">
                            <label for="fname">Nome intestatario:</label>
                                <input type="text" id="fname" name="nome"  onChange={(event) => { setNome(event.target.value);}} placeholder="Mario" required/>
                            
                            <label for="lname">Cognome intestario:</label>
                                <input type="text" id="lname" name="cognome"  onChange={(event) => { setCognome(event.target.value);}} placeholder="Rossi" required/>
                            
                            <label for="lname">Numero di carta</label>
                                <input type="text" id="lname" name="numeroCarta"  onChange={(event) => { setNumeroCarta(event.target.value);}} placeholder="1111222233334444" required />
                            
                            <label for="oggetto">CVV:</label>
                             <input type="text" id="oggetto"  onChange={(event) => { setCvv(event.target.value);}}name="cvv" placeholder="123" required></input>

                             <select id="tipocarta" name="Tipo carta" style={{"width": "200px"}}>
                                <option value="tipocarta">Tipologia carta</option>
                                <option  value="maestro">Maestro</option>
                                <option  value="visa">Visa</option>
                                <option  value="email">Mastercard</option>
                                <option value="email">American Express</option>
                            </select>

                            <br/>
                            <br/>

                            <div class="input-box">
                                <span class="details">* Data di scadenza</span>
                                <input type="date" name= "dataScadenza" onChange={(event) => { setDataScadenza(event.target.value);}} placeholder="Inserisci la data di scadenza" required/>
                            </div> 

                            <br/>
                            
                            
                    </form> 
                    <button  style = {{"margin-left": "40px"}} type="button" class="btn btn-primary" onClick={valida}>Paga</button>   
                </div>
            </div>
        </div>

        <br></br>
        </body> 
    )
}

export default withRouter(Pagamento);