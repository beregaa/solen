// Regenerates public/sitemap.xml from the product data.
// Runs automatically before every `npm run build`.
import { writeFileSync } from 'node:fs'
import inventoryData, { countryNames } from '../src/data/inventoryData.js'

const SITE = 'https://solen.ge'
const today = new Date().toISOString().slice(0, 10)

const urls = [
  { loc: '/', priority: '1.0' },
  { loc: '/gallery', priority: '0.7' },
  ...Object.keys(countryNames).map((c) => ({ loc: `/inventory/${c}`, priority: '0.8' })),
  ...inventoryData.map((p) => ({ loc: `/inventory/${p.country}/${p.slug}`, priority: '0.7' })),
]

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map((u) => `  <url>\n    <loc>${SITE}${u.loc}</loc>\n    <lastmod>${today}</lastmod>\n    <priority>${u.priority}</priority>\n  </url>`)
  .join('\n')}
</urlset>
`

writeFileSync(new URL('../public/sitemap.xml', import.meta.url), xml)
console.log(`sitemap.xml: ${urls.length} URLs`)
