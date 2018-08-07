import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import bubbleIcon from '../../images/map-bubble.png';

export default function Bubble ({text}) {
  function render () {
    return (
      <div className="maps-misc">
        <img src={bubbleIcon} alt="Bubble" height="42" width="42" />
        <div>{text}</div>
      </div>
    );
  }

  return (
    render()
  );
}
