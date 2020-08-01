import React from 'react';
import axios from 'axios';
import Location from '../style/location.style.js';

const Social = (props) => (
  <div>
    <Location>{'Project We Love'}{`    `}{props.category} {props.location} {'Project Budget'}</Location>
  </div>
);

export default Social;
