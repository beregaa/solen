import Hero from './components/Hero/Hero'
import Services from './components/Services/Services'
import Countries from './components/Countries/Countries'
import QualityPresentation from './components/QualityPresentation/QualityPresentation'
import InventoryPage from './pages/inventory/inventory'
import GalleryPage from './pages/gallery/gallery'
import Footer from './components/Footer/Footer'


const routes = [
  {
    path: '/',
    element: (
      <div className='wrapper'>
        <Hero />
        <Services />
        <QualityPresentation />
        <Countries />
        <Footer/>

      </div>
    )
  },
  {
    path: '/inventory/:country',
    element: <InventoryPage />
  } ,
  {
    path: '/gallery',
    element: <GalleryPage />
  }
]

export default routes