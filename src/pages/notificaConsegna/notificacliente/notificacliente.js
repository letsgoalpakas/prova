import { React, useState } from "react";
import Navbar from "../../../components/navbar_cliente";
import { withRouter } from "react-router-dom";
import { Jumbotron } from "reactstrap";

function NotificaCliente() {
  const [luogo, setLuogo] = useState("");
  const [ID, setID] = useState("");
  const [idMezzo, setIdMezzo] = useState("");

  const logout = () => {
    localStorage.clear();
    window.location = "/";
  };

  const notifica = () => {
    
    if (luogo === "") {
      alert("dove hai lasciato il veicolo? inseriscilo nel box");
      document.invio.Luogo.focus();
      return false;
    }
    if (ID === "") {
      alert("inserisci l'id dell'ordine di cui vuoi notificare la consegna");
      document.invio.id.focus();
      return false;
    }
    if (idMezzo === "") {
      alert(
        "inserisci l'id mezzo dell'ordine di cui vuoi notificare la consegna"
      );
      document.invio.idmezzo.focus();
      return false;
    }

    alert("NOTIFICATO");
    let not = notificaServer();
    not.then((res) => {
      res.json().then((json) => {
      
        if (json.auth) {
          if (json.result) {
            alert("Consegna notificata con successo");
            window.location = "/notificacliente";
          } else {
            alert("Errore, riprovare");
          }
        } else {
          alert("Sessione scaduta");
          logout();
        }
      });
    });
  };

  async function notificaServer() {
    let c = JSON.parse(localStorage.getItem("profile"));
    let response = fetch("/notificacliente", {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "x-access-token": localStorage.getItem("token"),
      },
      body: JSON.stringify({
        idordine: ID,
        idmezzo: idMezzo,
        idcliente: c._id,
        luogo: luogo,
      }),
    });
    return response;
  }

  async function getProfile() {
    //aggiorniamo il profilo di cliente per la creaazione delle card
    let c = JSON.parse(localStorage.getItem("profile"));
    let response = fetch("/getCliente", {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "x-access-token": localStorage.getItem("token"),
      },
      body: JSON.stringify({
        idcliente: c._id,
      }),
    });

    return response;
  }

  const stampaOrdine = () => {
    let r = getProfile();

    r.then((res) => {
      res.json().then((json) => {
        if (json.auth) {
          let c = JSON.stringify(json.profile);

          localStorage.setItem("profile", c);

          let container = document.getElementById("ordine");

          let profilo = JSON.parse(localStorage.getItem("profile"));

          let ordini = profilo.ordini;

          for (let i = 0; i < ordini.length; ++i) {
            let ord = document.createElement("ord");

            if (ordini[i].mezzo === "Tassista") {
            } else {
              if (ordini[i].stato === "completato") {
              } else {
                ord.innerHTML +=
                  "<div class='container' margin='40em'>" +
                  "<p>ID: " +
                  i +
                  "</p>" +
                  "<p>IDMezzo: " +
                  ordini[i].mezzo._id +
                  "</p>" +
                  "<p>Data di ritiro " +
                  ordini[i].datainizio +
                  "</p>" +
                  "<p>Data di rilascio " +
                  ordini[i].datafine +
                  "</p>" +
                  "<p>Tipo " +
                  ordini[i].mezzo.tipo +
                  "</p>" +
                  "<p>Modello " +
                  ordini[i].mezzo.modello +
                  "</p>" +
                  "<p>Stallo " +
                  ordini[i].mezzo.stallo +
                  "</p>" +
                  "<p>Stato ordine " +
                  ordini[i].stato +
                  "</p>" +
                  "</div><br></br>";

                container.insertBefore(ord, container.firstChild);

              }
            }
          }
        }
      });
    });
  };

  window.onload = function () {
    stampaOrdine();
  };

  return (
    <body>
      <Navbar />

      <br></br>
      <div style={{ margin: "14px", display: "flex" }}>
        <Jumbotron>
          <h1 className="display-3">NOTIFICA CONSEGNA MEZZO</h1>
          <p className="lead">
            Premere il seguente pulsante per notificare l'avvenuta consegna del
            mezzo allo stallo o alla via scritta qui sotto
          </p>
        </Jumbotron>
      </div>

      <br></br>
      <form name="invio">
        <div class="form-group">
          <label>Via o Stallo</label>
          <input
            type="text"
            name="Luogo"
            class="form-control"
            placeholder="Via Roma n.10 / A1 "
            onChange={(event) => {
              setLuogo(event.target.value);
            }}
          />
          <br></br>
        </div>
        <div class="form-group">
          <label>Codice ordine</label>
          <input
            type="text"
            name="id"
            class="form-control"
            placeholder="1"
            onChange={(event) => {
              setID(event.target.value);
            }}
          />
          <br></br>
        </div>
        <div class="form-group">
          <label>ID Mezzo</label>
          <input
            type="text"
            name="idmezzo"
            class="form-control"
            placeholder="Consiglio: Copiare l'IDMezzo dell'ordine da notificare"
            onChange={(event) => {
              setIdMezzo(event.target.value);
            }}
          />
          <br></br>
        </div>
      </form>

      <button onClick={notifica}>Notifica il luogo di consegna!</button>
      <br></br>
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
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </body>
  );
}

export default withRouter(NotificaCliente);
