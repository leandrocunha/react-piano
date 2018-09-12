import React, { Component } from 'react';
import { connect } from 'react-redux';
import { mysongs, save } from './../connections';

class Controls extends Component {
  constructor(props) {
    super(props);

    /** Bind saveTitle() function save the title of your song
     * on input change.
     */
    this.saveTitle = this.saveTitle.bind(this);

    /** Bind toggleRecording() function to switch on/off recording. */
    this.toggleRecording = this.toggleRecording.bind(this);
  }

  /** saveTitle() is a function to dispatch a action passing tha title
   * by parameter and store it at Redux.
   * @param string - The title of your song.
   * @example saveTitle('My first song)
   */
  saveTitle(title) {
    const { dispatch } = this.props;
    dispatch({ type: 'SONGS/TITLE', payload: title });
  }

  /** toggleRecording() is a function to switch on/of recording
   * and do a POST to API to save it if isRecording variable
   * is enable.
   */
  toggleRecording() {
    const { dispatch, recording } = this.props;
    const params = { ...recording };

    dispatch({ type: 'SONGS/TOOGLERECORDING' });

    recording.isRecording &&
      save(params).then(() =>
        mysongs().then(res =>
          dispatch({
            type: 'SONGS/LIST',
            payload: { ...res.data },
          })
        )
      );
  }

  render() {
    const { recording } = this.props;

    return (
      <div className="Controls">
        <button
          className="Controls__Button"
          onClick={this.toggleRecording}
        >
          {recording.isRecording
            ? 'stop and save'
            : 'start recording'}
        </button>
        {recording.isRecording && (
          <input
            className="Controls__Input"
            onChange={({ target }) => this.saveTitle(target.value)}
            placeholder="your song title"
            type="text"
          />
        )}
      </div>
    );
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(Controls);
