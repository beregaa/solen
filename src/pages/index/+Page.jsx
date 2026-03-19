import { lazy, Suspense } from 'react'
import Hero from '../../components/Hero/Hero'
import Services from '../../components/Services/Services'

const QualityPresentation = lazy(
  () => import('../../components/QualityPresentation/QualityPresentation')
)
const Countries = lazy(() => import('../../components/Countries/Countries'))
const Footer = lazy(() => import('../../components/Footer/Footer'))

export default function Page() {
  return (
    <div className="wrapper">
      <Hero />
      <Services />
      <Suspense fallback={null}>
        <QualityPresentation />
        <Countries />
        <Footer />
      </Suspense>
    </div>
  )
}
