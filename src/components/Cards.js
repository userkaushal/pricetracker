import React from "react";
import { Container, Row, Col, Card, Button, ListGroup } from "react-bootstrap";
import "../components/Cards.css";

function Cards() {
  return (
    <Container className="Cards">
      <Row>
        <Col xs={12} sm={6} md={4} lg={3} className="mb-4">
          <Card>
            <div className="imgdev">
              <Card.Img
                variant="top"
                src="https://assets-mkpbg.gem.gov.in/img/othe/3227563/a0/79/pen001.jpg.0dc3e7a079.999x420x420.jpg"
              />
            </div>
            <Card.Body style={{ minHeight: "110px" }}>
              <Card.Title>Pilot Blue Ink Gel Pen</Card.Title>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>4.5 - 5.0</ListGroup.Item>
              <ListGroup.Item>₹5.00</ListGroup.Item>
            </ListGroup>
            <Card.Body>
              <Button
                target="blank"
                href="https://mkp.gem.gov.in/gel-pen-v2/pilot-v5-blue-pen-smooth/p-5116877-84663009569-cat.html#variant_id=5116877-84663009569"
                style={{
                  backgroundColor: "rgba(255 109 31 /0.2)",
                  color: "rgba(255 109 31 /1)",
                  border: "1px solid rgba(255 109 31 /1)",
                  borderRadius: "0.375rem",
                }}
              >
                View
              </Button>
            </Card.Body>
          </Card>
        </Col>

        <Col xs={12} sm={6} md={4} lg={3} className="mb-4">
          <Card>
            <div className="imgdev">
              <Card.Img
                variant="top"
                src="https://assets-mkpbg.gem.gov.in/img/othe/4673235/c6/e9/front6copy3.jpg.c9785ac6e9.999x185x185.jpg"
              />
            </div>
            <Card.Body style={{ minHeight: "110px" }}>
              <Card.Title>HYPHER UNINTERN JOBS PRIVATE LIMITED</Card.Title>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>4.5 - 5.0</ListGroup.Item>
              <ListGroup.Item>₹9,999</ListGroup.Item>
            </ListGroup>
            <Card.Body>
              <Button
                target="blank"
                href="https://mkp.gem.gov.in/television-tv-v2/hypher-unintern-jobs-private-limited/p-5116877-44991534407-cat.html#variant_id=5116877-44991534407"
                style={{
                  backgroundColor: "rgba(255 109 31 /0.2)",
                  color: "rgba(255 109 31 /1)",
                  border: "1px solid rgba(255 109 31 /1)",
                }}
              >
                View
              </Button>
            </Card.Body>
          </Card>
        </Col>

        <Col xs={12} sm={6} md={4} lg={3} className="mb-4">
          <Card>
            <div className="imgdev">
              <Card.Img
                variant="top"
                src="https://assets-mkpbg.gem.gov.in/img/othe/6827336/83/fe/01.jpg.d0965083fe.999x185x185.jpg"
              />
            </div>
            <Card.Body style={{ minHeight: "110px" }}>
              <Card.Title>acer AMD Ryzen 5 15.6 Inch Laptop</Card.Title>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>4.5 - 5.0</ListGroup.Item>
              <ListGroup.Item>₹10,000</ListGroup.Item>
            </ListGroup>
            <Card.Body>
              <Button
                target="blank"
                href="https://mkp.gem.gov.in/laptop-notebook/acer-amd-ryzen-5-15-6-inch-laptop/p-5116877-87147402538-cat.html#variant_id=5116877-87147402538"
                style={{
                  backgroundColor: "rgba(255 109 31 /0.2)",
                  color: "rgba(255 109 31 /1)",
                  border: "1px solid rgba(255 109 31 /1)",
                }}
              >
                View
              </Button>
            </Card.Body>
          </Card>
        </Col>

        <Col xs={12} sm={6} md={4} lg={3} className="mb-4">
          <Card>
            <div className="imgdev">
              <Card.Img
                variant="top"
                src="https://assets-mkpbg.gem.gov.in/img/othe/2104240/ae/5c/laptop3520.jpg.49f884ae5c.999x185x185.jpg"
              />
            </div>
            <Card.Body style={{ minHeight: "110px" }}>
              <Card.Title>Dell Intel Core i5 15.6 Inch Laptop</Card.Title>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>4.5 - 5.0</ListGroup.Item>
              <ListGroup.Item>₹10,000</ListGroup.Item>
            </ListGroup>
            <Card.Body>
              <Button
                target="blank"
                href="https://mkp.gem.gov.in/laptop-notebook/dell-vostro-3520/p-5116877-46077647750-cat.html#variant_id=5116877-46077647750"
                style={{
                  backgroundColor: "rgba(255 109 31 /0.2)",
                  color: "rgba(255 109 31 /1)",
                  border: "1px solid rgba(255 109 31 /1)",
                }}
              >
                View
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Cards;
