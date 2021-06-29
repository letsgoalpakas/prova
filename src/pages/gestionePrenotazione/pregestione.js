import React from "react";
import Navbar from "../../components/navbar_cliente";
import { withRouter } from "react-router-dom";

function PreGestione() {
  async function getProfile() {
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

  const profilo = () => {
    let r = getProfile();
    r.then((res) => {
      res.json().then((json) => {
        if (json.auth) {
          let c = JSON.stringify(json.profile);

          localStorage.setItem("profile", c);

          let container = document.getElementById("prenotazioni");

          let profilo = JSON.parse(localStorage.getItem("profile"));

          let ordini = profilo.ordini;

          for (let i = 0; i < ordini.length; ++i) {
            let ord = document.createElement("ord");

            let di = new Date(ordini[i].datainizio);
            di.setTime(di.getTime() - 2 * 60 * 60 * 1000);
            let df = new Date(ordini[i].datafine);
            df.setTime(df.getTime() - 2 * 60 * 60 * 1000);
            // eslint-disable-next-line
            if (ordini[i].mezzo == "Tassista") {
            } else if (ordini[i].stato !== "completato") {
              ord.innerHTML +=
                "<div class='container' margin='40em'>" +
                "<p>Data di ritiro " +
                di +
                "</p>" +
                "<p>Data di rilascio " +
                df +
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
                "</div><br></br>";

              container.insertBefore(ord, container.firstChild);

              ord.onclick = function () {
                saveandredirect(i);
              };
            }
          }
        }
      });
    });
  };

  const saveandredirect = (n) => {
    let prof = JSON.parse(localStorage.getItem("profile"));
    let ordine = prof.ordini[n];
    let obj = {
      mezzo: ordine.mezzo,
      datafine: ordine.datafine,
      datainizio: ordine.datainizio,
      stato: ordine.stato,
      chiave: n,
    };
    obj = JSON.stringify(obj);

    localStorage.setItem("editable", obj);

    window.location = "/gestioneprenotazione";
  };

  window.onload = function () {
    profilo();
  };

  return (
    <body>
      <Navbar></Navbar>
      <br></br>
      <br></br>
      <br></br>

      <div id="prenotazioni"></div>
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

export default withRouter(PreGestione);
