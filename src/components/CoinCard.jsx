import React from 'react'
import { useNavigate } from 'react-router-dom'

const CoinCard = ({ coin }) => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate(`/coin/${coin.id}`)
  }

  const formatPrice = (price) => {
    if (price < 1) {
      return `$${price.toFixed(4)}`
    }
    return `$${price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
  }

  return (
    <div className="coin-card" onClick={handleClick}>
      <div className="coin-header">
        <div className="coin-title-section">
          <div className="coin-icon">
            <img 
              src={coin.image} 
              alt={coin.name}
              className="coin-image"
            />
          </div>
          <div>
            <div className="coin-name">{coin.name}</div>
            <div className="coin-symbol">{coin.symbol.toUpperCase()}</div>
          </div>
        </div>
        <div className={`coin-change ${coin.price_change_percentage_24h >= 0 ? 'change-positive' : 'change-negative'}`}>
          {coin.price_change_percentage_24h?.toFixed(2)}%
        </div>
      </div>
      <div className="coin-price">{formatPrice(coin.current_price)}</div>
      <div style={{ color: '#94a3b8', fontSize: '0.9rem' }}>
        Market Cap: ${coin.market_cap?.toLocaleString()}
      </div>
    </div>
  )
}

export default CoinCard