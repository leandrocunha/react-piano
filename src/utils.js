/** keys() is a function with a map of musical
 *  notes to build the simple piano and
 * associate the sound files.
 * @returns A object with the map of keyboard keys.
 */
export const keys = () => ({
  C: { name: 'do', file: 'C1.mp3' },
  C7: { name: 'do#', file: 'C7.mp3' },
  D: { name: 're', file: 'D1.mp3' },
  D7: { name: 're#', file: 'D7.mp3' },
  E: { name: 'mi', file: 'E1.mp3' },
  F: { name: 'fa', file: 'F1.mp3' },
  F7: { name: 'fa7', file: 'F7.mp3' },
  G: { name: 'sol', file: 'G1.mp3' },
  G7: { name: 'sol7', file: 'G7.mp3' },
  A: { name: 'la', file: 'A1.mp3' },
  A7: { name: 'la7', file: 'A7.mp3' },
  B: { name: 'si', file: 'B1.mp3' },
});

/** play() is a function to play sound, that should
 * be passed by parameter.
 * @param string - The name of associated file
 * @example play('C1.mp3')
 */
export const play = file => {
  const mp3 = new Audio(`grand-piano-mp3-sounds/${file}`);
  mp3.play();
};
