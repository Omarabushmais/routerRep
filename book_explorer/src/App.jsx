// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './Components/NavBar'
import Home from './Pages/Home'
import Books from './Pages/Books'
import Footer from './Components/Footer'
import BookDetails from './Pages/BookDetails'

import { Routes, Route, Link, Outlet } from 'react-router-dom';
 

function App() {

  return (
    <div>
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Books" element={<Books />} />
        <Route path="/BookDetails/:id" element={<BookDetails />} />


      </Routes>

      <Footer />
    </div>
  )
}

export default App
