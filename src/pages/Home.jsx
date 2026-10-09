import React, { useState, useEffect } from 'react'
import CoinCard from '../components/CoinCard'

const Home = () => {
  const [coins, setCoins] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchTopCoins = async () => {
      try {
        setLoading(true)
        const response = await fetch(
          'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=5&page=1'
        )
        
        if (!response.ok) {
          throw new Error('Failed to fetch data')
        }
        
        const data = await response.json()
        setCoins(data)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchTopCoins()
  }, [])

  if (loading) {
    return <div className="loading">Loading top cryptocurrencies...</div>
  }

  if (error) {
    return <div className="error">Error: {error}</div>
  }

  return (
    <div>
      <div className="page-header">
        <h1>Top 5 Cryptocurrencies</h1>
        <p>Live market data for the top cryptocurrencies by market cap</p>
      </div>
      
      <div className="coin-grid">
        {coins.map(coin => (
          <CoinCard key={coin.id} coin={coin} />
        ))}
      </div>
    </div>
  )
}

export default Home