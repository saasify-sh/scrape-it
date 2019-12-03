import scrapeIt, { ScrapeOptions } from 'scrape-it'

/**
 * Scrapes a URL using the [scrape-it](https://github.com/IonicaBizau/scrape-it#documentation) API
 *
 * @param url - Link to URL to scrape.
 * @param opts - Scraping options as described in the [scrape-it readme](https://github.com/IonicaBizau/scrape-it#documentation)
 */
export default async (url: string, opts: ScrapeOptions): Promise<object> => {
  const { data } = await scrapeIt(url, opts)

  return data
}
