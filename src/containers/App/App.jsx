import React from 'react';
import { Container, Col, Row } from 'reactstrap';
import { Switch, Route } from 'react-router';
import './App.css';

import Home from '../Home/Home';
import Rooms from '../Rooms/Rooms';

const App = () => (
	<div>
		<Container>
			<Row>
				<Col className="outline">Nav Bar</Col>
			</Row>
		</Container>
		<Switch>
			<Route exact path="/" component={Home} />
			<Route path="/rooms" component={Rooms} />
		</Switch>
	</div>
);

export default App;
