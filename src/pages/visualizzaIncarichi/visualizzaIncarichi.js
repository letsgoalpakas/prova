import { React} from 'react';
import Navbar from '../../components/navbar_dipendente';
import {withRouter} from 'react-router-dom';
import {Col, Jumbotron } from 'reactstrap';
 
const Incarichi = () => {
    
    const logout = () => {
        localStorage.clear();
        window.location = "/";
    }

    
    async function getIncarichi() {
        let response = await fetch("/getIncarichi", {
            method: "get",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                "x-access-token": localStorage.getItem("token"),
            },
        });
        return response;
    };

  async function setOccupato(n){
        let newIncarico = JSON.parse(localStorage.getItem("incarichi"));
        let o = newIncarico[n];

        let dipendente = JSON.parse(localStorage.getItem("profile"));
        let response = await fetch("/dipendenteoccupato",{
                method: "post",
                headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json',
                  "x-access-token": localStorage.getItem("token"),
                },
                body:JSON.stringify({
                idDipendente: dipendente._id,
                incarico: o,
                })   
        })
        return response;
    };


    async function getAssistenza(n){
        let newIncarico = JSON.parse(localStorage.getItem("incarichi"));
        let o = newIncarico[n];

        let dipendente = JSON.parse(localStorage.getItem("profile"));
        let response = await fetch("/assistenteoccupato",{
                method: "post",
                headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json',
                  "x-access-token": localStorage.getItem("token"),
                },
                body:JSON.stringify({
                 idDipendente: dipendente._id,
                 incarico: o,
                })   
        })
        return response;
    };

    
    const checkIncarico = (n) => {
        let dipendente = JSON.parse(localStorage.getItem("profile"));
        let response;
        if(!dipendente.occupato){
        if( dipendente.ruolo === "Assistenza" || dipendente.ruolo === "assistenza" ){
             response = getAssistenza(n);
        }
        else{
             response = setOccupato(n);
        }
    
            response.then((res)=>{
            res.json()
            .then((json)=>{
               
                if (json.auth){
                    if(json.result){
                    let risultato = JSON.stringify(json);
                    localStorage.setItem("occupato", risultato);
                    } else {
                        alert("Errore");
                        window.location = "/visualizzaIncarichi";   
                    }
                    
                } else {
                    alert("sessione scaduta, fai di nuovo l'accesso");
                    logout();
                }
            
            let ris = JSON.parse(localStorage.getItem("occupato"));
                //Un dipendente con ruolo Assistenza non viene mai occupato nel DB, può continuare a rispondere agli incarichi
            if(ris.dipendente.occupato === false && (dipendente.ruolo === "Assistenza" || dipendente.ruolo === "assistenza") )
            {   
                alert("Incarico accettato!");
                window.location = "/visualizzaIncarichi";   
                   
            }
            else if(ris.dipendente.occupato === true && (dipendente.ruolo !== "Assistenza" || dipendente.ruolo !== "assistenza"))
            {
                window.location = "/notificadipendente";
            } 
            else {
                alert("Errore nell'accettazione dell'incarico, riprova e controlla nella tua pagina di notifica");
                window.location = "/visualizzaIncarichi";      
            }
        })
    })
} else {
    alert("Errore nell'accettazione dell'incarico, prova a visitare la pagina di notifica");
    window.location = "/visualizzaIncarichi";   
}
}


    
    const stampaIncarichi = () => {
        let response = getIncarichi();
        
        response.then((res)=>{
            res.json()
            .then((json)=>{
                
                if (json.auth){
                   
                    if(json.result){
                    let ob = JSON.stringify(json.incarichi);
                    localStorage.setItem("incarichi", ob);
                    } else {
                        alert("Errore nella ricezione degli incarichi");
                        window.location = "/visualizzaIncarichi";
                    }
                    
                } else {
                    alert("Sessione scaduta");
                    logout();
                }
                

                let newIncarico = JSON.parse(localStorage.getItem("incarichi"));
                console.log(newIncarico);
                let a = document.getElementById("myDIV");
               
        
                for(let i = 0 ; i< newIncarico.length; ++i){
                    let bar = document.createElement('bar');

          

                    //stampo solo gli incarichi compatibili col ruolo del dipendente che ha effettuato l'accesso
                    let dip = JSON.parse(localStorage.getItem("profile"));
                    if(dip.ruolo != "assistenza"){
                     
                        if(newIncarico[i].tipoServizio === "taxi"){
                            
                            bar.innerHTML += 
                            "<div class='container' style='position: center, margin-left:27px, margin:auto '>" +
                            "<div class='card-body'> <ul> " + 
                            "<h5 class='card-title'> " + newIncarico[i].tipoServizio + " </h5>" + 
                            "<li> <p class='card-text'>Data di ritiro: "+ newIncarico[i].dataRitiro + " </li> </p>" +
                            "<li> <p class='card-text'>Descrizione: "+ newIncarico[i].descrizione + " </li> </p>" +
                            "</ul> </div>" +
                            "</div><br></br>";
              
                        } else if(newIncarico[i].tipoServizio === "sposta mezzo"){


                            bar.innerHTML += 
                            "<div class='container' style='position: center, margin-left:27px, margin:auto '>" +
                            "<div class='card-body'> <ul> " + 
                            "<h5 class='card-title'> " + newIncarico[i].tipoServizio + " </h5>" + 
                            "<li> <p class='card-text'>Descrizione: "+ newIncarico[i].descrizione + " </li> </p>" +
                            "</ul> </div>" +
                            "</div><br></br>";

                        }
                      
                    } else {
                        
                        if(newIncarico[i].tipoServizio === "assistenza" || newIncarico[i].tipoServizio === "Assistenza"){
                            bar.innerHTML += 
                            "<div class='container' style='position: center, margin-left:27px, margin:auto '>" +
                            "<div class='card-body'> <ul> " + 
                            "<h5 class='card-title'> " + newIncarico[i].tipoServizio + " </h5>" + 
                            "<li> <p class='card-text'>Problema: " + newIncarico[i].descrizione  + " </li> </p>" + 
                            "<li> <p class='card-text'>email: " + newIncarico[i].email  + " </li> </p>" +
                            "</ul> </div>" +
                            "</div><br></br>";
                        }

                    }
                 
                    a.insertBefore(bar,  a.firstChild);
                   
                        bar.onclick = function () {
                            checkIncarico(i);
                        };
                      
                    }
            });
   
            });
    }
        
     window.onload = function() {
        stampaIncarichi(); 
        };

    return(
        <body>
            <Navbar></Navbar>
            <br></br>
		    <br></br>
		    <br></br>
            <br></br>
            <br></br>
            <Jumbotron>
            <h1 className="display-3">Visualizza incarichi</h1>
             </Jumbotron>
       
      
            <Col>
            <div  id="myDIV">
            </div>
            </Col>
        
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
        
    );
}

export default withRouter(Incarichi);