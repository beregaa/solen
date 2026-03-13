// App.jsx
import './App.css'
import Header from './components/Header/Header'
import { Routes, Route } from 'react-router-dom'
import routes from './route'



function App() {
  return (
    <>
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