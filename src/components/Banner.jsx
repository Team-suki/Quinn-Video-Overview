import React from 'react';
import axios from 'axios';
import Title from '../style/title.style.js';
import Description from '../style/description.style.js';
import BackerButton from '../style/backerButton.style.js';

const Banner = (props) => (
  <div>
    <div><Title>{props.title}</Title></div>
    <div><Description>{props.description}</Description></div>
  </div>
)

export default Banner;
