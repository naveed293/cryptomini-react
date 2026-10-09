import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

const CoinDetails = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [coin, setCoin] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchCoinDetails = async () => {
      try {
        setLoading(true)
        const response = await fetch(
          `https://api.coingecko.com/api/v3/coins/${id}`
        )
        
        if (!response.ok) {
          throw new Error('Failed to fetch coin details')
        }
        
        const data = await response.json()
        setCoin(data)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchCoinDetails()
  }, [id])

  const formatNumber = (num) => {
    if (!num) return 'N/A'
    return num.toLocaleString()
  }

  const formatPrice = (price) => {
    if (!price) return 'N/A'
    if (price < 1) {
      return `$${price.toFixed(6)}`
    }
    return `$${price.toFixed(2)}`
  }

  if (loading) {
    return <div className="loading">Loading coin details...</div>
  }

  if (error) {
    return <div className="error">Error: {error}</div>
  }

  if (!coin) {
    return <div className="error">Coin not found</div>
  }

  return (
    <div>
      <button onClick={() => navigate(-1)} className="back-button">
        ← Back to Coins
      </button>

      <div className="coin-details">
        <div className="detail-header">
          <h1>{coin.name} ({coin.symbol?.toUpperCase()})</h1>
          <p>Rank #{coin.market_cap_rank || 'N/A'}</p>
        </div>

        <div className="detail-grid">
          <div className="detail-item">
            <div className="detail-label">Current Price</div>
            <div className="detail-value">
              {formatPrice(coin.market_data?.current_price?.usd)}
            </div>
          </div>

          <div className="detail-item">
            <div className="detail-label">Market Cap</div>
            <div className="detail-value">
              ${formatNumber(coin.market_data?.market_cap?.usd)}
            </div>
          </div>

          <div className="detail-item">
            <div className="detail-label">24h Change</div>
            <div 
              className="detail-value" 
              style={{ 
                color: coin.market_data?.price_change_percentage_24h >= 0 ? '#10b981' : '#ef4444' 
              }}
            >
              {coin.market_data?.price_change_percentage_24h?.toFixed(2)}%
            </div>
          </div>

          <div className="detail-item">
            <div className="detail-label">24h High</div>
            <div className="detail-value">
              {formatPrice(coin.market_data?.high_24h?.usd)}
            </div>
          </div>

          <div className="detail-item">
            <div className="detail-label">24h Low</div>
            <div className="detail-value">
              {formatPrice(coin.market_data?.low_24h?.usd)}
            </div>
          </div>

          <div className="detail-item">
            <div className="detail-label">Trading Volume</div>
            <div className="detail-value">
              ${formatNumber(coin.market_data?.total_volume?.usd)}
            </div>
          </div>
        </div>

        <div style={{ marginTop: '2rem' }}>
          <h3 style={{ color: '#60a5fa', marginBottom: '1rem' }}>About {coin.name}</h3>
          <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>
            {coin.description?.en 
              ? coin.description.en.split('. ')[0] + '.' 
              : 'No description available.'}
          </p>
        </div>
      </div>
    </div>
  )
}

export default CoinDetails