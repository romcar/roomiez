import React from 'react';
import { Container, Col, Row } from 'reactstrap';
import './App.css';

const App = () => (
	<div>
		<Container>
			<Row>
				<Col className="outline">Nav Bar</Col>
			</Row>
			<Row>
				<Col xl={3} md={3} sm={3} xs={false}>
					{/* Side panel */}
					<Container>
						<Row className="outline">User Card</Row>
						<Row className="outline">Notification System</Row>
					</Container>
				</Col>
				{/* Main panel */}
				<Col xl={8} md={8} sm={8} xs={false}>
					<Container>
						<Row className="outline">Room Listings</Row>
						<Row className="outline">Random Quick Questions</Row>
					</Container>
				</Col>
			</Row>
		</Container>
	</div>
);

export default App;
