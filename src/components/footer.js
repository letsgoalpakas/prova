//import SimpleReactFooter from "simple-react-footer";
import React from "react";

const Foot = (props) => {
  return (
    <footer class="text-center text-lg-start bg-light text-muted">
      <br></br>

      <section class="">
        <div class="container text-center text-md-start mt-5">
          <br></br>
          <div class="row mt-3">
            <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 class="text-uppercase fw-bold mb-4">
                <i class="fas fa-gem me-3"></i>Let's GO
              </h6>
              <p>
                Noleggia adesso un mezzo!
                <br></br>
                Disponibile a Palermo
                <br></br>
                <br></br>
                da: Pietro Gancitano, Aurora Russo, Kevin Cardinale, Sophia
                Barbera.
              </p>
            </div>
            <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 class="text-uppercase fw-bold mb-4">Prodotti usati</h6>
              <p>
                <a href="https://it.reactjs.org/" class="text-reset">
                  React
                </a>
              </p>
              <p>
                <a href="https://nodejs.org/it/" class="text-reset">
                  Nodejs
                </a>
              </p>
              <p>
                <a href="https://www.mongodb.com/" class="text-reset">
                  MongoDB
                </a>
              </p>
              <p>
                <a href="https://expressjs.com/it/" class="text-reset">
                  Express
                </a>
              </p>
            </div>
            <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 class="text-uppercase fw-bold mb-4">Link utili </h6>
              <p>
                <a href="/catalogo" class="text-reset">
                  Consulta il nostro catalogo
                </a>
              </p>
              <p>
                <a href="/registrazione" class="text-reset">
                  Registrati
                </a>
              </p>
              <p>
                <a href="/login" class="text-reset">
                  Login
                </a>
              </p>
            </div>
            <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 class="text-uppercase fw-bold mb-4">Contatti</h6>
              <p>
                <i class="fas fa-home me-3"></i> Palermo, PA 90010, ITALIA
              </p>
              <p>
                <i class="fas fa-envelope me-3"></i>
               letsgosharingbyalpakas@gmail.com
              </p>
              <p>
                <i class="fas fa-phone me-3"></i> + 39 348 319 4800
              </p>
              <p>
                <i class="fas fa-print me-3"></i> + 39 327 582 4876
              </p>
            </div>
          </div>
        </div>
      </section>
      <div class="text-center p-4">
        <h1 class="text-reset fw-bold">Let's GO</h1>
      </div>
    </footer>
  );
};


export default Foot;
