import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

const SubjectList = ({ subjects }) => {
  return (
    <Container className="mt-4">
      <Row className="justify-content-center text-center g-4">
        {subjects.map((sub) => (
          <Col key={sub.id} xs={6} md={2}>
            <Image src={sub.image} alt={sub.name} width={70} height={70} />
            <h6 className="mt-2 fw-semibold">{sub.name}</h6>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default SubjectList;
