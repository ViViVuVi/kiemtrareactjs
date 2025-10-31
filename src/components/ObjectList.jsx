import React from "react";
import { Card, Row, Col, Container } from "react-bootstrap";

// ✅ Import tất cả ảnh trong thư mục assets
const images = import.meta.glob("/src/assets/*.{jpg,png,jpeg,svg}", {
  eager: true,
  import: "default",
});

const ObjectList = ({ objects }) => {
  return (
    <Container className="mt-4">
      <Row className="justify-content-center g-4">
        {objects.map((obj) => {
          // ✅ Lấy file name cuối cùng từ đường dẫn JSON
          const fileName = obj.image.split("/").pop();
          const imagePath = images[`/src/assets/${fileName}`];

          return (
            <Col key={obj.id} xs={12} md={4}>
              <Card className="h-100 text-center shadow-sm border-0">
                <Card.Img
                  variant="top"
                  src={imagePath}
                  alt={obj.title}
                  className="p-3"
                  style={{ height: "230px", objectFit: "cover" }}
                />
                <Card.Body>
                  <Card.Title className="text-primary fw-bold text-uppercase">
                    {obj.title}
                  </Card.Title>
                  <Card.Text>{obj.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default ObjectList;
