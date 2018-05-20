const got = require('got')
const { send } = require('micro')

const getJSONResponse = async function(url) {
	const { body: response } = await got(url, { json: true })
  return response
}

const error = function(res) {
	send(res, 400, 'Plase specify a type of data to retrieve.')
}


module.exports = {getJSONResponse, error}
