import { React, useState } from "react";
import Navbar from "../../components/navbar_cliente";
import { withRouter } from "react-router-dom";
import DatePicker from "react-datepicker";

function GestionePrenotazione() {
  const [stalloRitiro, setStalloRitiro] = useState("");
  const [data, setData] = useState(new Date());

  let flag = false;

  const logout = () => {
    localStorage.clear();
    window.location = "/";
  };

  const valida = () => {
    let profilo = JSON.parse(localStorage.getItem("editable"));
    let df = new Date(profilo.datafine);
    //new date aggiunge due ore per differenza di formato
    df.setTime(df.getTime() - 3 * 60 * 60 * 1000);
   

    if (stalloRitiro !== "" && stalloRitiro !== undefined) {
      if (
        stalloRitiro !== "A1" &&
        stalloRitiro !== "A2" &&
        stalloRitiro !== "A3" &&
        stalloRitiro !== "A4"
      ) {
        alert("Devi inserire uno stallo corretto tra A1, A2, A3 ed A4");
        document.invio.stallo.focus();
        document.invio.stallo.value = "";
        return false;
      }
    }

    if (data <= df) {
      alert("Modifica non consentita");
      return false;
    }
    if (data > df) {
      df.setTime(df.getTime() + 1 * 60 * 60 * 1000 + (1 / 2) * 60 * 60 * 1000);

      if (data > df) {
        alert("Modifica non consentita, al massimo un'ora e mezza");

        return false;
      }
      flag = true;
    }

    calcola();
  };

  const calcola = () => {
    let profilo = JSON.parse(localStorage.getItem("editable"));
    let mezzo = profilo.mezzo;
    let price = 0;

    if (flag) {
      if (mezzo.tipo === "Auto") {
        if (mezzo.fasciaPrezzo === "Alta") {
          price = 70;
        }
        if (mezzo.fasciaPrezzo === "Media") {
          price = 30;
        }
        if (mezzo.fasciaPrezzo === "Bassa") {
          price = 20;
        }
      }
      if (mezzo.tipo === "Moto") {
        if (mezzo.fasciaPrezzo === "Alta") {
          price = 15;
        }
        if (mezzo.fasciaPrezzo === "Media") {
          price = 10;
        }
        if (mezzo.fasciaPrezzo === "Bassa") {
          price = 8;
        }
      }
      if (mezzo.tipo === "Monopattino") {
        if (mezzo.fasciaPrezzo === "Alta") {
          price = 10;
        }
        if (mezzo.fasciaPrezzo === "Media") {
          price = 8;
        }
        if (mezzo.fasciaPrezzo === "Bassa") {
          price = 6;
        }
      }
      if (mezzo.tipo === "Bicicletta") {
        if (mezzo.fasciaPrezzo === "Alta") {
          price = 8;
        }
        if (mezzo.fasciaPrezzo === "Media") {
          price = 5;
        }
        if (mezzo.fasciaPrezzo === "Bassa") {
          price = 3;
        }
      }

      //sovraprezzo e button conferma
      

      let p = document.getElementById("sovraprezzo");

      //usato per evitare lo spam del button e conseguente append di più sovraprezzo
      while (p.lastElementChild) {
        p.removeChild(p.lastElementChild);
      }
      let foo = document.createElement("foo");

      foo.innerHTML +=
        "<br></br>" +
        "<h3> Sovraprezzo: " +
        price +
        " € </h3>" +
        "<button> Conferma </button>";
      p.appendChild(foo);
      foo.onclick = function () {
        conferma();
      };
    } else {
      let p = document.getElementById("sovraprezzo");
      while (p.lastElementChild) {
        p.removeChild(p.lastElementChild);
      }
      let foo = document.createElement("foo");
      foo.innerHTML += "<button> Conferma </button>";
      p.appendChild(foo);

      foo.onclick = function () {
        conferma();
      };
     
    }
  };

  const conferma = () => {
    let r = sendEdits();
    r.then((res) => {
      res.json().then((json) => {
        if (json.auth) {
          if (json.result !== "modificato") {
            alert("Ordine modificato correttamente");
            window.location = "/main";
          } else {
            alert(
              "Ordine già modificato in precedenza, non è possibile rimodificarlo"
            );
            window.location = "/main";
          }
        } else {
          alert("sessione scaduta");
          logout();
        }
      });
    });
  };

  async function sendEdits() {
 
    let edit = JSON.parse(localStorage.getItem("editable"));
    let profilo = JSON.parse(localStorage.getItem("profile"));

    let response = await fetch("/modifyprenotazione", {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "x-access-token": localStorage.getItem("token"),
      },
      body: JSON.stringify({
        stalloRitiro: stalloRitiro,
        dataFine: data,
        idCliente: profilo._id,
        position: edit.chiave,
      }),
    });
    return response;
  }
  const costruisci = () => {
    let container = document.getElementById("prenotazioni");
    let profilo = JSON.parse(localStorage.getItem("editable"));
    let pr = new Date(profilo.datafine);
    pr.setTime(pr.getTime() - 3 * 60 * 60 * 1000);
    let pi = new Date(profilo.datainizio);
    pi.setTime(pi.getTime() - 2 * 60 * 60 * 1000);
    let edit = document.createElement("edit");

    edit.innerHTML +=
      "<div class='container' margin='40em'>" +
      "<p>Data di ritiro " +
      pi +
      "</p>" +
      "<p>Data di rilascio " +
      pr + 
      "</p>" +
      "<p>Tipo " +
      profilo.mezzo.tipo +
      "</p>" +
      "<p>Modello " +
      profilo.mezzo.modello +
      "</p>" +
      "<p>Stallo di ritiro" +
      profilo.mezzo.stallo +
      "</p>" +
      "</div><br></br>";

    container.insertBefore(edit, container.firstChild);
  };

  window.onload = function () {
    costruisci();
  };

  return (
    <body>
      <Navbar></Navbar>
      <br></br>
      <br></br>
      <br></br>
      <div id="prenotazioni"></div>
      <br></br>

      <div class="container">
        <h2>Dati modificabili: </h2>
        <h4>Inserire i nuovi dati qui sotto</h4>
        <form name="invio">
          <br></br>
          <div class="form-group">
            <label>Stallo di ritiro</label>
            <input
              type="text"
              name="stallo"
              class="form-control"
              placeholder="Inserire il nome dello stallo di ritiro"
              onChange={(event) => {
                setStalloRitiro(event.target.value);
              }}
              required
            />
            <br></br>
          </div>
          <div class="form-group">
            <label>Modificare ora di consegna (massimo un'ora in più)</label>
            <DatePicker
              name="data"
              selected={data}
              onChange={(date) => setData(date)}
              showTimeSelect
              dateFormat="Pp"
            />
          </div>
        </form>
        <button onClick={valida}>Calcola sovraprezzo</button>
        <p id="sovraprezzo"></p>
        <br></br>
      </div>
      <br></br>
      <br></br>
    </body>
  );
}

export default withRouter(GestionePrenotazione);
