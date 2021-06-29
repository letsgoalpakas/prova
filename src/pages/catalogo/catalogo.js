import React from 'react';
import Navbar from '../../components/navbar_utente';
import ListaCatalogo from '../../components/lista_catalogo';
import { Jumbotron } from "reactstrap";

const Catalogo = () => {

  return (
    <body>
      <Navbar/>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <Jumbotron>
          <h1 className="display-3">C A T A L O G O</h1>
          <p className="lead">
            I veicoli messi a disposizione dalla nostra agenzia:
          </p>
          <hr className="my-2" />
          <p>
            Let's GO mette a disposizione dei suoi clienti un'ampia gamma di
            veicoli fra automobili, moto, monopattini e biciclette.
          </p>
        </Jumbotron>

          <ListaCatalogo/>

    </body>
  );
};

export default Catalogo;