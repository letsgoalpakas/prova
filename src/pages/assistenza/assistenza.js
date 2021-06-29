import { React, useState } from "react";
 // eslint-disable-next-line
import assistenza from "./assistenza.css";
import Navbar from "../../components/navbar_utente";

function Assistenza() {
  const [nome, setNome] = useState("");
  const [cognome, setCognome] = useState("");
  const [email, setEmail] = useState("");
  const [descrizione, setDescrizione] = useState("");

  const controllo = () => {
    if (nome === "" || nome === undefined) {
      alert("Devi inserire un nome!");
      document.invio.nome.value = "";
      document.invio.nome.focus();
      return false;
    }
    if (cognome === "" || cognome === undefined) {
      alert("Devi inserire un cognome!");
      document.invio.nome.value = "";
      document.invio.nome.focus();
      return false;
    }

    var email_valid =
      /^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-]{2,})+.)+([a-zA-Z0-9]{2,})+$/;
    // eslint-disable-next-line
    if (!email_valid.test(email) || email == "" || email == undefined) {
      alert("Devi inserire un indirizzo mail corretto");
      document.invio.email.focus();
      return false;
    } else {
      let response = addToDB();
      response.then((res) => {
        res.json().then((json) => {
          if (json.result) {
            alert("Controlli la sua email, a breve le risponderemo!");
            window.location = "/assistenza";
          } else {
            alert("Errore nella richiesta d'assistenza. Riprova!");
            window.location = "/assistenza";
          }
        });
      });
    }
  }; //fine controllo

  async function addToDB() {
    let response = await fetch("/assistenza", {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        tipoServizio: "assistenza",
        descrizione: descrizione,
        stato: "in attesa di conferma",
        email: email,
      }),
    });
    return response;
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
      <br></br>
      <br></br>
      <div class="ass">
        <div style={{ "text-align": "center" }}>
          <h2>Assistenza</h2>
          <p>Compila il seguente form per richiedere assistenza:</p>
        </div>
        <div class="row">
          <div class="column">
            <form name="invio">
              <label for="fname">Nome:</label>
              <input
                type="text"
                id="fname"
                name="nome"
                onChange={(event) => {
                  setNome(event.target.value);
                }}
                placeholder="Inserisci il nome"
              />
              <label for="lname">Cognome:</label>
              <input
                type="text"
                id="lname"
                name="cognome"
                onChange={(event) => {
                  setCognome(event.target.value);
                }}
                placeholder="Inserisci il cognome"
              />
              <label for="lname">Email:</label>
              <input
                type="text"
                id="lname"
                name="email"
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
                placeholder="Inserisci la tua mail"
              />
              <label for="oggetto">Oggetto:</label>
              <textarea
                id="oggetto"
                name="descrizione"
                onChange={(event) => {
                  setDescrizione(event.target.value);
                }}
                placeholder="Scrivi una piccola descrizione del tuo problema..."
              ></textarea>
              <br></br>
              <button type="button" class="btn btn-primary" onClick={controllo}>
                Invia richiesta di assistenza
              </button>
            </form>
          </div>
        </div>
      </div>

      <br></br>
      <br></br>
      <br></br>
    </body>
  );
}

export default Assistenza;
