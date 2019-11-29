import scrapeIt, { ScrapeOptions } from 'scrape-it'

export default async (url: string, opts: ScrapeOptions): Promise<object> => {
  const { data } = await scrapeIt(url, opts)

  return data
}
