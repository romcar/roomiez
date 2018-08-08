import React from 'react';
import {Container, Col, Row} from 'reactstrap';

/*
Components
*/

const Rooms = () => (
  <Container>
    <Row className="center">
      <Col xl={3} md={3} sm={3} xs={false}>
        {/* Side panel */}
        <Container>
          <Row className="outline">User Card</Row>
          <Row className="outline">Search System</Row>
        </Container>
      </Col>
      {/* Main panel */}
      <Col xl={8} md={8} sm={8} xs={false}>
        <Container className="extraWidth">
          <Row className="outline">Map</Row>
          <Row className="outline">Room Listings</Row>
          <Row className="outline">Active Listing/Create Listing</Row>
        </Container>
      </Col>
    </Row>
  </Container>
);

export default Rooms;
