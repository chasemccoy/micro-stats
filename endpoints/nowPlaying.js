const { getJSONResponse } = require('../utils')

const nowPlaying = async function() {
  const data = await getJSONResponse(
    'http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=chase_mccoy&api_key=419ac16cc2e1ad92a9520006a5d7c575&format=json'
  )

  const track = data.recenttracks.track[0]

  return {
    name: track.name,
    artist: track.artist['#text'],
    album: track.album['#text'],
  }
}

module.exports = nowPlaying
