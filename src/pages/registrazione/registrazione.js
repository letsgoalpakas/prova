import { React, useState} from "react";
// eslint-disable-next-line
import registrazione from './registrazione.css';
// eslint-disable-next-line
import Navbar from '../../components/navbar_utente';
import { Jumbotron } from "reactstrap";
import crypto from 'crypto';

function Registrazione(){


  const [nome, setNome] = useState("");
  const [cognome, setCognome] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [numeroDiTelefono, setNumeroDiTelefono] = useState("");
  const [dataNascita, setDataNascita] = useState("");
  const [luogoNascita, setLuogoNascita] = useState("");
  const [numeroPatente, setNumeroPatente] = useState("");
  const [tipologiaPatente, setTipologiaPatente] = useState("");
  const [codiceIdDipendente, setCodiceIdDipendente] = useState("");

  
  const valida = () => {
 

   var confermaPassword = document.invio.confermaPassword.value;
  
   
    // eslint-disable-next-line
    if ((nome == "") || (nome == "undefined")) {
        alert("Devi inserire un nome!");
        document.invio.nome.focus();
        return false;
    }

   
    // eslint-disable-next-line
    if ((cognome == "") || (cognome == "undefined")) {
    alert("Devi inserire un cognome!");
    document.invio.cognome.focus();
    return false;
    }

    // Espressione regolare dell'email
    var email_valid = /^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-]{2,})+.)+([a-zA-Z0-9]{2,})+$/;
    // eslint-disable-next-line
    if (!email_valid.test(email) || (email == "") || (email == "undefined")) 
    {
        alert("Devi inserire un indirizzo mail corretto");
        document.invio.email.focus();
        return false;
    }

    //check del luogo di nascita
    // eslint-disable-next-line
    if ((luogoNascita == "") || (luogoNascita == "undefined")) {
      alert("Devi inserire un luogo di nascita!");
      document.invio.luogoNascita.focus();
      return false;
    }

    //check della password
    // eslint-disable-next-line
    if ((password == "") || (password == "undefined") ) 
    {
      alert("Scegli una password, minimo 6 caratteri");
      document.invio.password.focus();
      return false;
    }

    //Effettua il controllo sul campo CONFERMA PASSWORD
    // eslint-disable-next-line
    if ((confermaPassword == "") || (confermaPassword == "undefined")) {
      alert("Devi confermare la password");
      document.invio.confermaPassword.focus();
      return false;
    }
    if (password !== confermaPassword) {
        alert("Le password non corrispondono!");
        document.invio.confermaPassword.value = "";
        document.invio.confermaPassword.focus();
        return false;
    }

    //check del numero di telefono
    const phonePattern = /^(\((00|\+)39\)|(00|\+)39)?(38[890]|34[7-90]|36[680]|33[3-90]|32[89]|39[0-90])\d{7}$/gm;
    // eslint-disable-next-line
    if ((numeroDiTelefono == "") || numeroDiTelefono == "undefined" || !phonePattern.test(numeroDiTelefono)) {
      alert("Devi inserire il telefono, attenzione deve essere numerico e/o rispettare il pattern!");
      document.invio.cellulare.value = "";
      document.invio.cellulare.focus();
      return false;
    }

    //check del data di nascita
    // eslint-disable-next-line
     if ((dataNascita == "") || (dataNascita == "undefined")) {
      alert("Devi inserire una data di nascita!");
      document.invio.dataDiNascita.focus();
      return false;
    } 
     
    const tipologiaPatentePattern = /^(A(M|1)?\-)?(B(1|E)?\-)?(C(1|E|1E)?\-)?(D(1|E|1E)?\-)?$/;
    if(!tipologiaPatentePattern.test(tipologiaPatente)){
      alert("Devi inserire la tipologia patente del formato corretto, in ordine di lettera (A-B-C-D)");
      document.invio.tipologiaPatente.focus();
      document.invio.tipologiaPatente.value = "";
      return false;
    }
    
    //check dei dati della patente 
    // eslint-disable-next-line
    if(numeroPatente != "" && tipologiaPatente == "" ){
      alert("Devi inserire la tipologia della patente!");
      document.invio.tipologiaPatente.focus();
      return false;
    }

      // eslint-disable-next-line
    if(numeroPatente == "" && tipologiaPatente != ""){
      alert("Devi inserire il numero di patente!");
      document.invio.numeroPatente.focus();
      return false;
    }
    
    
    //check del numero della patente 
    const numeroPatentePattern = /^[A-Z]{2}[0-9]{7}[A-Z]{1}$/gm;
    // eslint-disable-next-line
    if( !numeroPatentePattern.test(numeroPatente) && !numeroPatente == ""){
      alert("Devi inserire il numero patente nel formato corretto!");
      document.invio.numeroPatente.focus();
      document.invio.numeroPatente.value = "";
      return false;
    }

    //
    
    const idDipendentePattern = /^[A-Z]{2}[0-9]{2}[A-Z]{1}$/gm;
    // eslint-disable-next-line
    if(!idDipendentePattern.test(codiceIdDipendente) && !codiceIdDipendente == ""){
      alert("Devi inserire il codice dipendente nel formato corretto!");
      document.invio.codiceIdDipendente.focus();
      document.invio.codiceIdDipendente.value = "";
      return false;
    }

    else {
      
      let response = addUserToDB();
      response.then((res)=>{
        res.json()
        .then((json)=>{
          if(json.result){
            alert("Registrato correttamente, effettua il login.");
            window.location = "/login";
          } else {
            alert("Errore nella registrazione. riprova");
          }
        })
      })
      
    }

  }
  

  const addUserToDB = () => {
    console.log(typeof(dataNascita));
    const crypted_password = crypto.createHash('md5').update(password).digest('hex');
  return fetch("/registrazione", {
         method: "post",
         headers: {
           'Accept': 'application/json',
           'Content-Type': 'application/json'
         },
         body:JSON.stringify({
           nome: nome,
          cognome: cognome,
          dataNascita: dataNascita,
          luogoNascita: luogoNascita,
          password: crypted_password,
          email: email,
          numeroDiTelefono: numeroDiTelefono,
          numeroPatente: numeroPatente,
          tipologiaPatente: tipologiaPatente,
          codiceIdDipendente: codiceIdDipendente,
         })
       })  
     };


    return (
      

      <body>
        <Navbar/>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <div>
        <br></br>

        <Jumbotron>
    
        <br></br>
          <h1 className="display-3">Let's go by Alpakas</h1>
     
          <p className="lead">Registrati e viaggia con noi.</p>
          <hr className="my-2" />
        </Jumbotron>
        <br></br>
      </div>

  
        <div class="container">
          <div class="title">Registrazione</div>
          <div class="content">
            <form action="#" name="invio">
              <div class="user-details">
                <div class="input-box">
                  <span class="details">* Nome</span>
                  <input type="text" name="nome" onChange={(event) => { setNome(event.target.value);}}  placeholder="Inserisci il tuo nome" required/>
                </div>
                <div class="input-box">
                  <span class="details">* Cognome</span>
                <input type="text" name="cognome" onChange={(event) => {setCognome(event.target.value);}} placeholder="Inserisci il tuo cognome" required/>
                </div>
                <div class="input-box">
                  <span class="details">* Email</span>
                  <input type="text" name="email" onChange={(event) => { setEmail(event.target.value);}} placeholder="Inserisci la tua mail" required/>
                </div>
                <div class="input-box">
                  <span class="details">* Luogo di nascita</span>
                  <input type="text" name= "luogoNascita" onChange={(event) => { setLuogoNascita(event.target.value);}} placeholder="Inserisci il luogo di nascita" required/>
                </div>
                <div class="input-box">
                  <span class="details">* Password</span>
                  <input id="password" type="password" name="password" onChange={(event) => { setPassword(event.target.value);}} placeholder="Inserisci la tua password" required/> 
                  <span style={{color:"gray"}} id="strength">Type Password</span>          
                </div>
                <div class="input-box">
                  <span class="details">* Conferma password</span>
                  <input type="password" name="confermaPassword" placeholder="Conferma la password" required/> 
                </div>
                <div class="input-box">
                  <span class="details">* Cellulare</span> 
                  <input type="text" name="cellulare" onChange={(event) => { setNumeroDiTelefono(event.target.value);}} placeholder="(+39) XXXXXXXXXX" required/>
                </div>
                <div class="input-box">
                  <span class="details">* Data di nascita</span>
                  <input type="date" name= "dataDiNascita" onChange={(event) => { setDataNascita(event.target.value);}} placeholder="Inserisci la data di nascita" required/>
                </div>
                <div class="input-box">
                  <span class="details">Numero Patente</span>
                  <input type="text" name="numeroPatente" onChange ={(event) => {setNumeroPatente(event.target.value);}} placeholder="AA1234567B"/>
                </div>
                <div class="input-box">
                  <span class="details">Tipologie patente</span>
                  <input type="text" name ="tipologiaPatente" onChange ={(event) => {setTipologiaPatente(event.target.value); }} placeholder="patente1-patente2-patente3..." />
                </div>
                <div class="input-box">
                  <span class="details">Codice ID Dipendente</span>
                  <input type="text" name="codiceIdDipendente" onChange ={(event) => {setCodiceIdDipendente(event.target.value); }} placeholder="AZ09A" />
                  <br></br>
                  <br></br>
                  <span style={{color:"gray"}} class="details">I campi contrassegnati con * sono obbligatori</span>
                  <span style={{color:"gray"}} class="details">Se sei un dipendente inserisci anche un codice ID</span>
                  <span style={{color:"gray"}} class="details">Il pattern delle patenti deve essere inserito in ordine letterario e con un trattino alla fine</span>
                  <span style={{color:"gray"}} class="details">ex: A-BE-D- </span>
                </div>
    
              </div>
              <div class="button">
                <input type="button" onClick ={valida} value="Registrati"/>
              </div>
              <br></br>
            </form>
          </div>
        </div>
          <br></br>
          <br></br>

      </body>
    
    );

}


export default Registrazione;



    