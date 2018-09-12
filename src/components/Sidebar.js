import React, { Component } from 'react';
import { connect } from 'react-redux';
import { mysongs } from './../connections';
import PlaySong from './PlaySong';

/** Sidebar is a smart component to fetch API and get the song's list. */
class Sidebar extends Component {
  componentDidMount() {
    const { dispatch } = this.props;

    mysongs().then(res =>
      dispatch({
        type: 'SONGS/LIST',
        payload: { ...res.data },
      })
    );
  }

  render() {
    const { mysongs } = this.props;

    return (
      <div className="Sidebar">
        <h2 className="Sidebar__Title">My Songs</h2>
        <ul className="Sidebar__Songs">
          {mysongs.map((song, i) => (
            <li className="Sidebar__Songs__Song" key={i}>
              <PlaySong {...song} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(Sidebar);
