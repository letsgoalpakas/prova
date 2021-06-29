import React from "react";
import Navbar from "../../../components/navbar_dipendente";
import { withRouter } from "react-router-dom";
import { Jumbotron } from "reactstrap";

function NotificaDipendente() {
  const logout = () => {
    localStorage.clear();
    window.location = "/";
  };

  async function getProfile() {
    //aggiorniamo il profilo del dipendente per la creazione delle card
    let d = JSON.parse(localStorage.getItem("profile"));
    let response = fetch("/getdipendente", {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "x-access-token": localStorage.getItem("token"),
      },
      body: JSON.stringify({
        idDipendente: d._id,
      }),
    });

    return response;
  }

  const disoccupa = () => {
  
    let response = disoccupaDipendente();
    response.then((res) => {
      res.json().then((json) => {
        if (json.auth) {
          if (json.result) {
            alert(
              "Incarico completato e notificato, puoi accettare nuovi incarichi"
            );
            window.location = "/visualizzaIncarichi";
          } else {
            alert("Errore nella notifica riprova");
            window.location = "/notificadipendente";
          }
        } else {
          alert("Sessione scaduta");
          logout();
        }
      });
    });
  };

  async function disoccupaDipendente() {
    //mettiamo il dipendente a non occupato, così può accettare nuovi incarichi
    let d = JSON.parse(localStorage.getItem("profile"));
    let response = await fetch("/liberadipendente", {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "x-access-token": localStorage.getItem("token"),
      },
      body: JSON.stringify({
        idDipendente: d._id,
      }),
    });
    return response;
  }

  const stampaIncarico = () => {
    let r = getProfile();

    r.then((res) => {
      res.json().then((json) => {
        if (json.auth) {
          let c = JSON.stringify(json.profile);

          localStorage.setItem("profile", c);

          let container = document.getElementById("incarico");

          let profilo = JSON.parse(localStorage.getItem("profile"));
          
          let incarichi = profilo.incarico;

          let incarico = document.createElement("incarico");

          if (incarichi.stato === "completato" || incarichi === "") {
          } else {
            incarico.innerHTML +=
              "<div class='container' margin='40em'>" +
              "<p>Descrizione: " +
              incarichi.descrizione +
              "</p>" +
              "<p>Stato ordine: " +
              incarichi.stato +
              "</p>" +
              "</div><br></br>";

            container.insertBefore(incarico, container.firstChild);

            incarico.onclick = function () {
              disoccupa();
            };
          }
        }
      });
    });
  };

  window.onload = function () {
    stampaIncarico();
  };

  return (
    <body>
      <Navbar />
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div style={{ margin: "14px", display: "flex" }}>
        <Jumbotron>
          <h1 className="display-3">NOTIFICA COMPLETAMENTO INCARICO</h1>
          <p className="lead">
            Premere il seguente pulsante per notificare l'avvenuta consegna del
            mezzo allo stallo:
          </p>
        </Jumbotron>
      </div>

      <div id="incarico"></div>
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

export default withRouter(NotificaDipendente);
