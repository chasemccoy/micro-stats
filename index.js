require('dotenv').config()
const { parse } = require('url')
const { error } = require('./utils')
const weather = require('./endpoints/weather')
const productivity = require('./endpoints/productivity')
const nowPlaying = require('./endpoints/nowPlaying')
const recentTracks = require('./endpoints/recentTracks')
const beer = require('./endpoints/beer')
const age = require('./endpoints/age')
const feedbin = require('./endpoints/feedbin')
const { hyperlistLinks, latestTweet } = require('./endpoints/twitter')

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
    case '/recentTracks':
      return recentTracks()
    case '/age':
      return age()
    case '/beer':
      return beer()
    case '/feedbin':
      return feedbin()
    case '/hyperlist':
      return hyperlistLinks()
    case '/latestTweet':
      return latestTweet()
    default:
      return error(res)
  }
}
