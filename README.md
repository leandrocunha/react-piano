# How run it

First we need install the dependencies.

```
$ npm install
```

Now we need up the GrapQL API

```
$ cd apollo-server && npm start
```

Let's go back to previous folder and in new terminal's window, start our devserver

```
$ cd .. && npm start
```

Now open your Google Chrome at http://localhost:8080/ and start play piano :D

. . .

# React Piano Task

Build a small piano application that can play sounds, as well as store and retrieve sequences of played keys (songs).

_If anything here is unclear or any questions come to your mind, don’t hesitate to contact us - we’re here for you!_

## Implementation instructions

- Focus on **clean, readable Code** and **Simplicity**
- Use **React** for the Frontend
- For the piano sounds you can use the [given files](#piano-sounds) files or any of your choice

## Minimum requirements

- Piano UI:
  - Clickable black and white keys, which play a sound when clicked
  - Visual feedback on touching the keys
- Song storage & playback functionality:
  - Show buttons to start/stop recording a sequence of keys
  - Enable defining a song title
  - Show a list of stored songs with title
  - Enable replaying stored songs

## Optional features

- Enable **correct timing** of played keys for recording & playing songs
- Store and retrieve the songs from a **GraphQL** server instead of from a local storage (sample server given here: [Apollo Server](apollo-server))

## Piano Sounds

The directory `grand-piano-mp3-sounds` contains sample sounds you can use for this task. Alternatively you can use sounds from `https://github.com/pffy/mp3-piano-sound` or other sample sounds of your preference.
