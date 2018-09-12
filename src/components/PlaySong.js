import React, { Component } from 'react';
import { connect } from 'react-redux';
import { keys, play } from './../utils';

class PlaySong extends Component {
  constructor(props) {
    super(props);
    this.playSong = this.playSong.bind(this);
  }

  playSong(song) {
    const keysMap = keys();

    for (let index = 0; index < song.length; index++) {
      setTimeout(() => {
        const key = keysMap[song[index]];
        play(key.file);
      }, index * 500);
    }
  }

  render() {
    const { keysPlayed, title } = this.props;
    return (
      <button
        className="Sidebar__Songs__Song__Button"
        onClick={() => this.playSong(keysPlayed)}
      >
        {title}
      </button>
    );
  }
}

export default connect()(PlaySong);
