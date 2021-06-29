import React from "react";
import { Card, CardText, CardBody, CardTitle } from "reactstrap";

const Carta = (props) => {
  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle id="a" tag="h5">
            Catalogo
          </CardTitle>
          <CardText>
            Nel nostro catalogo potrai scegliere tra quattro tipologie
            di mezzi: Auto, Moto, Biciclette e Monopattini, ciascuna
            divisa in tre fascie di prezzo.
          </CardText>
        </CardBody>
      </Card>
    </div>
  );
};

export default Carta;
