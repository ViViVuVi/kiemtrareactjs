import React from "react";
import { Card, Row, Col, Container } from "react-bootstrap";

const ObjectList = ({ objects }) => {
  return (
    <Container className="mt-4">
      <Row className="justify-content-center g-4">
        {objects.map((obj) => (
          <Col key={obj.id} xs={12} md={4}>
            <Card className="h-100 text-center shadow-sm">
              <Card.Img variant="top" src={obj.image} alt={obj.title} />
              <Card.Body>
                <Card.Title className="text-primary fw-bold text-uppercase">
                  {obj.title}
                </Card.Title>
                <Card.Text>{obj.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ObjectList;
