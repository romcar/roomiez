import React from 'react';
import { Container, Col, Row } from 'reactstrap';
import { Switch, Route } from 'react-router';
import './App.css';

import Home from '../Home/Home';
import Rooms from '../Rooms/Rooms';
import NavBar from '../../components/NavBar/NavBar';
import Messenger from '../Messenger/Messenger';

const App = () => (
	<div>
		<Container>
			<Row>
				<Col className="outline">
					<NavBar />
				</Col>
			</Row>
		</Container>
		<Switch>
			<Route exact path="/" component={Home} />
			<Route path="/rooms" component={Rooms} />
			<Route path="/messenger" component={Messenger} />
		</Switch>
	</div>
);

export default App;
