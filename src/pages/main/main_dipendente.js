import React from "react";
import { withRouter } from "react-router-dom";
import Navbar from "../../components/navbar_dipendente";
import { Jumbotron } from "reactstrap";

function Main() {
  return (
    <body>
      <Navbar></Navbar>
      <div>
        <Jumbotron>
          <h1 className="display-3">Benvenut*</h1>
          <p className="lead">Sei un dipendente</p>
          <hr className="my-2" />
          <p>
            Puoi visualizzare gli incarichi disponibili cliccando su Visualizza
            Incarichi nella barra di navigazione!
          </p>
          <p className="lead"></p>
        </Jumbotron>
      </div>
    </body>
  );
}

export default withRouter(Main);
