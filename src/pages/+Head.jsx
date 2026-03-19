export default function Head() {
  return (
    <>
      <link rel="canonical" href="https://solen.ge/" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'HVACBusiness',
            name: 'Solen',
            telephone: '+995599123456',
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
