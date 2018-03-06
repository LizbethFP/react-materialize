import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Artist from './Artist.js';

class MusicApp extends Component {
  render() {
    return (
      <div className="App">
       <Artist 
       name = 'Shakira'
       bio = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla ad totam cupiditate, nobis vel, aspernatur repudiandae iusto recusandae facere, aperiam voluptates ipsa cumque at modi perferendis laboriosam eum nam asperiores.'
       img = 'shakira.jpg'
       songs = {['ojos así', 'inevitable', 'tu']}
       />
      </div>
    );
  }
}

export default MusicApp;

// import {Button, Icon} from 'react-materialize'

// export default () => (
//   <Button waves='light'>
//     <Icon>thumb_up</Icon>
//   </Button>
// )
