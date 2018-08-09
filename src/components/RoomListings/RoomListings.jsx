/* eslint no-debugger:0 */
import React, {Component} from 'react';
import sizeMe from 'react-sizeme';
import {Container, Row} from 'reactstrap';
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
      currentPage: 1,
      roomListings: props.roomListings || [],
    };
    this.listingsPerPage = 6;

    this.setListingsPerPage = this.setListingsPerPage.bind(this);
    this.handleStateChange = this.handleStateChange.bind(this);
    this.nextPage = this.nextPage.bind(this);
    this.prevPage = this.prevPage.bind(this);
    this.renderListings = this.renderListings.bind(this);
    this.calculateNumberOfPages = this.calculateNumberOfPages.bind(this);
  }

  componentDidMount() {
    this.setListingsPerPage();
  }

  setListingsPerPage() {
    const currentNumber = this.listingsPerPage;
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

    if (currentNumber !== this.listingsPerPage) {
      const {roomListings} = this.props;
      this.calculateNumberOfPages(roomListings);
    }
  }

  nextPage() {
    const {currentPage, pageNumbers} = this.state;
    const next =
      currentPage === pageNumbers[pageNumbers.length - 1] ? 1 : currentPage + 1;
    this.setState({currentPage: next});
  }

  prevPage() {
    const {currentPage, pageNumbers} = this.state;
    const prev =
      currentPage === 1 ? pageNumbers[pageNumbers.length - 1] : currentPage - 1;
    this.setState({currentPage: prev});
  }

  calculateNumberOfPages(listings) {
    const numbers = [];
    const j = Math.ceil(listings.length / this.listingsPerPage);
    for (let i = 1; i <= j; i += 1) {
      numbers.push(i);
    }
    this.setState({pageNumbers: numbers});
  }

  handleStateChange(name, value) {
    this.setState({[name]: value});
  }

  renderListings(listings) {
    this.x = 'idk';
    return listings.map(roomListing => (
      <RoomListing key={roomListing.id} roomListing={roomListing} />
    ));
  }

  render() {
    const {roomListings, currentPage} = this.state;
    this.setListingsPerPage();
    const indexOfLastListing = this.listingsPerPage * currentPage;
    const indexOfFirstListing = indexOfLastListing - this.listingsPerPage;
    const listings = roomListings.slice(
      indexOfFirstListing,
      indexOfLastListing,
    );
    console.log(this.listingsPerPage);
    return (
      <Container className="roomListings">
        <Row>
          <div className="roomListingsButton" onClick={this.prevPage}>
            {'<'}
          </div>
          <div className="tiles">{this.renderListings(listings)}</div>
          <div className="roomListingsButton" onClick={this.nextPage}>
            {'>'}
          </div>
        </Row>
      </Container>
    );
  }
}

export default sizeMe({monitorWidth: true})(RoomListings);
