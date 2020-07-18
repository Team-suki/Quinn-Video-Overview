import React from 'react';
import axios from 'axios';
import Location from '../style/location.style.js';

class Social extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      location: ''
    }

    this.getBanner = this.getBanner.bind(this);
  }

  getBanner() {
    var id = new URLSearchParams(window.location.search).get('id');
    axios.get(`/banners/${id}`).then(result => {
      this.setState({
        location: result.data.location,
        category: result.data.category
      });
    })
  }

  componentDidMount() {
    this.getBanner()
  }

  render() {
    return <div>
      <Location>{'Project We Love'}{`    `}{this.state.category} {this.state.location} {'Project Budget'}</Location>
      </div>
  }
}

export default Social;
