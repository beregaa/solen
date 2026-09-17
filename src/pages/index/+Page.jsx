import { lazy, Suspense } from 'react'
import Hero from '../../components/Hero/Hero'
import Services from '../../components/Services/Services'
import WhyUs from '../../components/WhyUs/WhyUs'

const QualityPresentation = lazy(
  () => import('../../components/QualityPresentation/QualityPresentation')
)
const Countries = lazy(() => import('../../components/Countries/Countries'))

export default function Page() {
  return (
    <div className="wrapper">
      <Hero />
      <Services />
      <Suspense fallback={null}>
        <QualityPresentation />
        <WhyUs />
        <Countries />
      </Suspense>
    </div>
  )
}
