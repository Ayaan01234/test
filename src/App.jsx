import React from 'react'
import { BrowserRouter as Router ,Routes,Route } from 'react-router-dom'
import Navbar from './components/navbar'
import Home from './pages.jsx/Home'
import About from './pages.jsx/About'
import Contact from './pages.jsx/Contact'
import Herosection from './components/Herosection'

const App = () => {
  return (
    <Router>
    <Navbar/>
    <Herosection/>
    <Routes>

     <Route path="/Home" element={<Home/>}/>
     <Route path="/about" element={<About/>}/>
     <Route path="/contact" element={<Contact/>}/>



    </Routes>
    
   </Router>
  )
}

export default App
