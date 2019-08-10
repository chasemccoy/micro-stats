# `micro-stats`

A tiny Node.js microservice to grab some stats from around the web.


## Deployment

Deploying `micro-stats` is one click away:

[![Deploy to now](https://deploy.now.sh/static/button.svg)](https://deploy.now.sh/?repo=https://github.com/chasemccoy/micro-stats)


## Usage

**Available Endpoints:**
* `/weather`: Returns the current conditions for Chicago, IL in the format `{summary, temperature}`.
* `/productivity`: Returns the productivity pulse score from RescueTime.
* `/nowPlaying`: Returns an object representing the current track playing from Spotify in the format `{name, artist, album}`.
* `/recentTracks`: Returns an array of objects representing recently played tracks from Spotify in the format `{name, artist, album, image}`.
* `/beer`: Returns information about the last beer I drank from Untappd in the format `{beer, brewery}`.
* `/age`: Returns my current age.
* `/feedbin`: Returns an array of recent unread entries from my Feedbin account.
* `/latestTweet`: Returns the text of my latest non-reply tweet that does not contain a URL.


## Development

```sh
git clone git@github.com:chasemccoy/micro-stats.git
yarn run dev
```

The local server address will be pasted to your clipboard.