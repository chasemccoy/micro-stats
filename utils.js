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

  console.log('fetching...')

  if (res.ok) {
    try {
      console.log('converting to json...')
      return await res.json()
    } catch (error) {
      console.error(error)
      return null
    }
  }

  return null
}

const error = function(res) {
  send(res, 400, 'Plase specify a type of data to retrieve.')
}

module.exports = { getJSONResponse, error }
