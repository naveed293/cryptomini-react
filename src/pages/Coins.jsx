import React, { useState, useEffect } from 'react'
import CoinCard from '../components/CoinCard'

const Coins = () => {
  const [coins, setCoins] = useState([])
  const [filteredCoins, setFilteredCoins] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchAllCoins = async () => {
      try {
        setLoading(true)
        const response = await fetch(
          'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1'
        )
        
        if (!response.ok) {
          throw new Error('Failed to fetch data')
        }
        
        const data = await response.json()
        setCoins(data)
        setFilteredCoins(data)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchAllCoins()
  }, [])

  useEffect(() => {
    const filtered = coins.filter(coin =>
      coin.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    setFilteredCoins(filtered)
  }, [searchTerm, coins])

  if (loading) {
    return <div className="loading">Loading cryptocurrencies...</div>
  }

  if (error) {
    return <div className="error">Error: {error}</div>
  }

  return (
    <div>
      <div className="page-header">
        <h1>All Cryptocurrencies</h1>
        <p>Browse through the top 20 cryptocurrencies</p>
      </div>

      <div className="search-container">
        <input
          type="text"
          placeholder="Search cryptocurrencies..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
      </div>

      <div className="coin-grid">
        {filteredCoins.map(coin => (
          <CoinCard key={coin.id} coin={coin} />
        ))}
      </div>

      {filteredCoins.length === 0 && (
        <div className="error" style={{ color: '#94a3b8' }}>
          No cryptocurrencies found matching your search.
        </div>
      )}
    </div>
  )
}

export default Coins