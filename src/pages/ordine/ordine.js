import { React, useState } from "react";
import { withRouter } from "react-router-dom";
import { Button, Row, Col } from "reactstrap";
// eslint-disable-next-line
import Navbar from "../../components/navbar_cliente";

import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const Ordine = () => {
  function getAge(dateString) {
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  }

  const [dataInizio, setdataInizio] = useState(new Date());

  const [dataFine, setdataFine] = useState(new Date());

  const logout = () => {
    localStorage.clear();
    window.location = "/";
  };

  async function getCatalogo() {
    let response = await fetch("/ordine", {
      method: "get",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "x-access-token": localStorage.getItem("token"),
      },
    });
    return response;
  }

  const setCatalogo = () => {
    //prendi il catalogo dal db e salvalo nel local storage
    let r = getCatalogo();
    r.then((re) => {
      //ritorniamo la promise risolta
      re.json().then((json) => {
        //ritorniamo l'oggetto

        let cat = JSON.stringify(json);
        if (!json.auth) {
          alert("Sessione scaduta");
          logout();
        } else {
          if (json.result) {
            localStorage.setItem("catalogo", cat);
          } else {
            alert("Errore, catalogo non ricevuto");
          }
        }

      });
    });
  };

  let newCatalogo = [];

  const red = (n) => {
    let o = newCatalogo[n];
    let ob = JSON.stringify(o);

    if (o.stallo === "A1") {
      localStorage.setItem("stallo", "Via Libertà");
    }

    if (o.stallo === "A2") {
      localStorage.setItem("stallo", "Tommaso Farzello");
    }

    if (o.stallo === "A3") {
      localStorage.setItem("stallo", "Viale delle Scienze");
    }

    if (o.stallo === "A4") {
      localStorage.setItem("stallo", "Piazzale Ungheria");
    }

    localStorage.setItem("scelta", ob);

    let di = new Date(dataInizio);
    let df = new Date(dataFine);
    localStorage.setItem("DataInizio", di);
    localStorage.setItem("DataFine", df);

    if (!o.occupato) {
      window.location = "/riepilogo";
    } else {
      alert("Mezzo occupato nella data scelta");
    }
  };

  const nored = (n) => {
    alert(
      "Il mezzo non è prenotabile nella data richiesta, scegliere una data differente"
    );
  };

  const refresh = () => {
    // usa il catalogo per costruire la pagina

    //salvo catalogo e profilo per preservare i dati originali all'interno del localStorage
    newCatalogo = [];
    let catalogo = JSON.parse(localStorage.getItem("catalogo"));
    let profilo = JSON.parse(localStorage.getItem("profile"));

    var container = document.getElementById("myDIV");
    var container2 = document.getElementById("myDIV2");
    var container3 = document.getElementById("myDIV3");

    while (container.lastElementChild) {
      container.removeChild(container.lastElementChild);
    }

    while (container2.lastElementChild) {
      container2.removeChild(container2.lastElementChild);
    }

    while (container3.lastElementChild) {
      container3.removeChild(container3.lastElementChild);
    }

    let counter = -1;

    //creo catalogo vuoto da riempire

    let a = document.getElementById("myDIV");
    let b = document.getElementById("myDIV2");
    let c = document.getElementById("myDIV3");
    let anni = getAge(profilo.dataDiNascita);

    for (let i = 0; i < catalogo.mezzi.length; ++i) {
      if (anni >= 14) {
        console.log(
          profilo.tipologiaPatente.search(catalogo.mezzi[i].patenteRichiesta)
        );
        if (
          profilo.tipologiaPatente.search(
            catalogo.mezzi[i].patenteRichiesta
          ) !== -1
        ) {
          if (document.getElementById("stallo_1").checked) {
            // eslint-disable-next-line
            if (catalogo.mezzi[i].stallo == "A1") {
              newCatalogo.push(catalogo.mezzi[i]);
            }
          }
          if (document.getElementById("stallo_2").checked) {
            // eslint-disable-next-line
            if (catalogo.mezzi[i].stallo == "A2") {
              newCatalogo.push(catalogo.mezzi[i]);
            }
          }
          if (document.getElementById("stallo_3").checked) {
            // eslint-disable-next-line
            if (catalogo.mezzi[i].stallo == "A3") {
              newCatalogo.push(catalogo.mezzi[i]);
            }
          }
          if (document.getElementById("stallo_4").checked) {
            // eslint-disable-next-line
            if (catalogo.mezzi[i].stallo == "A4") {
              newCatalogo.push(catalogo.mezzi[i]);
            }
          }
        }
      } else if (anni < 14 && anni > 10) {
        if (document.getElementById("stallo_1").checked) {
          // eslint-disable-next-line
          if (catalogo.mezzi[i].stallo == "A1") {
            newCatalogo.push(catalogo.mezzi[i]);
          }
        }
        if (document.getElementById("stallo_2").checked) {
          // eslint-disable-next-line
          if (catalogo.mezzi[i].stallo == "A2") {
            newCatalogo.push(catalogo.mezzi[i]);
          }
        }
        if (document.getElementById("stallo_3").checked) {
          // eslint-disable-next-line
          if (catalogo.mezzi[i].stallo == "A3") {
            newCatalogo.push(catalogo.mezzi[i]);
          }
        }
        if (document.getElementById("stallo_4").checked) {
          // eslint-disable-next-line
          if (catalogo.mezzi[i].stallo == "A4") {
            newCatalogo.push(catalogo.mezzi[i]);
          }
        }
      }
    } // eta >= 14 anni fine | fine fase di aggiunta al newCatalogo

    if (anni >= 14) {
      for (let i = newCatalogo.length - 1; i >= 0; --i) {
        if (document.getElementById("tipomezzo_1").checked) {
          if (newCatalogo[i].tipo !== "Auto") {
            newCatalogo.splice(i, 1);
          }
        } else if (document.getElementById("tipomezzo_2").checked) {
          if (newCatalogo[i].tipo !== "Moto") {
            newCatalogo.splice(i, 1);
          }
        } else if (document.getElementById("tipomezzo_3").checked) {
          if (newCatalogo[i].tipo !== "Bicicletta") {
            newCatalogo.splice(i, 1);
          }
        } else if (document.getElementById("tipomezzo_4").checked) {
          if (newCatalogo[i].tipo !== "Monopattino") {
            newCatalogo.splice(i, 1);
          }
        }
      }

      for (let i = newCatalogo.length - 1; i >= 0; --i) {
        if (document.getElementById("fascia_1").checked) {
          if (newCatalogo[i].fasciaPrezzo !== "Alta") {
            newCatalogo.splice(i, 1);
          }
        } else if (document.getElementById("fascia_2").checked) {
          if (newCatalogo[i].fasciaPrezzo !== "Media") {
            newCatalogo.splice(i, 1);
          }
        } else if (document.getElementById("fascia_3").checked) {
          if (newCatalogo[i].fasciaPrezzo !== "Bassa") {
            newCatalogo.splice(i, 1);
          }
        }
      }

      for (let i = newCatalogo.length - 1; i >= 0; --i) {
        if (document.getElementById("posti1").checked) {
          if (newCatalogo[i].posti !== "1") {
            newCatalogo.splice(i, 1);
          }
        } else if (document.getElementById("posti2").checked) {
          if (newCatalogo[i].posti !== "2") {
            newCatalogo.splice(i, 1);
          }
        } else if (document.getElementById("posti3").checked) {
          if (newCatalogo[i].posti !== "4") {
            newCatalogo.splice(i, 1);
          }
        } else if (document.getElementById("posti4").checked) {
          if (newCatalogo[i].posti !== "5") {
            newCatalogo.splice(i, 1);
          }
        }
      }
    }

    //anni <10 non può accedere a nessun servizio
    if (anni < 14 && anni > 10) {
      for (let i = newCatalogo.length - 1; i >= 0; --i) {
        // eslint-disable-next-line
        if (newCatalogo[i].tipo == "Auto") {
          newCatalogo.splice(i, 1);
        }
      }

      for (let i = newCatalogo.length - 1; i >= 0; --i) {
        // eslint-disable-next-line
        if (newCatalogo[i].tipo == "Moto") {
          newCatalogo.splice(i, 1);
        }
      }

      for (let i = newCatalogo.length - 1; i >= 0; --i) {
        if (document.getElementById("tipomezzo_3").checked) {
          // eslint-disable-next-line
          if (newCatalogo[i].tipo != "Bicicletta") {
            newCatalogo.splice(i, 1);
          }
        } else if (document.getElementById("tipomezzo_4").checked) {
          // eslint-disable-next-line
          if (newCatalogo[i].tipo != "Monopattino") {
            newCatalogo.splice(i, 1);
          }
        } else if (
          document.getElementById("tipomezzo_1").checked ||
          document.getElementById("tipomezzo_2").checked
        ) {
          newCatalogo.splice(i, 1);
        }
      }

      for (let i = newCatalogo.length - 1; i >= 0; --i) {
        if (document.getElementById("fascia_1").checked) {
          // eslint-disable-next-line
          if (newCatalogo[i].fasciaPrezzo != "Alta") {
            newCatalogo.splice(i, 1);
          }
        } else if (document.getElementById("fascia_2").checked) {
          // eslint-disable-next-line
          if (newCatalogo[i].fasciaPrezzo != "Media") {
            newCatalogo.splice(i, 1);
          }
        } else if (document.getElementById("fascia_3").checked) {
          // eslint-disable-next-line
          if (newCatalogo[i].fasciaPrezzo != "Bassa") {
            newCatalogo.splice(i, 1);
          }
        }
      }

      for (let i = newCatalogo.length - 1; i >= 0; --i) {
        if (document.getElementById("posti1").checked) {
          // eslint-disable-next-line
          if (newCatalogo[i].posti != "1") {
            newCatalogo.splice(i, 1);
          }
        } else if (document.getElementById("posti2").checked) {
          // eslint-disable-next-line
          if (newCatalogo[i].posti != "2") {
            newCatalogo.splice(i, 1);
          }
        } else if (document.getElementById("posti3").checked) {
          // eslint-disable-next-line
          if (newCatalogo[i].posti != "4") {
            newCatalogo.splice(i, 1);
          }
        } else if (document.getElementById("posti4").checked) {
          // eslint-disable-next-line
          if (newCatalogo[i].posti != "5") {
            newCatalogo.splice(i, 1);
          }
        }
      }
    } else if (anni <= 10) {
      alert("Non hai l'età per accedere a questo servizio");
    }
    //else continua senza aggiungere nulla al nuovo catalogo

    //ordine di almeno 30 minuti!
    if (dataInizio.getTime() < dataFine.getTime() - (1 / 2) * 60 * 60 * 1000) {
      for (let i = 0; i < newCatalogo.length; ++i) {
        let foo = document.createElement("foo");

        let stringa;
        // eslint-disable-next-line
        if (newCatalogo[i].stallo == "A1") {
          stringa = "Via Libertà";
        }
        // eslint-disable-next-line
        if (newCatalogo[i].stallo == "A2") {
          stringa = "Tommaso Farzello";
        }
        // eslint-disable-next-line
        if (newCatalogo[i].stallo == "A3") {
          stringa = "Viale delle Scienze";
        }
        // eslint-disable-next-line
        if (newCatalogo[i].stallo == "A4") {
          stringa = "Piazzale Ungheria";
        }

        let datarilascio = new Date(newCatalogo[i].rilascio);

        datarilascio.setTime(datarilascio.getTime() + 1 * 60 * 60 * 1000);
        // eslint-disable-next-line
        if (newCatalogo[i].rilascio != undefined) {
          //nel db per qualche motivo le date vengono salvate 3 ore in anticipo

          foo.innerHTML +=
            "<div class='card' style='position: center, margin-left:27px, margin-right:6px ;'>" +
            "<img src='" +
            newCatalogo[i].link +
            "' width='450' height='450' padding:'17px' class='card-img-top' alt='...'>" +
            "<div class='card-body'> <ul> " +
            "<h5 class='card-title'> " +
            newCatalogo[i].modello +
            " </h5>" +
            "<li> <p id='index' class='card-text'> Veicolo n°: " +
            i +
            " </li> </p>" +
            "<li> <p class='card-text'>Posti: " +
            newCatalogo[i].posti +
            " </li> </p>" +
            "<li> <p class='card-text'>Stallo: " +
            newCatalogo[i].stallo +
            "</li> </p>" +
            "<li> <p class='card-text'>Via: " +
            stringa +
            "</li> </p>" +
            "<li> <p class='card-text'>Marchio: " +
            newCatalogo[i].marchio +
            "</li> </p>" +
            "<li> <p class='card-text'>Occupato: " +
            newCatalogo[i].occupato +
            "</li> </p>" +
            "<li> <p class='card-text'>Data di disponibilità: " +
            datarilascio +
            " </li> </p>" +
            "</ul> </div>" +
            "</div><br></br>";
          counter += 1;
          if (datarilascio.getTime() <= dataInizio.getTime()) {
            foo.onclick = function () {
              red(i);
            };
          } else {
            foo.onclick = function () {
              nored(i);
            };
          }
        } else {
          foo.innerHTML +=
            "<div class='card' style='position: center, margin-left:27px, margin-right:6px ;'>" +
            "<img src='" +
            newCatalogo[i].link +
            "' width='450' height='450' padding:'17px' class='card-img-top' alt='...'>" +
            "<div class='card-body'> <ul> " +
            "<h5 class='card-title'> " +
            newCatalogo[i].modello +
            " </h5>" +
            "<li> <p id='index' class='card-text'> Veicolo n°: " +
            i +
            " </li> </p>" +
            "<li> <p class='card-text'>Posti: " +
            newCatalogo[i].posti +
            " </li> </p>" +
            "<li> <p class='card-text'>Stallo: " +
            newCatalogo[i].stallo +
            "</li> </p>" +
            "<li> <p class='card-text'>Via: " +
            stringa +
            "</li> </p>" +
            "<li> <p class='card-text'>Marchio: " +
            newCatalogo[i].marchio +
            "</li> </p>" +
            "<li> <p class='card-text'>Occupato: " +
            newCatalogo[i].occupato +
            "</li> </p>" +
            "<li> <p class='card-text'>Data di disponibilità: Disponibile ora </li> </p>" +
            "</ul> </div>" +
            "</div><br></br>";
          counter += 1;
          foo.onclick = function () {
            red(i);
          };
        }

        // eslint-disable-next-line
        if (counter % 3 == 0) {
          a.appendChild(foo);
          // eslint-disable-next-line
        } else if (counter % 3 == 1) {
          b.appendChild(foo);
        } else {
          c.appendChild(foo);
        }
      }
    } else {
      alert("Combinazione di data di ritiro e data di rilascio non consentita");
    }
    // eslint-disable-next-line
    if (newCatalogo.length == 0) {
      if (
        !document.getElementById("stallo_1").checked &&
        !document.getElementById("stallo_2").checked &&
        !document.getElementById("stallo_3").checked &&
        !document.getElementById("stallo_4").checked
      ) {
        alert("Inserire uno stallo");
      } else {
        alert(
          "Nessun mezzo disponibile con questi filtraggi, inseriscini di diversi"
        );
      }
    }
  };

  window.onload = function(){
    setCatalogo();
  }


  return (
    <body>
      <Navbar></Navbar>
      <br></br>
      <br></br>
      <br></br>

      <Row>
        <Col>
          <div
            class="card"
            style={{ width: "350px", height: "200px", border: "1px white" }}
          >
            <article class="card-group-item">
              <header class="card-header">
                <h6 class="title">Stalli</h6>
              </header>
              <div class="filter-content">
                <div class="card-body">
                  <form>
                    <label
                      style={{ "margin-bottom": "5px" }}
                      class="form-check"
                    >
                      <input
                        class="form-check-input"
                        type="checkbox"
                        id="stallo_1"
                        value=""
                      />
                      <span class="form-check-label">Via Libertà</span>
                    </label>
                    <label
                      style={{ "margin-bottom": "5px" }}
                      class="form-check"
                    >
                      <input
                        class="form-check-input"
                        type="checkbox"
                        id="stallo_2"
                        value=""
                      />
                      <span class="form-check-label">Tommaso Farzello</span>
                    </label>
                    <label
                      style={{ "margin-bottom": "5px" }}
                      class="form-check"
                    >
                      <input
                        class="form-check-input"
                        type="checkbox"
                        id="stallo_3"
                        value=""
                      />
                      <span class="form-check-label">
                        Viale delle Scienze 
                      </span>
                    </label>
                    <label class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        id="stallo_4"
                        value=""
                      />
                      <span class="form-check-label">Piazzale Ungheria</span>
                    </label>
                    <br></br>
                  </form>
                </div>
              </div>
            </article>
          </div>
          <br></br>
        </Col>

        <Col>
          <div
            class="card"
            style={{ height: "200px", width: "350px", border: "1px white" }}
          >
            <article class="card-group-item">
              <header class="card-header">
                <h6 class="title">Tipo mezzo </h6>
              </header>
              <div class="filter-content">
                <div class="card-body">
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="tipomezzo_1"
                    />
                    <label class="form-check-label" for="flexRadioDefault1">
                      Auto
                    </label>
                  </div>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="tipomezzo_2"
                    />
                    <label class="form-check-label" for="flexRadioDefault2">
                      Moto
                    </label>
                  </div>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="tipomezzo_3"
                    />
                    <label class="form-check-label" for="flexRadioDefault2">
                      Bici
                    </label>
                  </div>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="tipomezzo_4"
                    />
                    <label class="form-check-label" for="flexRadioDefault2">
                      Monopattino
                    </label>
                  </div>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="tipomezzo_nessuno"
                    />
                    <label class="form-check-label" for="flexRadioDefault2">
                      Indifferente
                    </label>
                  </div>
                  <br></br>
                </div>
              </div>
            </article>
          </div>
          <br></br>
        </Col>

        <Col>
          <div
            class="card"
            style={{ width: "350px", height: "200px", border: "1px white" }}
          >
            <article class="card-group-item">
              <header class="card-header">
                <h6 class="title">Fascia di prezzo </h6>
              </header>
              <div class="filter-content">
                <div class="card-body">
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="fascia"
                      id="fascia_1"
                    />
                    <label class="form-check-label" for="fascia">
                      Alta
                    </label>
                  </div>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="fascia"
                      id="fascia_2"
                    />
                    <label class="form-check-label" for="fascia">
                      Media
                    </label>
                  </div>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="fascia"
                      id="fascia_3"
                    />
                    <label class="form-check-label" for="fascia">
                      Bassa
                    </label>
                  </div>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="fascia"
                      id="fascia_nessuno"
                    />
                    <label class="form-check-label" for="fascia">
                      Indifferente
                    </label>
                  </div>

                  <br></br>
                </div>
              </div>
            </article>
          </div>
          <br></br>
        </Col>

        <Col>
          <div
            class="card"
            style={{ width: "350px", height: "200px", border: "1px white" }}
          >
            <article class="card-group-item">
              <header class="card-header">
                <h6 class="title">Numero posti </h6>
              </header>
              <div class="filter-content">
                <div class="card-body">
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="posti"
                      id="posti1"
                    />
                    <label class="form-check-label" for="posti">
                      1
                    </label>
                  </div>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="posti"
                      id="posti2"
                    />
                    <label class="form-check-label" for="posti">
                      2
                    </label>
                  </div>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="posti"
                      id="posti3"
                    />
                    <label class="form-check-label" for="posti">
                      4
                    </label>
                  </div>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="posti"
                      id="posti4"
                    />
                    <label class="form-check-label" for="posti">
                      5
                    </label>
                  </div>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="posti"
                      id="nessuno"
                    />
                    <label class="form-check-label" for="posti">
                      Indifferente
                    </label>
                  </div>
                </div>
              </div>
            </article>
          </div>
          <br></br>
        </Col>

        <Col>
          <div class="card" style={{ width: "350px", height: "200px" }}>
            <article class="card-group-item">
              <header class="card-header">
                <h6 class="title">Data e orario di ritiro</h6>
              </header>
              <div class="filter-content">
                <div class="card-body">
                  <DatePicker
                    name="dataInizio"
                    selected={dataInizio}
                    onChange={(date) => setdataInizio(date)}
                    showTimeSelect
                    dateFormat="Pp"
                  />
                  <DatePicker
                    name="dataFine"
                    selected={dataFine}
                    onChange={(date) => setdataFine(date)}
                    showTimeSelect
                    dateFormat="Pp"
                  />
                </div>
              </div>
            </article>
          </div>
          <br></br>
        </Col>
      </Row>

      <br></br>
      <div style={{ "justify-content": "center", "text-align": "center" }}>
        <Button type="submit" onClick={refresh} color="primary" size="lg">
          Aggiorna la pagina
        </Button>
      </div>
      <br></br>
      <Row>
        <Col>
          <div id="myDIV"></div>
        </Col>

        <Col>
          <div id="myDIV2"></div>
        </Col>

        <Col>
          <div id="myDIV3"></div>
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
      
    </body>
  );
};
export default withRouter(Ordine);
