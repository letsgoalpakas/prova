import React from "react";
import {
  Container,
  /*Collapse,*/ Row,
  Col,
  Card,
  CardBody,
  CardImg,
  CardTitle,
  /*CardText*/ CardSubtitle /*Button*/,
} from "reactstrap";
import car1 from "../assets/images/lancia.png";
import car2 from "../assets/images/panda.png";

const ListaCatalogo = () => {
  return (
    <div>
      <h1 style={{ margin: "14px", display: "flex" }}>AUTOMOBILI</h1>
      <div />
      <Row style={{ margin: "14px" }} xs={1} md={2} lg={4}>
        <Col>
          <Card>
            <CardImg top width="100%" src={car1} alt="Lancia Ypsilon" />
            <CardBody>
              <CardTitle tag="h5">Ypsilon 1.0 Hybrid Gold</CardTitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted">
                Ypsilon
              </CardSubtitle>
              <Container>
                <li>Cilindrata: 999 cc</li>
                <li>Posti: 5</li>
                <li>Fascia di prezzo: bassa</li>
                <li>Patente richiesta: B </li>
              </Container>
            </CardBody>
          </Card>
          <br></br>
        </Col>

        <Col>
          <Card>
            <CardImg top width="100%" src={car2} alt="Fiat Panda Cross" />
            <CardBody>
              <CardTitle tag="h5">Fiat Panda</CardTitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted">
                Cross
              </CardSubtitle>
              <Container>
                <li>Cilindrata: 875cm^3</li>
                <li>Posti: 5</li>
                <li>Fascia di prezzo: bassa</li>
                <li>Patente richiesta: B</li>
              </Container>
            </CardBody>
          </Card>
          <br></br>
        </Col>

        <Col>
          <Card>
            <CardImg
              top
              object-fit="cover"
              width="80%"
              src="https://www.jamesmagazine.it/wp-content/uploads/2019/01/190108_Fiat_500X-Mirror_02.jpg"
              alt="Fiat 500 Cross"
            />
            <CardBody>
              <CardTitle tag="h5">Fiat 500</CardTitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted">
                Cross
              </CardSubtitle>
              <Container>
                <li>Cilindrata: 1242cm^3</li>
                <li>Posti: 5 </li>
                <li>Fascia di prezzo: media</li>
                <li>Patente richiesta: B</li>
              </Container>
            </CardBody>
          </Card>
          <br></br>
        </Col>

        <Col>
          <Card>
            <CardImg
              top
              object-fit="cover"
              width="80%"
              src="https://www.federmetano.it/wp-content/uploads/2018/03/alfaRomeoGiulietta.jpg"
              alt="Alfa Romeo Giulietta"
            />
            <CardBody>
              <CardTitle tag="h5">Alfa Romeo</CardTitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted">
                Giulietta
              </CardSubtitle>
              <Container>
                <li>Cilindrata: 1368cm^3</li>
                <li>Posti: 5 </li>
                <li>Fascia di prezzo: me</li>
                <li>Patente richiesta: B</li>
              </Container>
            </CardBody>
          </Card>
          <br></br>
        </Col>
      </Row>

      <Row style={{ margin: "14px" }} xs={1} md={2} lg={4}>
        <Col>
          <Card>
            <CardImg
              top
              width="100%"
              src="https://www.boiautomobili.it/wp-content/uploads/2019/03/polo-comfort-nera.jpg"
              alt="Nuova Polo"
            />
            <CardBody>
              <CardTitle tag="h5">Nuova Polo</CardTitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted">
                Volkswagen
              </CardSubtitle>
              <Container>
                <li>Cilindrata: 999 cc</li>
                <li>Posti: 5</li>
                <li>Fascia di prezzo: media</li>
                <li>Patente richiesta: B </li>
              </Container>
            </CardBody>
          </Card>
          <br></br>
        </Col>

        <Col>
          <Card>
            <CardImg
              top
              width="100%"
              src="https://carrentdpa.it/wp-content/uploads/2019/09/veicolo-Maserati-Levante.png"
              alt="Levante Hybrid"
            />
            <CardBody>
              <CardTitle tag="h5">Levante Hybrid</CardTitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted">
                Maserati
              </CardSubtitle>
              <Container>
                <li>Cilindrata: 3799 cc</li>
                <li>Posti: 5</li>
                <li>Fascia di prezzo: alta</li>
                <li>Patente richiesta: B </li>
              </Container>
            </CardBody>
          </Card>
          <br></br>
        </Col>

        <Col>
          <Card>
            <CardImg
              top
              width="100%"
              src="https://65e81151f52e248c552b-fe74cd567ea2f1228f846834bd67571e.ssl.cf1.rackcdn.com/Ferrari/Model%20Pages/812%20GTS/812-gts-on-white.jpg"
              alt="Spieder 812 GTS"
            />
            <CardBody>
              <CardTitle tag="h5">Spieder 812 GTS</CardTitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted">
                Ferrari
              </CardSubtitle>
              <Container>
                <li>Cilindrata: 6496 cc /</li>
                <li>Posti: 2</li>
                <li>Fascia di prezzo: alta</li>
                <li>Patente richiesta: B</li>
              </Container>
            </CardBody>
          </Card>
          <br></br>
        </Col>

        <Col>
          <Card>
            <CardImg
              top
              width="100%"
              src="https://immagini.alvolante.it/sites/default/files/styles/image_gallery_big/public/serie_auto_galleria/2013/08/land_rover_range_rover_sport_ant_0.png?itok=qfVK3MVl"
              alt="Range Rover"
            />
            <CardBody>
              <CardTitle tag="h5">Range Rover</CardTitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted">
                Land Rover
              </CardSubtitle>
              <Container>
                <li>Cilindrata: 4367 cm^3</li>
                <li>Posti: 5</li>
                <li>Fascia di prezzo: alta</li>
                <li>Patente richiesta: B </li>
              </Container>
            </CardBody>
          </Card>
          <br></br>
        </Col>
      </Row>

      <br></br>
      <h1 style={{ margin: "14px", display: "flex" }}>MOTO 50cc</h1>
      <Row style={{ margin: "14px" }} xs={1} md={2} lg={4}>
        <Col>
          <Card>
            <CardImg
              top
              width="100%"
              src="https://images5.1000ps.net/images_bikekat/2017/34-PIAGGIO/2068-NRG_power_dd/1.jpg?width=480&height=380&mode=crop"
              alt="NRG Power 50"
            />
            <CardBody>
              <CardTitle tag="h5">NRG Power 50</CardTitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted">
                Piaggio
              </CardSubtitle>
              <Container>
                <li>Cilindrata: 50cc</li>
                <li>Posti: 2</li>
                <li>Fascia di prezzo: bassa</li>
                <li>Patente richiesta: AM</li>
              </Container>
            </CardBody>
          </Card>
          <br></br>
        </Col>
        <Col>
          <Card>
            <CardImg
              top
              width="100%"
              src="https://www.ansa.it/webimages/img_620x438/2019/3/14/71bce5ac0e1a84ca4859c72d292de72c.jpg"
              alt="Vespa Piaggio"
            />
            <CardBody>
              <CardTitle tag="h5">Vespa</CardTitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted">
                Piaggio
              </CardSubtitle>
              <Container>
                <li>Cilindrata: 50cc</li>
                <li>Posti: 2</li>
                <li>Fascia di prezzo: bassa</li>
                <li>Patente richiesta: AM</li>
              </Container>
            </CardBody>
          </Card>
          <br></br>
        </Col>

        <Col>
          <Card>
            <CardImg
              top
              width="100%"
              src="https://img3.stcrm.it/images/12575425/1200x/piaggio-zip-2018-04.jpg"
              alt="Zip Piaggio"
            />
            <CardBody>
              <CardTitle tag="h5">Zip</CardTitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted">
                Piaggio
              </CardSubtitle>
              <Container>
                <li>Cilindrata: 50cc</li>
                <li>Posti: 2</li>
                <li>Fascia di prezzo: bassa</li>
                <li>Patente richiesta: AM</li>
              </Container>
            </CardBody>
          </Card>
          <br></br>
        </Col>

        <Col>
          <Card>
            <CardImg
              top
              width="100%"
              src="https://www.nolosubito.it/wp-content/uploads/2020/04/PIAGGIO-LIBERTY-125-ABS.png"
              alt="Liberty Piaggio"
            />
            <CardBody>
              <CardTitle tag="h5">Liberty</CardTitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted">
                Piaggio
              </CardSubtitle>
              <Container>
                <li>Cilindrata: 50cc</li>
                <li>Posti: 2 </li>
                <li>Fascia di prezzo: bassa</li>
                <li>Patente richiesta: AM</li>
              </Container>
            </CardBody>
          </Card>
          <br></br>
        </Col>
      </Row>

      <h1 style={{ margin: "14px", display: "flex" }}>MOTO 125cc</h1>
      <Row style={{ margin: "14px" }} xs={1} md={2} lg={4}>
        <Col>
          <Card>
            <CardImg
              top
              width="100%"
              src="https://www.lillomoto.com/wp-content/uploads/2020/11/ksr-moto-classic-125.jpg"
              alt="KSR Classic 125"
            />
            <CardBody>
              <CardTitle tag="h5">Classic 125</CardTitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted">
                KSR
              </CardSubtitle>
              <Container>
                <li>Cilindrata: 125cc</li>
                <li>Posti: 2</li>
                <li>Fascia di prezzo: bassa</li>
                <li>Patente richiesta: A</li>
              </Container>
            </CardBody>
          </Card>
          <br></br>
        </Col>

        <Col>
          <Card>
            <CardImg
              top
              width="100%"
              src="https://www.honda.it/content/dam/central/motorcycles/colour-picker/125cc/cb125f/cb125f_2021/nh-1_black/cb125f_2021_nh-1_black.png/_jcr_content/renditions/c4.png"
              alt="Honda CB125F"
            />
            <CardBody>
              <CardTitle tag="h5">CB125F</CardTitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted">
                Honda
              </CardSubtitle>
              <Container>
                <li>Cilindrata: 125cc</li>
                <li>Posti: 2</li>
                <li>Fascia di prezzo: media</li>
                <li>Patente richiesta: A</li>
              </Container>
            </CardBody>
          </Card>
          <br></br>
        </Col>

        <Col>
          <Card>
            <CardImg
              top
              width="100%"
              src="https://cdn2.yamaha-motor.eu/prod/product-assets/2019/XEN125/2019-Yamaha-XEN125-EU-Competition_White-Studio-001-03.jpg"
              alt="Yamaha Xenter"
            />
            <CardBody>
              <CardTitle tag="h5">Xenter 125</CardTitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted">
                Yamaha
              </CardSubtitle>
              <Container>
                <li>Cilindrata: 125cc</li>
                <li>Posti: 2</li>
                <li>Fascia di prezzo: Media</li>
                <li>Patente richiesta: A</li>
              </Container>
            </CardBody>
          </Card>
          <br></br>
        </Col>
        <Col>
          <Card>
            <CardImg
              top
              width="100%"
              src="https://www.honda.it/content/dam/central/motorcycles/colour-picker/street/cb125r/cb125r_2021/nh-436m_mat_gunpowder_black_metallic/21YM_CB125R_Mat_Gunpowder_Black_Metallic_RHS_ORIGINAL.png/_jcr_content/renditions/c4.png"
              alt="Honda CB125R"
            />
            <CardBody>
              <CardTitle tag="h5">CB125R</CardTitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted">
                Honda
              </CardSubtitle>
              <Container>
                <li>Cilindrata: 125cc</li>
                <li>Posti: 2</li>
                <li>Fascia di prezzo: alta</li>
                <li>Patente richiesta: A</li>
              </Container>
            </CardBody>
          </Card>
          <br></br>
        </Col>
      </Row>

      <h1 style={{ margin: "14px", display: "flex" }}>MONOPATTINI</h1>
      <Row style={{ margin: "14px" }} xs={1} md={2} lg={4}>
        <Col>
          <Card>
            <CardImg
              top
              width="100%"
              src="https://i01.appmifile.com/webfile/globalimg/German/ECO800PIC/scooterPro.png"
            />
            <CardBody>
              <CardTitle tag="h5">Scooter Pro 2</CardTitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted">
                XIAOMI
              </CardSubtitle>
              <Container>
                <li>Velocità: 15 km/h </li>
                <li>Posti: 2 </li>
                <li>Fascia di prezzo: Media</li>
                <li>Patente richiesta: nessuna</li>
              </Container>
            </CardBody>
          </Card>
          <br></br>
        </Col>

        <Col>
          <Card>
            <CardImg
              top
              width="100%"
              src="https://nnhotempo.it/wp-content/uploads/2020/08/xiaomi-mi-electric-scooter-essential.jpg"
            />
            <CardBody>
              <CardTitle tag="h5">Mi Electric Scooter Essential</CardTitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted">
                XIAOMI
              </CardSubtitle>
              <Container>
                <li>Velocità: 15 km/h </li>
                <li>Posti: 2</li>
                <li>Fascia di prezzo: Media</li>
                <li>Patente richiesta: nessuna</li>
              </Container>
            </CardBody>
          </Card>
          <br></br>
        </Col>

        <Col>
          <Card>
            <CardImg
              top
              width="100%"
              src="https://contents.mediadecathlon.com/p1333430/k$cb4bab963cffa1a371d6214c1ba69d94/sq/monopattino-mid-9.jpg?format=auto&f=864x864"
            />
            <CardBody>
              <CardTitle tag="h5">Mid 9</CardTitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted">
                Decathlon
              </CardSubtitle>
              <Container>
                <li>Velocità: 15 km/h </li>
                <li>Posti: 2</li>
                <li>Fascia di prezzo: Bassa</li>
                <li>Patente richiesta: nessuna</li>
              </Container>
            </CardBody>
          </Card>
          <br></br>
        </Col>
        <Col>
          <Card>
            <CardImg
              top
              width="100%"
              src="https://shop.ducati.com/media/catalog/product/cache/320c2e69a374e3d7282ccd5a9111d6e0/_/8/_8500111_modif_vers2-2_1.jpg"
              alt="Ducati pro-I Plus"
            />
            <CardBody>
              <CardTitle tag="h5">Pro-I Plus</CardTitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted">
                Ducati
              </CardSubtitle>
              <Container>
                <li>Velocità: 25 km/h</li>
                <li>Posti: 2</li>
                <li>Fascia di prezzo: Alta</li>
                <li>Patente richiesta: nessuna </li>
              </Container>
            </CardBody>
          </Card>
          <br></br>
        </Col>
      </Row>

      <h1 style={{ margin: "14px", display: "flex" }}>BICI</h1>
      <Row style={{ margin: "14px" }} xs={1} md={2} lg={4}>
        <Col>
          <Card>
            <CardImg
              top
              width="100%"
              src="https://www.unieuro.it/medias/sys_master/root/h83/h8e/32666895319070/-api-rest-00ed29448a7522f610cac04d7b9ea7e0-assets-b34cc93c5ff35b2f0aebb9b0747ac7f1-preview-sgmConversionBaseFormat-sgmEbayProductFormat.jpg"
              alt="BeBikes CR3K"
            />
            <CardBody>
              <CardTitle tag="h5">BeBikes CR3K</CardTitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted">
                XIAOMI
              </CardSubtitle>
              <Container>
                <li>Cilindrata: /</li>
                <li>Posti: 1</li>
                <li>Fascia di prezzo: alta</li>
                <li>Patente richiesta: nessuna</li>
              </Container>
            </CardBody>
          </Card>
          <br></br>
        </Col>
        <Col>
          <Card>
            <CardImg
              top
              width="100%"
              src="https://contents.mediadecathlon.com/p1820109/k$344938eba014f0cb8e63a85846c3b676/sq/bici-pieghevole-tilt-500-blu.jpg?format=auto&f"
              alt="Tilt5000"
            />
            <CardBody>
              <CardTitle tag="h5">Tilt5000</CardTitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted">
                Decathlon
              </CardSubtitle>
              <Container>
                <li>Cilindrata: / </li>
                <li>Posti: 1</li>
                <li>Fascia di prezzo: alta</li>
                <li>Patente richiesta: nessuna</li>
              </Container>
            </CardBody>
          </Card>
          <br></br>
        </Col>

        <Col>
          <Card>
            <CardImg
              top
              width="100%"
              src="https://contents.mediadecathlon.com/p1819327/k$cb0f895dd275bb825ace553cbe5e3b0d/sq/bici-citta-elops-520-telaio-basso-blu-jeans.jpg?format=auto&f=864x864"
              alt="ELOPS"
            />
            <CardBody>
              <CardTitle tag="h5">ELOPS</CardTitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted">
                Decathlon
              </CardSubtitle>
              <Container>
                <li>Cilindrata: / </li>
                <li>Posti: 1</li>
                <li>Fascia di prezzo: bassa</li>
                <li>Patente richiesta: nessuna</li>
              </Container>
            </CardBody>
          </Card>
          <br></br>
        </Col>

        <Col>
          <Card>
            <CardImg
              top
              class
              width="100%"
              src="https://contents.mediadecathlon.com/p1845250/k$56eed87955b512cd5695592cebd2970a/sq/bici-trekking-a-pedalata-assistita-original-920-e.jpg?format=auto&f=864x864"
              alt="ORIGINAL 920 E"
            />
            <CardBody>
              <CardTitle tag="h5">ORIGINAL 920 E</CardTitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted">
                Decathlon
              </CardSubtitle>
              <Container>
                <li>Cilindrata: / </li>
                <li>Posti: 1</li>
                <li>Fascia di prezzo: alta</li>
                <li>Patente richiesta: nessuna</li>
              </Container>
            </CardBody>
          </Card>
          <br></br>
        </Col>
      </Row>
      <br></br>
    </div>
  );
};

export default ListaCatalogo;
