
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './page/HomePage'
import ContactPage from './page/ContactPage'
import BlogPage from './page/BlogPage'
import AboutPage from './page/AboutPage'

function App() {
 

  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/about' element={<AboutPage />}></Route>
        <Route path='/contact' element={<ContactPage />}></Route>
        <Route path='/blog' element={<BlogPage />}></Route>
      </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
