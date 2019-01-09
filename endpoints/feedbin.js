const { getJSONResponse } = require('../utils')

const feedbin = async function() {
  const data = await getJSONResponse(
    'https://api.feedbin.com/v2/entries.json', 
    {
      username: process.env.FEEDBIN_USER, 
      password: process.env.FEEDBIN_PASSWORD
    }
  )

  return data
}

module.exports = feedbin
