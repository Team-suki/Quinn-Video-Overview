import React from 'react';
import axios from 'axios';
import Background from '../style/background.style.js';
import Funding from './Funding.jsx'
import MidWrapper from '../style/midWrapper.style.js';
import Videodiv from '../style/Videodiv.style.js';

const Video = (props) => (
  <div>
    <Videodiv>
      <iframe src={props.video_url}
      frameBorder='0'
      allow='autoplay; encrypted-media'
      allowFullScreen
      width={800}
      height={449.98}
      title='video'/>
    </Videodiv>
  </div>
);

export default Video;