const initialState = {
  mysongs: [],
  recording: { isRecording: false, keys: [] },
};

const Songs = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'SONGS/LIST':
      return { ...state, mysongs: payload.songs };

    case 'SONGS/RECORDING':
      state.recording.keys.push(payload);
      return {
        ...state,
        recording: {
          ...state.recording,
        },
      };

    case 'SONGS/SAVE/SUCCESS':
      return { ...state };

    case 'SONGS/TITLE':
      return {
        ...state,
        recording: { ...state.recording, title: payload },
      };

    case 'SONGS/TOOGLERECORDING':
      return state.recording.isRecording
        ? {
            ...state,
            recording: {
              keys: [],
              isRecording: !state.recording.isRecording,
            },
          }
        : {
            ...state,
            recording: {
              ...state.recording,
              isRecording: !state.recording.isRecording,
            },
          };

    default:
      return state;
  }
};

export default Songs;
