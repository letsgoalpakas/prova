import React from 'react';
import {withRouter} from 'react-router-dom';
import Navbar from '../../components/navbar_cliente';
import {Row, Col} from 'reactstrap';
import { Jumbotron, Button, Container } from 'reactstrap';

function Riepilogo(){

  const logout = () => {
    localStorage.clear();
    window.location = "/";
}

  const backToOrdine = () => {
    window.location = "/ordine";
  }

  const redirectToPagamento = () => {

    window.location = "/pagamento";
          
  }



    let scelta = JSON.parse(localStorage.getItem("scelta"));
    
   
    let price;

    const calcolaPrezzo = () => {
      
      let inizio = localStorage.getItem("DataInizio");
      let fine = localStorage.getItem("DataFine");
      let di = new Date(inizio);
      let df = new Date(fine);
      
      let differenzamilli = Math.abs(di - df);
  
      let diffDays = (differenzamilli)/(1000 * 60 * 60 * 24); 
     
      let differenzaore = (differenzamilli) / (1000 * 60 * 60);
        
  
      if(diffDays<1){
        // eslint-disable-next-line
        if(scelta.tipo == "Auto"){
            // eslint-disable-next-line
            if(scelta.fasciaPrezzo == "Alta"){
                price = 50*differenzaore;
            }
            // eslint-disable-next-line
            else if(scelta.fasciaPrezzo == "Media"){
                price = 20*differenzaore;
            }
            // eslint-disable-next-line
            else if(scelta.fasciaPrezzo == "Bassa"){
                price = 15*differenzaore;
          }
  
        }
              // eslint-disable-next-line
          else if (scelta.tipo == "Moto"){
              // eslint-disable-next-line
              if(scelta.fasciaPrezzo == "Alta"){
                  price = 8*differenzaore;
              }// eslint-disable-next-line
              else if(scelta.fasciaPrezzo == "Media"){
                  price = 6*differenzaore;
              }// eslint-disable-next-line
              else if(scelta.fasciaPrezzo == "Bassa"){
                  price = 5*differenzaore;
              }
           }
            // eslint-disable-next-line
          else if(scelta.tipo == "Bicicletta"){
            // eslint-disable-next-line
            if(scelta.fasciaPrezzo == "Alta"){
              price = 4*differenzaore;
              }
            // eslint-disable-next-line
            else if(scelta.fasciaPrezzo == "Media"){
              price = 3*differenzaore;
              }
            // eslint-disable-next-line
            else if(scelta.fasciaPrezzo == "Bassa"){
              price = 2*differenzaore;
              }
          }
        // eslint-disable-next-line
        else if(scelta.tipo == "Monopattino"){
                  // eslint-disable-next-line
                  if(scelta.fasciaPrezzo == "Alta"){
                  price = 5*differenzaore;
                  }
                  // eslint-disable-next-line
                  else if(scelta.fasciaPrezzo == "Media"){
                  price = 4*differenzaore;
                  }
                  // eslint-disable-next-line
                  else if(scelta.fasciaPrezzo == "Bassa"){
                  price = 3*differenzaore;
                  }
          }
          costruisciScontrino();
      }
  
      //La prenotazione dura almeno un giorno
      else{
        // eslint-disable-next-line
        if(scelta.tipo == "Auto"){
          // eslint-disable-next-line
          if(scelta.fasciaPrezzo == "Alta"){
              price = Math.ceil(300*diffDays);
          }
          // eslint-disable-next-line
          else if(scelta.fasciaPrezzo == "Media"){
              price = Math.ceil(90*diffDays);
          }
          // eslint-disable-next-line
          else if(scelta.fasciaPrezzo == "Bassa"){
              price = Math.ceil(70*diffDays);
        }
  }
          // eslint-disable-next-line
          else if (scelta.tipo == "Moto"){
              // eslint-disable-next-line
              if(scelta.fasciaPrezzo == "Alta"){
                  price = Math.ceil(40*diffDays);
              }
              // eslint-disable-next-line
              else if(scelta.fasciaPrezzo == "Media"){
                  price = Math.ceil(30*diffDays);
              }
              // eslint-disable-next-line
              else if(scelta.fasciaPrezzo == "Bassa"){
                  price = Math.ceil(25*diffDays);
              }
           }
          // eslint-disable-next-line
          else if(scelta.tipo == "Bicicletta"){
            // eslint-disable-next-line
            if(scelta.fasciaPrezzo == "Alta"){
              price = Math.ceil(14*diffDays);
            }
            // eslint-disable-next-line
            else if(scelta.fasciaPrezzo == "Media"){
              price = Math.ceil(8*diffDays);
            }
            // eslint-disable-next-line
            else if(scelta.fasciaPrezzo == "Bassa"){
              price = Math.ceil(6*diffDays);
            }
          }
          // eslint-disable-next-line
          else if(scelta.tipo == "Monopattino"){
                  // eslint-disable-next-line
                  if(scelta.fasciaPrezzo == "Alta"){
                  price = Math.ceil(25*diffDays);
                }
                  // eslint-disable-next-line
                  else if(scelta.fasciaPrezzo == "Media"){
                  price = Math.ceil(18*diffDays);
                }
                  // eslint-disable-next-line
                  else if(scelta.fasciaPrezzo == "Bassa"){
                  price = Math.ceil(10*diffDays);
                }
          }
          costruisciScontrino();
      }
  
     
      }





    async function isStillAvailable(){
     let response = await fetch("/riepilogo", {
            method:"post",
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
              "x-access-token": localStorage.getItem("token"),
            },
            body:JSON.stringify({
              scelta: scelta._id,
            })
     });
     
     return response;
    };



    



    const scontrino = () => { 

      let scontrino = isStillAvailable();
      
      scontrino.then((res)=>{
          res.json()
          .then((json)=>{
            console.log(json);
            
          if(json.auth){
             // eslint-disable-next-line
            if(json.result == true){
              
                localStorage.setItem("scadenza", json.scadenza);
                calcolaPrezzo();
            }
            // eslint-disable-next-line
            else {
              
              alert("Il mezzo è stato prenotato durante il tuo tentativo, ci dispiace");
              window.location = "/ordine";
              
            }
          } else {
            alert("Sessione scaduta");
            logout();
          }
       
        })
      })
    }

    
    const costruzione = () => {
  
        let a = document.getElementById("mydiv");
       
        let stallo = localStorage.getItem("stallo");
    
        let foo = document.createElement('foo');

        foo.innerHTML += 
                "<div class='card' style='position: center, margin-left:27px, margin-right:6px ;'>" +
								"<img src='"+ scelta.link + "' width='450' height='450' padding:'17px' class='card-img-top' alt='...'>" + 
								"<div class='card-body'> <ul> " + 
								"<h5 class='card-title'> " + scelta.modello + " </h5>" + 
								"<li> <p class='card-text'>Posti: " + scelta.posti + " </li> </p>" + 
								"<li> <p class='card-text'>Stallo: " + stallo + "</li> </p>" + 
								"<li> <p class='card-text'>Marchio: " + scelta.marchio + "</li> </p>" + 
								"<li> <p class='card-text'>Occupato: " + scelta.occupato + "</li> </p>" +
								"</ul> </div> </div><br></br>";

        a.appendChild(foo);
        scontrino();

    }


    const costruisciScontrino = () => {


      let b = document.getElementById("myscontrino");
      let foo = document.createElement('foo');

      foo.innerHTML += 
      "<div class='card' style='position: center, margin-right:6px ;'>" +
      "<div class='card-body'> <ul> " + 
      "<h5 class='card-title'> Scontrino </h5>" + 
      "<li> <p class='card-text'>Fascia di prezzo veicolo: " + scelta.fasciaPrezzo + " </li> </p>" + 
      "<li> <p class='card-text'>Costo: " + Math.floor(price) + "€</li> </p>" + 
      "</ul> </div> </div><br></br>";

      b.appendChild(foo);

    }

    window.onload = function() {
    
        costruzione();
      
        
      };

    
  return (
          
          
          <body>
            <Navbar/>
            <br></br>
            <br></br>
            <div style={{"margin":"14px", "display":"flex"}}>
            <Jumbotron>
                <h1 className="display-3">RIEPILOGO PRENOTAZIONE</h1>
                <p className="lead"></p>
                <hr className="my-2" />
            </Jumbotron>
            </div>
            <br></br>
            
            
           
                
                
        <Row>
            <Col>
            </Col>
            <Col>
                <div  style={{"margin-left":"20px"}} id="mydiv"></div>
            </Col>     
            <Col>
                <div  style={{"margin-left":"10px"}} id="myscontrino"> </div>
                <Row>
                
                     
                     <Button onClick={backToOrdine} color="primary">Indietro</Button>
                    <Button onClick={redirectToPagamento} color="success" >Conferma</Button>

                </Row>
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
            <br></br>
            <br></br>
          
         
         
            


        </body>





    )

       


}

export default withRouter(Riepilogo);













