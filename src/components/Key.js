import React, { Component } from 'react';
import { connect } from 'react-redux';
import { keys, play } from './../utils';

class Key extends Component {
  constructor(props) {
    super(props);

    /** bind the playKey() function to click in a key and play note. */
    this.playKey = this.playKey.bind(this);
  }

  /** The playKey(key) is a function to play note and dispatch
   * a action to store it at Redux if the isRecording variable is enable.
   * @param string - The key value, represent the musical note.
   * @example
   * playKey('C')
   */
  playKey(key) {
    const { dispatch, recording } = this.props;
    const keysMap = keys();

    play(keysMap[key].file);
    recording.isRecording &&
      dispatch({ type: 'SONGS/RECORDING', payload: key });
  }

  render() {
    const { keySymbol } = this.props;
    return (
      <li
        className={`Keyboard__Wrapper__List__Key Keyboard__Wrapper__List__Key--${keySymbol}`}
        key={keySymbol}
      >
        <button
          className="Keyboard__Wrapper__List__Key__Button"
          onClick={() => this.playKey(keySymbol)}
        >
          {keySymbol}
        </button>
      </li>
    );
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(Key);
