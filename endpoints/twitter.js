const { getJSONResponse } = require('../utils')
const Twitter = require('twitter-lite')


const twitterFavorites = async function() {
  const client = new Twitter({
    consumer_key: process.env.TWITTER_CONSUMER_KEY,
    consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
    access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
    access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
  })

  return client
    .get('favorites/list', {count: 100, tweet_mode: 'extended'})
    .then(results => {
      return results.filter(result => 
        !result.is_quote_status &&
        result.entities.urls.length > 0
      )
      .map(result => 
        result
      )
    })
    .catch(console.error)
}

module.exports = twitterFavorites
