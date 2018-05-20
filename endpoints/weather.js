const { getJSONResponse } = require('../utils')

const weather = async function() {
  const data = await getJSONResponse(
    'https://api.darksky.net/forecast/47b4c46a2eba602b069144b4b6310e09/41.883,-87.6291'
  )

  return {
    summary: data.currently.summary,
    temperature: `${data.currently.temperature}°`,
  }
}

module.exports = weather
