import React from 'react';

/*
Components
*/
import RoomListing from './RoomListing/RoomListing';
// import RoomListing from
const RoomListings = ({roomListings}) =>
  roomListings.map(roomListing => {
    console.log(roomListing);
    return <RoomListing key={roomListing.id} roomListing={roomListing} />;
  });

export default RoomListings;
