import './App.css'
import Header from './components/Header/Header'
import { Routes, Route } from 'react-router-dom'
import routes from './route'
import { Helmet } from "react-helmet-async"

function App() {
  return (
    <>
      <Helmet>
        <script type="application/ld+json">
                      {`
{
 "@context": "https://schema.org",
 "@type": "HVACBusiness",
 "name": "Solen",
 "telephone": "+995599123456",
 "url": "https://solen.ge",
 "areaServed": "Tbilisi",
 "address": {
   "@type": "PostalAddress",
   "addressLocality": "Tbilisi",
   "addressCountry": "GE"
 }
}
`}
        </script>
        <title>ცენტრალური გათბობის მონტაჟი თბილისში | Solen</title>
        <meta name="description"
          content="ცენტრალური გათბობის მონტაჟი თბილისში. პროფესიონალური მონტაჟი, რადიატორები და გათბობის ქვაბები. უფასო კონსულტაცია და სწრაფი მომსახურება." />

        <link rel="canonical" href="https://solen.ge/" />
      </Helmet>

      <Header />

      <Routes>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Routes>
    </>
  )
}

export default App