const { parse } = require('url')
const { send } = require('micro')
const got = require('got')

const getJSONResponse = async url => {
  const { body: response } = await got(url, { json: true })
  return response
}

const error = res => {
  send(res, 400, 'Plase specify a type of data to retrieve.')
}

const weather = async () => {
  const data = await getJSONResponse(
    'https://api.darksky.net/forecast/47b4c46a2eba602b069144b4b6310e09/41.883,-87.6291'
  )

  return {
    summary: data.currently.summary,
    temperature: `${data.currently.temperature}°`,
  }
}

const productivity = async () => {
  const data = await getJSONResponse(
    'https://www.rescuetime.com/anapi/daily_summary_feed?key=B63oGksutbJmDQDM6LkXh5b074UJTJEkprmLqdyX'
  )

  return data[0].productivity_pulse
}

const nowPlaying = async () => {
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

const beer = async () => {
  const data = await getJSONResponse(
    'https://api.untappd.com/v4/user/checkins/chasemccoy?client_id=E733A1F68516DE96F3B9DC9098F1634907662208&client_secret=1EC1F4DE9FEF6AAACD2FD8910CA190E61737CC96'
  )

  const checkins = data.response.checkins.items
  const lastCheckin = checkins[0]
  const beer = lastCheckin.beer.beer_name
  const brewery = lastCheckin.brewery.brewery_name

  return {
    beer: beer,
    brewery: brewery,
  }
}

const age = async () => {
  const dateOfBirth = new Date('1995-05-04 00:00:00')
  const ageDifference = Date.now() - dateOfBirth.getTime()
  const ageDate = new Date(ageDifference)
  return `${Math.abs(ageDate.getUTCFullYear() - 1970)} years`
}

module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  const { pathname } = parse(req.url, true)

  if (!pathname) return error(res)

  switch (pathname) {
    case '/weather':
      return weather()
    case '/productivity':
      return productivity()
    case '/nowPlaying':
      return nowPlaying()
    case '/age':
      return age()
    case '/beer':
      return beer()
    default:
      return error(res)
  }
}
