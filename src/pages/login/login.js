import { React, useState } from "react";
// eslint-disable-next-line
import login from "./login.css";
import Navbar from "../../components/navbar_utente";
import crypto from 'crypto';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  // eslint-disable-next-line
  const [ret, setRet] = useState(false);

  async function check() {
    let isDipendente = document.getElementById("cb").checked;
    const crypted_password = crypto.createHash('md5').update(password).digest('hex');
    let response = await fetch("/login", {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: crypted_password,
        isDipendente: isDipendente,
      }),
    });
    return response;
  }

  async function redirect() {
    return await fetch("/isAuth", {
      method: "get",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "x-access-token": localStorage.getItem("token"),
      },
    });
  }

  const valida = () => {
 
    if (email === "") {
      alert("Devi inserire un indirizzo mail corretto");
      document.invio.email.focus();
      return false;
    }
    
    if (password === "") {
      alert("Inserisci una password");
      document.invio.password.focus();
      return false;
    } else {
      let r = check();
      r.then((respromise) => {
        respromise.json().then((json) => {
          if (json.auth) {
            localStorage.setItem("token", json.token);
            localStorage.setItem("who", json.isDipendente);
            let p = JSON.stringify(json.profile);
            localStorage.setItem("profile", p);
          } else {
            
          }
          let red = redirect();
          red.then((redpromise) => {
            redpromise.json().then((json2) => {
             
              if (!json2.auth) {
                alert("Password sbagliata");
              } else {
                if (localStorage.getItem("who") === "QaWScfwXQk") {
                  window.location = "/main";
                } else {
                  window.location = "/maindip";
                }
              }
              // controlliamo se è un dipendente o un cliente
             
            });
          });
        });
      });
    }
  };

  return (
    <body>
      <Navbar></Navbar>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <div class="wrapper">
        <div class="title"> Login </div>
        <form name="invio" action="#" method="post">
          <div class="field">
            <input
              type="text"
              name="email"
              onChange={(event) => {
                setEmail(event.target.value);
              }}
              required
            />
            <label>Indirizzo Email </label>
          </div>
          <div class="field">
            <input
              type="password"
              name="password"
              onChange={(event) => {
                setPassword(event.target.value);
              }}
              required
            />
            <label>Password</label>
          </div>
          <div class="content">
            <div class="checkbox">
              <input type="checkbox" id="cb" />
              <label> Dipendente? </label>
            </div>
            <div class="pass-link">
              <a href="/recuperapassword">Password dimenticata?</a>
            </div>
          </div>
          <div class="field">
            <input type="button" onClick={valida} value="Login" />
          </div>
          <div class="signup-link">
            Non hai un account?{" "}
            <a href="/registrazione"> Registrati qua </a>
          </div>
        </form>
      </div>
      <br></br>
      <br></br>
    </body>
  );
}

export default Login;
