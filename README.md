# `micro-stats`

A tiny Node.js microservice to grab some stats from around the web.


## Deployment

Deploying `micro-stats` is one click away:

[![Deploy to now](https://deploy.now.sh/static/button.svg)](https://deploy.now.sh/?repo=https://github.com/chasemccoy/micro-stats)


## Usage

**Available Endpoints:**
* `/?type=weather`: Returns the current conditions for Chicago, IL.
* `/?type=productivity`: Returns the productivity pulse score from RescueTime.
* `/?type=nowPlaying`: Returns an object representing the current song playing from Spotify in the format `{name, artist, album}`.


## Development

```sh
git clone git@github.com:chasemccoy/micro-stats.git
yarn run dev
```

The local server address will be pasted to your clipboard.


## License

Copyright (c) 2017 Chase McCoy, licensed under the MIT license. See [LICENSE](LICENSE) for more information.
