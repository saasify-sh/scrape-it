# scrape-it

> A web scraping API for humans

<a href="https://scrape-it.saasify.sh">
  <img
    src="https://badges.saasify.sh"
    height="40"
    alt="Use Hosted API"
  />
</a>

## Quick Start

Welcome to the quick-start! Below are some examples for common ways of using the API via `cURL`.

Also be sure to check out the full reference of [API endpoints](https://scrape-it.saasify.sh/docs#tag/service).

### Intro

This API is a hosted version of the open source [scrape-it library](https://github.com/IonicaBizau/scrape-it), and the API usage is exactly the same. The examples here show how to use the same API via an endpoint.

### Scraping Hacker News

```sh
curl -X POST \
  'https://api.saasify.sh/1/call/dev/scrape-it@b2e60ee3/index' \
  -H 'content-type: application/json' \
  -d '{
  "url": "https://news.ycombinator.com",
  "opts": {
    "posts": {
      "listItem": ".athing",
      "data": {
        "title": ".storylink",
        "href": {
          "selector": ".storylink",
          "attr": "href"
        }
      }
    }
  }
}'
```

Returns a JSON payload

```json
{
  "posts": [
    {
      "title": "FBI designates FaceApp as counterintelligence threat [pdf]",
      "href": "https://www.democrats.senate.gov/..."
    },
    {
      "title": "0.30000000000000004",
      "href": "https://0.30000000000000004.com/"
    },
    ...
  ]
}
```

Hitting our public rate limit? Consider [upgrading](https://scrape-it.saasify.sh/pricing) to remove all rate limits.

## License

MIT © [Saasify](https://saasify.sh)
