import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Coins from './pages/Coins'
import CoinDetails from './pages/CoinDetails'
import News from './pages/News'

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/coins" element={<Coins />} />
            <Route path="/coin/:id" element={<CoinDetails />} />
            <Route path="/news" element={<News />} /> 
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App