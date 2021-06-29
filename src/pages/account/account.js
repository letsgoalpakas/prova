import { React, useState } from "react";
import Navbar from "../../components/navbar_cliente";
import { withRouter } from "react-router-dom";
import { Jumbotron } from "reactstrap";
import crypto from 'crypto';

function Account() {
  const logout = () => {
    localStorage.clear();
    window.location = "/";
  };

  const [password, setPassword] = useState("");
  const [confermaPassword, setconfermaPassword] = useState("");
  const [numeroDiTelefono, setNumeroDiTelefono] = useState("");
  const [tipologiaPatente, setTipologiaPatente] = useState("");

  async function modificaDati() {
    let c = JSON.parse(localStorage.getItem("profile"));
    const crypted_password = crypto
      .createHash("md5")
      .update(password)
      .digest("hex");
    let response = await fetch("/modificaaccount", {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "x-access-token": localStorage.getItem("token"),
      },
      body: JSON.stringify({
        idcliente: c._id,
        password: crypted_password,
        cellulare: numeroDiTelefono,
        patente: tipologiaPatente,
      }),
    });
    return response;
  }

  const valida = () => {
    if (tipologiaPatente !== "" && tipologiaPatente !== undefined) {
        // eslint-disable-next-line
        const tipologiaPatentePattern =  /^(A(M|1)?\-)?(B(1|E)?\-)?(C(1|E|1E)?\-)?(D(1|E|1E)?\-)?$/;
      if (!tipologiaPatentePattern.test(tipologiaPatente)) {
        alert(
          "Devi inserire la tipologia patente del formato corretto, in ordine di lettera (A-B-C-D)"
        );
        document.invio.tipologiaPatente.focus();
        document.invio.tipologiaPatente.value = "";
        return false;
      }
    }

    if (password !== "" && password.length < 6) {
      alert("Scegli una password di minimo 6 caratteri");
      document.invio.password.focus();
      return false;
    }

    if (password !== confermaPassword) {
      alert("Le password non corrispondono!");
      document.invio.confermaPassword.value = "";
      document.invio.confermaPassword.focus();
      return false;
    }

    const phonePattern =
      /^(\((00|\+)39\)|(00|\+)39)?(38[890]|34[7-90]|36[680]|33[3-90]|32[89]|39[0-90])\d{7}$/gm;
    if (numeroDiTelefono !== "" && numeroDiTelefono !== undefined) {
      // eslint-disable-next-line
      if (
        numeroDiTelefono === "" ||
        numeroDiTelefono === "undefined" ||
        !phonePattern.test(numeroDiTelefono)
      ) {
        alert(
          "Devi inserire il telefono, attenzione deve essere numerico e/o rispettare il pattern!"
        );
        document.invio.cellulare.value = "";
        document.invio.cellulare.focus();
        return false;
      }
    }

    let r = modificaDati();
    r.then((res) => {
      res.json().then((json) => {
        if (json.auth) {
          if (json.result) {
            let re = JSON.stringify(json.result);
            localStorage.setItem("profile", re);
            alert("Dati aggiornati con successo");
            window.location = "/account";
          } else {
            alert("errore nell'aggiornamento dei dati");
            window.location = "/account";
          }
        } else {
          alert("sessione scaduta");
          logout();
        }
      });
    });
  };

  const stampadati = () => {
    let profile = JSON.parse(localStorage.getItem("profile"));
    let container = document.getElementById("appendi");
    let dati = document.createElement("dati");

    if (profile.numeroIdentificativoPatente === "") {
      dati.innerHTML +=
        "<div class='container'>" +
        "<p>Nome: " +
        profile.nome +
        "</p>" +
        "<p>Cognome: " +
        profile.cognome +
        "</p>" +
        "<p>Email: " +
        profile.email +
        "</p>" +
        "<p>Cellulare: " +
        profile.numeroDiTelefono +
        "</p>" +
        "<p>Data di Nascita: " +
        profile.dataDiNascita +
        "</p>" +
        "<p>Luogo di Nascita: " +
        profile.luogoDiNascita +
        "</p>" +
        "</div><br></br>";
    } else {
      dati.innerHTML +=
        "<div class='container'>" +
        "<p>Nome: " +
        profile.nome +
        "</p>" +
        "<p>Cognome: " +
        profile.cognome +
        "</p>" +
        "<p>Email: " +
        profile.email +
        "</p>" +
        "<p>Cellulare: " +
        profile.numeroDiTelefono +
        "</p>" +
        "<p>Numero Patente: " +
        profile.numeroIdentificativoPatente +
        "</p>" +
        "<p>Categoria Patente: " +
        profile.tipologiaPatente +
        "</p>" +
        "<p>Data di Nascita: " +
        profile.dataDiNascita +
        "</p>" +
        "<p>Luogo di Nascita: " +
        profile.luogoDiNascita +
        "</p>" +
        "</div><br></br>";
    }

    container.append(dati);
  };

  window.onload = function () {
    stampadati();
  };

  return (
    <body>
      <Navbar></Navbar>
      <br></br>
      <br></br>
      <br></br>
      <div style={{ margin: "14px", display: "flex" }}>
        <Jumbotron>
          <h1 className="display-3">RIEPILOGO DATI ACCOUNT</h1>
          <p className="lead">
            Di seguito è mostrato il riepilogo dei dati relativi al tuo account.
            In questa pagina potrai inoltre modificare alcuni dei tuoi dati.
          </p>
          <hr className="my-2" />
        </Jumbotron>
      </div>
      <div id="appendi"></div>
      <div class="container">
        <h2>Dati modificabili: </h2>
        <h4>inserire i nuovi dati qui sotto</h4>
        <form name="invio">
          <br></br>
          <div class="form-group">
            <label >Categoria Patente</label>
            <input
              type="text"
              name="tipologiaPatente"
              class="form-control"
              placeholder="A-B-C-D-"
              onChange={(event) => {
                setTipologiaPatente(event.target.value);
              }}
            />
            <br></br>
          </div>
          <div class="form-group">
            <label >Cellulare</label>
            <input
              type="email"
              name="cellulare"
              class="form-control"
              placeholder="(+39) XXXXXXXXXX"
              onChange={(event) => {
                setNumeroDiTelefono(event.target.value);
              }}
            />
            <br></br>
          </div>
          <div class="form-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
              onChange={(event) => {
                setPassword(event.target.value);
              }}
            />
            <br></br>
          </div>
          <div class="form-group">
            <label>Conferma Password</label>
            <input
              type="password"
              name="confermaPassword"
              class="form-control"
              id="exampleInputPassword1"
              onChange={(event) => {
                setconfermaPassword(event.target.value);
              }}
              placeholder="Password"
            />
            <br></br>
          </div>
        </form>
        <button onClick={valida}>Modifica Dati Account</button>
        <br></br>
        <br></br>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </body>
  );
}

export default withRouter(Account);
