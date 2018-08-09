import React from 'react';
import './RoomListing.css';

console.log(window.innerWidth);
const RoomListing = ({roomListing}) => (
  <div className="roomListing">
    <img className="roomListingImage" src={roomListing.images[0]} alt="" />
    <div className="roomListingTitle">{roomListing.title}</div>
  </div>
);

export default RoomListing;
