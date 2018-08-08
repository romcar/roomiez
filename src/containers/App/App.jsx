import React, {Component} from 'react';
import {Container, Col, Row} from 'reactstrap';
import {Switch, Route} from 'react-router';
import './App.css';

/*
Containers
*/
import Home from '../Home/Home';
import Rooms from '../Rooms/Rooms';
import NavBar from '../../components/NavBar/NavBar';
import Messenger from '../Messenger/Messenger';

import seed from '../../../seed';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: seed.user,
      recentListings: seed.recentListings,
    };
  }

  render() {
    const {user, recentListings} = this.state;

    return (
      <div>
        <Container>
          <Row>
            <Col className="outline">
              <NavBar />
            </Col>
          </Row>
        </Container>
        <Switch>
          <Route
            exact
            path="/"
            render={() => <Home user={user} roomListings={recentListings} />}
          />
          <Route path="/rooms" component={Rooms} />
          <Route path="/messenger" component={Messenger} />
        </Switch>
      </div>
    );
  }
}

export default App;
