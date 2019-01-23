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

  console.log('fetching...')
  var start = Date.now();

  const res = await fetch(url, authentication && { headers: headers })
  console.log('fetch done!')
  console.log('Fetch took', Date.now() - start, 'ms'); 

  if (res.ok) {
    try {
      console.log('converting to json...')
      console.log('getting text...')
      const text = await res.text()
      console.log('got the text, gonna parse it...')
      var start = Date.now();
      const json = JSON.parse(text)
      console.log('parsed it to JSON!')
      console.log('Took', Date.now() - start, 'ms');
      return json
    } catch (error) {
      console.error(error)
    }
  }

  return null
}

const error = function(res) {
  send(res, 400, 'Plase specify a type of data to retrieve.')
}

module.exports = { getJSONResponse, error }
