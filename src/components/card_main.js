import React from "react";
import { Card, CardImg, Row, Col } from "reactstrap";

import img1 from "../assets/images/cattedrale.jpg";
import img2 from "../assets/images/mare.jpg";
import img3 from "../assets/images/Teatro.jpg";

const CardMain = (props) => {
  return (
    <Row xs={1} md={1} lg={3}>
      <Col>
        <Card>
          <CardImg top width="100%" src={img1} alt="Card image cap" />
        </Card>
      </Col>

      <Col>
        <Card>
          <CardImg top width="100%" src={img2} alt="Card image cap" />
        </Card>
      </Col>

      <Col>
        <Card>
          <CardImg top width="100%" src={img3} alt="Card image cap" />
        </Card>
      </Col>
    </Row>
  );
};

export default CardMain;
