import { useData } from 'vike-react/useData'
import { countryNames } from '../../../../data/inventoryData'

// Product info for Google / AI (price in GEL, availability, seller)
export function Head() {
  const { product: p } = useData()
  const url = `https://solen.ge/inventory/${p.country}/${p.slug}`

  return (
    <>
      <meta property="og:title" content={`${p.name} — ${p.price} ₾`} />
      <meta property="og:image" content={`https://solen.ge${p.image}`} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Product',
            name: p.name,
            image: `https://solen.ge${p.image}`,
            url,
            countryOfOrigin: countryNames[p.country],
            ...(p.description && { description: p.description }),
            offers: {
              '@type': 'Offer',
              price: p.price,
              priceCurrency: 'GEL',
              availability: 'https://schema.org/InStock',
              url,
              seller: { '@type': 'Organization', name: 'Solen' },
            },
          }),
        }}
      />
    </>
  )
}
