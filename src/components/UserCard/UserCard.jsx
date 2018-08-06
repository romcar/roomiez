import React from 'react';
import './UserCard.css';
import { Container, Col, Row, CardImg } from 'reactstrap';

const UserCard = () => (
	<div>
		<Container>
			<Row>
				<Col xl={2.25} md={2.25} sm={2.25}>
					<CardImg className="profile-pic" src="http://placekitten.com/120/120" />
				</Col>
				<Col>
					<h4 className="user-name">user name</h4>
					<div className="chill-lvl">chill level</div>
					<div className="questions-answered"># qustions</div>
					<div className="isMoving">isMoving button</div>
				</Col>
			</Row>
		</Container>
	</div>
);

export default UserCard;
