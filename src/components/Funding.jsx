import React from 'react';
import axios from 'axios';
import Number from '../style/number.style.js';
import Pledged from '../style/pledged.style.js';
import Sidetext from '../style/sidebarText.style.js';
import BackerButton from '../style/backerButton.style.js';
import Remind from '../style/remindButton.style.js';
//const moment = require('moment')

const Funding = (props) => (
  <div>
    <br></br>
    <div>
      <div><Pledged>${props.amount_pledged}</Pledged></div>
      <div><Sidetext>pledged of ${props.goal} goal</Sidetext></div>
      <br></br>
      <div><Number>{props.days}</Number></div>
      <div><Sidetext>days to go</Sidetext></div>
      <br></br>
      <div><Number>{props.backers}</Number></div>
      <div><Sidetext>backers</Sidetext></div>
    </div>
    <br></br>
    <div><BackerButton>Back this project</BackerButton></div>
    <div><Remind>Remind Me</Remind></div>
  </div>
);

export default Funding;