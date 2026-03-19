import Header from '../components/Header/Header'
import '../index.css'
import '../App.css'

export default function Layout({ children }) {
  return (
    <>
      <Header />
      {children}
    </>
  )
}
