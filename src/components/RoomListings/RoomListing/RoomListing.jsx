import React from 'react';
import './RoomListing.css';

const RoomListing = ({roomListing}) => (
  <div className="roomListing">
    <img className="roomListingImage" src={roomListing.images[0]} alt="" />

    <div className="roomListingTitle">
      {roomListing.title}
      <span className="fullTitle">{roomListing.title}</span>
    </div>
  </div>
);

export default RoomListing;
