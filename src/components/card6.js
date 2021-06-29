import React from "react";
import { Card, CardText, CardBody, CardTitle } from "reactstrap";

const Carta = (props) => {
  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle id="a" tag="h5">
            Bicicletta
          </CardTitle>
          <CardText>Fascia bassa: 2€/h (oppure 6€ al giorno)</CardText>
          <CardText>Fascia media: 3€/h (oppure 8€ al giorno)</CardText>
          <CardText>Fascia alta: 4€/h (oppure 14€ al giorno)</CardText>
        </CardBody>
      </Card>
    </div>
  );
};

export default Carta;
