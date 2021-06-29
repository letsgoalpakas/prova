import React from "react";
import { Card, CardText, CardBody, CardTitle } from "reactstrap";

const Carta = (props) => {
  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle id="a" tag="h5">
            Moto
          </CardTitle>
          <CardText>Fascia bassa: 5€/h (oppure 25€ al giorno)</CardText>
          <CardText>Fascia media: 6€/h (oppure 30€ al giorno)</CardText>
          <CardText>Fascia alta: 8€/h (oppure 40€ al giorno)</CardText>
        </CardBody>
      </Card>
    </div>
  );
};

export default Carta;
