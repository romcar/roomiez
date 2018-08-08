import React from 'react';

const RoomListings = (props) => {
  return props.roomListings.map((roomListing) => {
    console.log(roomListing)
  });
}