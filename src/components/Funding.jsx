import React from 'react';
import axios from 'axios';
import Number from '../style/Number.style.js';
import Pledged from '../style/pledged.style.js';
import Sidetext from '../style/sidebarText.style.js';
import BackerButton from '../style/backerButton.style.js';
import Remind from '../style/remindButton.style.js';
const moment = require('moment')

class Funding extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      goal: '',
      amount_pledged: null,
      days: null,
      days_text: '',
      backers: null,
      backers_text: ''
    }

    this.getBanner = this.getBanner.bind(this);
  }
  //.endOf('day').fromNow()
  getBanner() {
    axios.get(`http://localhost:3002/banners${window.location.pathname}`).then(result => {
      console.log(result.data)
      this.setState({
        goal: result.data.pledge_goal,
        amount_pledged: result.data.amount_pledged,
        days: moment(result.data.end_date).diff(moment(),'days'),
        backers: result.data.backers,
      });
    })
  }

  componentDidMount() {
    this.getBanner()
  }

  render() {
    return <div>
          <br></br>
          <div>
            <div><Pledged>${this.state.amount_pledged}</Pledged></div>
            <div><Sidetext>pledged of ${this.state.goal} goal</Sidetext></div>
            <br></br>
            <div><Number>{this.state.days}</Number></div>
            <div><Sidetext>days to go</Sidetext></div>
            <br></br>
            <div><Number>{this.state.backers}</Number></div>
            <div><Sidetext>backers</Sidetext></div>
          </div>
          <br></br>
          <div><BackerButton>Back this project</BackerButton></div>
          <div><Remind>Remind Me</Remind></div>
      </div>
  }
}

export default Funding;