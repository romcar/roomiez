import React from 'react';
import {Container, Col, Row} from 'reactstrap';

const Messenger = () => (
  <Container>
    <Row className="center">
      <Col xl={3} md={3} sm={3} xs={false}>
        {/* Side panel */}
        <Container>
          <Row className="outline">User Card</Row>
          <Row className="outline">Chat Information</Row>
        </Container>
      </Col>
      {/* Main panel */}
      <Col xl={8} md={8} sm={8} xs={false}>
        <Container className="extraWidth">
          <Row className="outline">Dialog</Row>
          <Row className="outline">controls</Row>
        </Container>
      </Col>
    </Row>
  </Container>
);

export default Messenger;
