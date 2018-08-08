import React from 'react';

const RoomListing = ({roomListing}) => (
  <div>
    <div>{roomListing.title}</div>
    <div>{roomListing.description}</div>
    <div>{roomListing.images}</div>
  </div>
);

export default RoomListing;
