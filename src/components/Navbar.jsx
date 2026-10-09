import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="logo">
          CryptoMini
        </Link>
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/coins">All Coins</Link>
          </li>
          <li>
            <Link to="/news">News</Link> 
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar