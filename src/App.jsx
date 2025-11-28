import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Skills from './pages/Skills'
import Work from './pages/Work'
import About from './pages/About'
import Connect from './pages/Connect'

const App = () => {
  return (
<Router>
  <Navbar/>
  <Routes>
    <Route path='/' element={<Home/>}></Route>
       <Route path='/skills' element={<Skills/>}></Route>
         <Route path='/work' element={<Work/>}></Route>
          <Route path='/about' element={<About/>}></Route>
           
                <Route path='/connect' element={<Connect/>}></Route>
  </Routes>

  
  <Footer/>
</Router>
  )
}

export default App
