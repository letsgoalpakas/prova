import React from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../../components/navbar_utente";
import { Jumbotron } from "reactstrap";

function NotFound() {
  let location = useLocation();

  return (
    <body>
      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <Navbar></Navbar>
      <div>
        <Jumbotron>
          <h1 className="display-3">404 P A G E N O T F O U N D</h1>
          <p className="lead">
            Mi dispiace ma la pagina {location.pathname} non esiste.
          </p>
          <hr className="my-2" />
        </Jumbotron>
      </div>

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

export default NotFound;
