import React from "react";
import { Card, CardText, CardBody, CardTitle } from "reactstrap";

const Carta = (props) => {
  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle id="a" tag="h5">
            Monopattino
          </CardTitle>
          <CardText>Fascia bassa: 3€/h (oppure 10€ al giorno)</CardText>
          <CardText>Fascia media: 4€/h (oppure 18€ al giorno)</CardText>
          <CardText>Fascia alta: 5€/h (oppure 25€ al giorno)</CardText>
        </CardBody>
      </Card>
    </div>
  );
};

export default Carta;
