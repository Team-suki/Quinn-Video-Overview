import React from 'react';
import axios from 'axios';
import Funding from './Funding.jsx';
import Banner from './Banner.jsx';
import Video from './Video.jsx';
import Social from './Social.jsx';
import MidWrapper from '../style/midWrapper.style.js';
import Background from '../style/background.style.js';
const moment = require('moment')

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      description: '',
      category: '',
      location: '',
      project_we_love: '',
      video_url: '',
      amount_pledged: '',
      goal: '',
      backers: '',
      days: ''
    }

  }
  componentDidMount() {
    this.getBanner();
    console.log('props', this.props)
  }
  getBanner() {
    var id = this.props.itemid || new URLSearchParams(window.location.search).get('id');
    axios.get(`http://SDC-LB-679578692.us-west-1.elb.amazonaws.com/banners/${id}`).then(result => {
      this.setState({
        title: result.data.title,
        description: result.data.description,
        category: result.data.category,
        location: result.data.location,
        project_we_love: result.data.product_we_love,
        video_url: result.data.video_url,
        amount_pledged: result.data.amount_pledged,
        goal: result.data.pledge_goal,
        backers: result.data.backers,
        days: moment(result.data.end_date).diff(moment(),'days'),
      });
    }).catch((err) => {
      console.log('err -', err);
    });
  }

  render() {
    return <div style={{fontFamily: `"Maison Neue Book", "Helvetica Neue", Helvetica, Arial, sans-serif`}}><Background>
      <div><Banner title={this.state.title} description={this.state.description}/></div>
      <div><MidWrapper>
        <Video video_url={this.state.video_url}/><Funding amount_pledged={this.state.amount_pledged} goal={this.state.goal} days={this.state.days} backers={this.state.backers}/>
      </MidWrapper>
      </div>
      <div><Social category={this.state.category} location={this.state.location}/></div>
    </Background>
      </div>
  }
}

export default App;
