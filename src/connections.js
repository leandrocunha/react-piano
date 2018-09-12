/** apiURL is an object containing the map with api's address.
 * Maybe it can be moved to a env file */
const apiURL = {
  localhost: 'http://localhost:4000',
  production: 'https://someapi.flowkey.com',
};

/** Just a simple constant to switch environment easily. */
const API = apiURL.localhost;

/** mysongs() is function to fetch my saved songs
 * @example mysongs().then(() => //do something )
 */
export const mysongs = () => {
  const url = `${API}/?query=query%20%7B%0A%20%20songs%20%7B%0A%20%20%20%20id%0A%20%20%20%20title%0A%20%20%20%20keysPlayed%0A%20%20%7D%0A%7D%0A`;
  return fetch(url).then(res => res.json());
};

/** save() is a function to save my songs
 * @param {object} params - Object required with title and keys played
 * @example
 * const params = {title: 'Title of song', keysPlayed: ['C', 'D', 'E']}
 * save(params).then(() => //do something)
 */
export const save = params => {
  const url = `${API}/`;
  const headers = {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify({
      operationName: null,
      query: `mutation { addSong(title: ${String(
        `"${params.title}"`
      )}, keysPlayed: [${params.keys.map(k =>
        String(`"${k}"`).toUpperCase()
      )}]) { title keysPlayed } }`,
      variables: {},
    }),
  };
  return fetch(url, headers).then(res => res.json());
};
