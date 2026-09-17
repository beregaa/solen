import { usePageContext } from 'vike-react/usePageContext'
import reviewsData from '../data/reviewsData'

export function Head() {
  const { urlPathname = '/' } = usePageContext()
  const canonicalUrl = `https://solen.ge${urlPathname}`

  return (
    <>
      <meta name="theme-color" content="#ffffff" />
      <link rel="icon" href="/favicon.ico" />
      <link rel="canonical" href={canonicalUrl} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://solen.ge/radiator.webp" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Noto+Sans+Georgian:wght@400;500;600;700&display=swap"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'HVACBusiness',
            name: 'Solen',
            telephone: '+995568883279',
            url: 'https://solen.ge',
            image: 'https://solen.ge/logo.webp',
            areaServed: 'Tbilisi',
            sameAs: ['https://www.facebook.com/profile.php?id=100085867923367'],
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'Tbilisi',
              addressCountry: 'GE',
            },
            // Real Facebook reviews from src/data/reviewsData.js (added only when there are some)
            ...(reviewsData.length > 0 && {
              review: reviewsData.map((r) => ({
                '@type': 'Review',
                author: { '@type': 'Person', name: r.name },
                datePublished: r.date,
                reviewBody: r.text,
                publisher: { '@type': 'Organization', name: 'Facebook' },
                ...(r.url && { url: r.url }),
              })),
            }),
          }),
        }}
      />
    </>
  )
}
