const { getJSONResponse } = require('../utils')

const productivity = async function() {
  const data = await getJSONResponse(
    'https://www.rescuetime.com/anapi/daily_summary_feed?key=B63oGksutbJmDQDM6LkXh5b074UJTJEkprmLqdyX'
  )

  return data[0].productivity_pulse
}

module.exports = productivity
