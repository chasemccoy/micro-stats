require('dotenv').config()
const { parse } = require('url')
const { error } = require('../utils')
const weather = require('../endpoints/weather')
const productivity = require('../endpoints/productivity')
const nowPlaying = require('../endpoints/nowPlaying')
const recentTracks = require('../endpoints/recentTracks')
const beer = require('../endpoints/beer')
const age = require('../endpoints/age')
const feedbin = require('../endpoints/feedbin')
const { hyperlistLinks, latestTweet } = require('../endpoints/twitter')

module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  const { pathname } = parse(req.url, true)
  if (!pathname) return error(res)

  switch (pathname) {
    case '/weather':
      const weatherData = await weather()
      res.json(weatherData)
      return
    case '/productivity':
      const productivityData = await productivity()
      res.json(productivityData)
      return
    case '/nowPlaying':
      const nowPlayingData = await nowPlaying()
      res.json(nowPlayingData)
      return
    case '/recentTracks':
      const recentTracksData = await recentTracks()
      res.json(recentTracksData)
      return
    case '/age':
      res.json(age()) 
      return
    case '/beer':
      const beerData = await beer()
      res.json(beer())
      return
    case '/feedbin':
      const feedbinData = await feedbin()
      res.json(feedbinData)
      return
    case '/hyperlist':
      const hyperlistData = await hyperlistLinks()
      res.json(hyperlistData)
      return
    case '/latestTweet':
      const latestTweetData = await latestTweet()
      res.json(latestTweetData)
      return
    default:
      return error(res)
  }
}