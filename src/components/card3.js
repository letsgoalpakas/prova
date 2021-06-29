import React from "react";
import { Card, CardText, CardBody, CardTitle } from "reactstrap";

const Carta = (props) => {
  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle id="a" tag="h5">
            Convenienza
          </CardTitle>
          <CardText>
            Grazie all'ampia varietà del nostro catalogo troverai il mezzo che
            fa per te, avrai anche la possibilità di richiedere un servizio
            taxi per portarti dovunque tu voglia!
          </CardText>
        </CardBody>
      </Card>
    </div>
  );
};

export default Carta;
