import scrapeIt, { ScrapeOptions } from 'scrape-it'

/**
 * Scrapes a URL using the [scrape-it](https://github.com/IonicaBizau/scrape-it#documentation) API
 *
 * @param url - URL to scrape
 * @param opts - Scraping options as described in the [scrape-it readme](https://github.com/IonicaBizau/scrape-it#documentation)
 */
export default async function scrape(
  url: string,
  opts: object
): Promise<object> {
  const { data } = await scrapeIt(url, opts as ScrapeOptions)

  return data
}
