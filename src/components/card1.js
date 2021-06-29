import React from "react";
import { Card, CardText, CardBody, CardTitle } from "reactstrap";

const Carta = (props) => {
  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle id="a" tag="h5">
            Chi è Let's GO?
          </CardTitle>
          <CardText>
            Il progetto Let's Go nasce dalla volontà di quattro 
            studenti di ingegneria informatica dell'Università di
            Palermo di creare una piattaforma accessibile a tutti.
          </CardText>
        </CardBody>
      </Card>
    </div>
  );
};

export default Carta;
