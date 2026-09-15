export function Head(pageContext) {
  const { urlPathname } = pageContext
  

  const canonicalUrl = `https://solen.ge${urlPathname === '/' ? '/' : urlPathname}`

  return (
    <>
      <link rel="canonical" href={canonicalUrl} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'HVACBusiness',
            name: 'Solen',
            telephone: '+995568883279',
            url: 'https://solen.ge',
            areaServed: 'Tbilisi',
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'Tbilisi',
              addressCountry: 'GE',
            },
          }),
        }}
      />
    </>
  )
}