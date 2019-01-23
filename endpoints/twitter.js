const { getJSONResponse } = require('../utils')
const Twitter = require('twitter-lite')

const client = new Twitter({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
})

const getTweets = async (endpoint, options) => {
  return await client.get(endpoint, {...options, count: 200, tweet_mode: 'extended'})
}

const hyperlistLinks = async function() {
  let results = await getTweets('lists/statuses', {slug: 'hyperlist', owner_screen_name: 'chase_mccoy'})
  const maxID = results[results.length - 1].id
  const moreResults = await getTweets('lists/statuses', {slug: 'hyperlist', owner_screen_name: 'chase_mccoy'})
  results = [...results, ...moreResults]

  results = results.filter(result => 
    !result.is_quote_status &&
    result.entities.urls.length > 0
  )

  const promises = results.map(async (result) => {
    const url = result.entities.urls[0].expanded_url
    let response = null

    try {
      response = await getJSONResponse(`https://chs-open-graph.now.sh/?url=${url}`)
    } catch (error) {
      console.error(error)
    }

    return (
      {
        title: response ? response.title : undefined,
        url: url,
        description: response ? response.description : undefined,
        twitter_id: result.id_str,
        twitter_username: result.user.screen_name
      }
    )
  })

  results = await Promise.all(promises)
  return results
}

module.exports = hyperlistLinks
