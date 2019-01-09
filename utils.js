const { send } = require('micro')
const fetch = require('node-fetch')

const getJSONResponse = async function(url, authentication) {
  var headers = new fetch.Headers()
  if (authentication) {
    headers.set(
      'Authorization',
      'Basic ' +
        Buffer.from(
          authentication.username + ':' + authentication.password
        ).toString('base64')
    )
  }

  const res = await fetch(url, authentication && { headers: headers })
  return await res.json()
}

const error = function(res) {
  send(res, 400, 'Plase specify a type of data to retrieve.')
}

module.exports = { getJSONResponse, error }
