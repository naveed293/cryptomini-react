import React, { useState, useEffect } from 'react'

const News = () => {
  const [news, setNews] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate API call with realistic mock data
    const loadNews = () => {
      const mockNewsData = [
        {
          id: 1,
          title: "Bitcoin ETF Approval Expected This Week",
          description: "Financial analysts predict SEC approval could trigger massive institutional investment in Bitcoin markets worldwide.",
          source: "Bloomberg Crypto",
          date: "2024-01-15",
          url: "",
          image: "/src/assets/Bitcoin.jpg"
        },
        {
          id: 2,
          title: "Ethereum Dencun Upgrade Live - Gas Fees Drop 90%",
          description: "Major Ethereum upgrade successfully implemented, dramatically reducing transaction costs for Layer 2 solutions.",
          source: "CoinDesk",
          date: "2024-01-14",
          url: "#",
          image: "/src/assets/Ethereum.jpg"
        },
        {
          id: 3,
          title: "Binance Launches New Regulatory Framework",
          description: "World's largest exchange announces comprehensive compliance program across 140+ countries with enhanced KYC.",
          source: "Crypto News",
          date: "2024-01-14",
          url: "#",
          image: "/src/assets/Binance.jpg"
        },
        {
          id: 4,
          title: "DeFi Total Value Locked Reaches $200B",
          description: "Decentralized finance protocols see unprecedented growth in user deposits and institutional participation.",
          source: "DeFi Pulse",
          date: "2024-01-13",
          url: "#",
          image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?ixlib=rb-4.0.3&w=400&h=250&fit=crop"
        },
        {
          id: 5,
          title: "NFT Market Cap Grows 35% This Month",
          description: "Digital collectibles market shows strong recovery with increased trading volume and new artist collaborations.",
          source: "NFT Today",
          date: "2024-01-13",
          url: "#",
          image: "/src/assets/NTF.jpg"
        },
        {
          id: 6,
          title: "Central Banks Accelerate Digital Currency Plans",
          description: "Over 90% of central banks now actively researching CBDC implementations for future financial systems.",
          source: "IMF Report",
          date: "2024-01-12",
          url: "#",
          image: "/src/assets/Bank.jpg"
        },
        {
          id: 7,
          title: "Solana Network Hits 100M Daily Transactions",
          description: "High-speed blockchain achieves new milestone while maintaining low fees and fast confirmation times.",
          source: "TechCrunch",
          date: "2024-01-12",
          url: "#",
          image: "/src/assets/100M.jpg"
        },
        {
          id: 8,
          title: "Ripple Partners with Major European Banks",
          description: "Cross-border payment technology adopted by 15 European financial institutions for faster settlements.",
          source: "Financial Times",
          date: "2024-01-11",
          url: "#",
          image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&w=400&h=250&fit=crop"
        },
        {
          id: 9,
          title: "Web3 Gaming Projects Raise $500M in Funding",
          description: "Blockchain gaming sector attracts massive venture capital investment despite market conditions.",
          source: "VentureBeat",
          date: "2024-01-11",
          url: "#",
          image: "/src/assets/500M.jpg"
        }
      ]

      setNews(mockNewsData)
      setLoading(false)
    }

    // Simulate network delay
    setTimeout(loadNews, 1000)
  }, [])

  if (loading) {
    return <div className="loading">Loading latest cryptocurrency news...</div>
  }

  return (
    <div>
      <div className="page-header">
        <h1>Crypto News</h1>
        <p>Latest cryptocurrency news and market updates</p>
      </div>

      <div className="news-grid">
        {news.map((item) => (
          <div key={item.id} className="news-card">
            <div className="news-image">
              <img src={item.image} alt={item.title} />
            </div>
            <div className="news-content">
              <h3 className="news-title">
                {item.title}
              </h3>
              <p className="news-summary">
                {item.description}
              </p>
              <div className="news-meta">
                <span className="news-source">{item.source}</span>
                <span className="news-date">{item.date}</span>
              </div>
              <a 
                href={item.url} 
                className="news-link"
                onClick={(e) => e.preventDefault()}
              >
                Read Full Story →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default News