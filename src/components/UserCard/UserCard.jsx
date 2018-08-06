import React from 'react';
import './UserCard.css';
import { Container, Col, Row, CardImg } from 'reactstrap';

const UserCard = () => (
	<div>
		<Container>
			<Row>
				<Col>
					<CardImg className="profile-pic" src="http://placekitten.com/120/120" />
				</Col>
				<Col>
					<h4>user name</h4>
					<div>chill level</div>
					<div># qustions</div>
					<div>isMoving button</div>
				</Col>
			</Row>
		</Container>
	</div>
);

export default UserCard;
