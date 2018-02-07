const { parse } = require('url')
const got = require('got');

const hello = () => 'Hello world!'

const weather = async () => {
	const { body: response } = await got('https://api.darksky.net/forecast/47b4c46a2eba602b069144b4b6310e09/41.8781,87.6298', {json: true});

	return response.currently.summary
}

module.exports = async (req, res) => {
  const { query: { type } } = parse(req.url, true)

  if (!type) return hello()

	switch (type) {
		case 'weather':
			return weather()
		default:
			return hello()
	}
}
