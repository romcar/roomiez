/* eslint react/prop-types: 0 */
import React from 'react';
import {Row, Col, Container} from 'reactstrap';
import './Home.css';

/*
Components
*/
import UserCard from '../../components/UserCard/UserCard';
import RoomListings from '../../components/RoomListings/RoomListings';

const Home = ({user, roomListings}) => (
  <Container>
    <Row className="center">
      <Col xl={3} md={3} sm={3} xs={false}>
        {/* Side panel */}
        <Container>
          <Row className="outline">
            <UserCard user={user} />
          </Row>
          <Row className="outline">Notification System</Row>
        </Container>
      </Col>
      {/* Main panel */}
      <Col xl={8} md={8} sm={8} xs={false}>
        <Container className="extraWidth">
          <Row className="outline">
            <RoomListings roomListings={roomListings} />
          </Row>
          <Row className="outline">Random Quick Questions</Row>
        </Container>
      </Col>
    </Row>
  </Container>
);

export default Home;
