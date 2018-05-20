const { getJSONResponse } = require('../utils')

const beer = async function() {
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

module.exports = beer
