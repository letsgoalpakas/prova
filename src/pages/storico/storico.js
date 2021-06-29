import React from 'react';
import Navbar from '../../components/navbar_cliente';
import {withRouter} from 'react-router-dom';
import { Jumbotron } from 'reactstrap';



function Storico(){

    let profilo = JSON.parse(localStorage.getItem("profile"));

    const logout = () => {
        localStorage.clear();
        window.location = "/";
    }

    async function getProfile(){
        let c = JSON.parse(localStorage.getItem("profile"));
        let response = fetch("/getCliente",{
        method: "post",
        headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                "x-access-token": localStorage.getItem("token"),
        },
        body:JSON.stringify({
                idcliente: c._id,
        })

        })


        return response;
    }

    const stampaOrdine = () => {
        let r = getProfile();

        r.then((res)=>{
            res.json()
            .then((json)=>{
                if(json.auth){
                   
                    let c = JSON.stringify(json.profile);
                  
                    localStorage.setItem("profile", c);


                    let container = document.getElementById("ordine");
                    

                    let profilo = JSON.parse(localStorage.getItem("profile"));
                
                    let ordini = profilo.ordini;
                   
            for(let i = 0; i < ordini.length; ++i){ 
                        let ord = document.createElement('ord');
                        
            
            if(ordini[i].mezzo=="Tassista"){
                
                ord.innerHTML += "<div class='container' >" +
                    "<h2>SERVIZIO TASSISTA</h2>"+
                    "<p>Data di ritiro: " + ordini[i].datainizio + "</p>"+
                    "<p>Data di rilascio: " + ordini[i].datafine + "</p>"+
                    "<p>Stato ordine: " + ordini[i].stato.toUpperCase() + "</p>"+
                    "</div><br></br>"
        
                     container.insertBefore(ord, container.firstChild);
            } else {
                
                    ord.innerHTML += "<div class='container'>" +
                    "<h2>SERVIZIO AUTONOMO</h2>"+
                    "<p>Data di ritiro: " + ordini[i].datainizio + "</p>"+
                    "<p>Data di rilascio: " + ordini[i].datafine + "</p>"+
                    "<p>Tipo: " + ordini[i].mezzo.tipo + "</p>"+
                    "<p>Modello: " + ordini[i].mezzo.modello + "</p>"+
                    "<p>Stallo: " + ordini[i].mezzo.stallo + "</p>"+
                    "<p>Stato ordine: " + ordini[i].stato.toUpperCase() + "</p>"+
                    "</div><br></br>"
        
                     container.insertBefore(ord, container.firstChild);
        
                
            }

            
                       
                   
     }
            

    }
  })
 })
       
}

    window.onload = function () {
        stampaOrdine();
    }

    return (

        <body>
            <Navbar></Navbar>
                <br></br>
                <br></br>
                <br></br>
            <div style={{"margin":"14px", "display":"flex"}}>
            <Jumbotron>
                <h1 className="display-3">STORICO ORDINI</h1>
                <p className="lead">
                Di seguito sono elencati tutti gli ordini effettuati:
                </p>
                <hr className="my-2" />
            </Jumbotron>
            </div>
            <br></br>
                    <div id="ordine"></div>
            
                    <br></br>
                    <br></br>
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

export default withRouter(Storico);

