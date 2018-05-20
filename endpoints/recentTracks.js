const { getJSONResponse } = require('../utils')

const recentTracks = async function() {
  const data = await getJSONResponse(
    'http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=chase_mccoy&api_key=419ac16cc2e1ad92a9520006a5d7c575&format=json&limit=200'
  )

  const tracks = data.recenttracks.track

  return tracks.map(track => (
    {
      name: track.name,
      artist: track.artist['#text'],
      album: track.album['#text'],
      image: track.image[2]['#text']
    }
  )).filter((track, index, array) =>
    index === array.findIndex((item) => (
      item.name === track.name && item.artist === track.artist
    ))
  )
}

module.exports = recentTracks
