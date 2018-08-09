/* eslint no-debugger:0 */
import React, {Component} from 'react';
import sizeMe from 'react-sizeme';
import {Container, Col, Row} from 'reactstrap';
import './RoomListings.css';
/*
Components
*/
import RoomListing from './RoomListing/RoomListing';
// import RoomListing from
class RoomListings extends Component {
  constructor(props) {
    super(props);
    // console.log(props.size);
    this.state = {
      roomListings: props.roomListings || [],
    };
    this.listingsPerPage = 6;

    this.setListingsPerPage = this.setListingsPerPage.bind(this);
    this.handleStateChange = this.handleStateChange.bind(this);
  }

  componentDidMount() {}

  componentDidUpdate() {}

  setListingsPerPage() {
    const {size} = this.props;
    if (size.width > 350 && size.width <= 500) {
      this.listingsPerPage = 2;
    } else if (size.width > 500 && size.width <= 679) {
      this.listingsPerPage = 3;
    } else if (size.width > 679 && size.width <= 811) {
      this.listingsPerPage = 4;
    } else if (size.width > 811 && size.width <= 1000) {
      this.listingsPerPage = 5;
    } else if (size.width > 1000) {
      this.listingsPerPage = 6;
    }
  }

  handleStateChange(name, value) {
    this.setState({[name]: value});
  }

  render() {
    const {roomListings} = this.state;
    this.setListingsPerPage();
    return (
      <Container>
        <Row>
          <Col xl={1} lg={1} sm={1}>
            <div className="roomListingsButton">{'<'}</div>
          </Col>
          <Col xl="auto" lg="auto" sm="auto">
            {roomListings.map(roomListing => (
              <RoomListing key={roomListing.id} roomListing={roomListing} />
            ))}
          </Col>
          <Col xl={1} lg={1} sm={1}>
            <div className="roomListingsButton">{'>'}</div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default sizeMe({monitorWidth: true})(RoomListings);
