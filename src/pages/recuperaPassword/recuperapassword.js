import {React, useState} from 'react';
import Navbar from '../../components/navbar_utente';
import {Jumbotron } from 'reactstrap';
import crypto from 'crypto';

function RecuperaPassword(){
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confermapassword, setConfermaPassword] = useState("");
    const [codice, setOTP] = useState("");

    
    
    const valida = () =>{
        // Espressione regolare dell'email
        var email_valid = /^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-]{2,})+.)+([a-zA-Z0-9]{2,})+$/;
        // eslint-disable-next-line
        if (!email_valid.test(email) || (email === "")) 
        {
            alert("Devi inserire un indirizzo mail corretto");
            document.invio.email.focus();
            return false;
        }
        
       
            let response = getOTP();
            response.then((res)=>{
                
                res.json()
                .then((json)=>{
                    
                    if(json.result){
                        alert("Codice inviato correttamente,  lo troverai nella tua posta elettronica, inserisci una nuova password");      
                    } 
                    
                    else {
                        alert("Errore nell'invio del codice! Ricompila il form!");
                        window.location = "/recuperapassword";
                      
                    }
                })
            })
            
             
        
    }

    const validapassword = () =>{
        
        if ((password === "") || password.length < 6) 
        {
        alert("Scegli una password, minimo 6 caratteri");
        document.invio.password.focus();
        return false;
        }

       
        if ((confermapassword === "")) {
        alert("Devi confermare la password");
        document.invio.confermapassword.focus();
        return false;
    }
        if (password !== confermapassword) {
            alert("Le password non corrispondono!");
            document.invio.confermapassword.value = "";
            document.invio.confermapassword.focus();
            return false;
        }

          let response = changePassword();     
            response.then((res)=>{
                res.json()
                .then((json)=>{
                    if(json.auth){
                        alert("Password modificata correttamente!");
                        window.location = "/login";
                    } else {
                        alert("Modifica password non andata a buon fine, riprovare");
                        window.location = "/recuperapassword";

                    }
                })
            })
            
        
    }

    async function getOTP(){
       
        let isDipendente = document.getElementById("cb").checked;
        
        let response = await fetch("/recuperopassword", {
          method:"post",
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body:JSON.stringify({
            email: email,
            isDipendente: isDipendente,
          })
        });
        return response;
    }

    async function changePassword(){
        let isDipendente = document.getElementById("cb").checked;
        const crypted_password = crypto.createHash('md5').update(password).digest('hex');

        let r = await fetch("/changepassword", {
          method:"post",
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body:JSON.stringify({
            email: email,
            password: crypted_password,
            isDipendente: isDipendente,
            codice: codice,

          })
        });
        return r;         
    } 
    
   
    
    return ( 
        <body>
            <Navbar/>
            <br></br>
		    <br></br>
            <br></br>
            <br></br>
            <br></br>
            
            <Jumbotron>
            <div class="title">Recupero Password</div>
            <p className="lead">Se non ricordi la tua password puoi resettarla inserendo il tuo indirizzo email.</p>
            <hr className="my-2" />
            <p>Ti verrà poi mandato un codice per recuperare la tua password</p>
            <br></br>
            <br></br>
            </Jumbotron>
            <br></br>
            <br></br>
            <div class="container">
                <br></br>
                    <form method="post" action="#" name="invio">

                   
                    <h2>Recupero Password</h2>
                    
                    
                  
                        <label style={{"margin-left":"20px"}}>Email: </label>
                    <input type="text" id="email" name="email" style={{"width":"400px"}} placeholder="inserisci email" onChange={(event) => { setEmail(event.target.value);}} title="email" />

                      
                        <br></br>
                       
                        <label style={{"margin-left":"20px"}}>Codice OTP: </label>
                        <input type="text" style={{"width":"200px", "margin-left":"8px"}} id="codice" name="codice" placeholder="otp code" onChange={(event) => { setOTP(event.target.value);}}title="Password Token" />

                        <label style={{"margin-left":"20px"}}>Nuova password: </label>
                        <input type="password" style={{"width":"200px", "margin-left":"8px"}}  id="password" name="password" onChange={(event) => { setPassword(event.target.value);}} title="New password" />
              
                      
                        <label style={{"margin-left":"20px"}}>Conferma password: </label>
                        <input type="password" style={{"width":"200px", "margin-left":"8px"}}  id="confermapassword" name="confermapassword" onChange={(event) => { setConfermaPassword(event.target.value);}}title="Confirm new password" />
                   

                        
                        <div class="checkbox">
                        <input style={{"margin-left":"20px"}} type="checkbox" id="cb"/>
                        <label style={{"margin-left":"7px"}}> Dipendente? </label>
                         </div>
                    <br></br>
                    </form>
                    <div>
                        <button style={{"margin-left":"20px"}} type="button" class="btn btn-primary" onClick={valida}>Ricevi OTP</button>
                   
                    <button style={{"margin-left":"20px"}} type="button" class="btn btn-primary" onClick={validapassword}>Invia nuova password </button>
                    </div>
                    
                <br></br>
            </div>
            
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

export default RecuperaPassword;