import React, {Component} from 'react';

class Artist extends Component {
  render() {
    const {name, img, bio} = this.props;
    // const name = this.props.name;
    // img = this.props.img;
    // bio = this.props.bio; 
    const songs = this.props.songs.map((song, index) => {
      return <li key={index}>{song}</li>
    })
    return(
      <div className="music-card">
        <div>
          <img src={img} alt={name}/>
        </div>
        <div>
          <h3 className="music-title-artist">{name}</h3>
          <ul>{songs}</ul>
          <p>{bio}</p>
        </div>

      </div>
    )
  }
}

export default Artist; 