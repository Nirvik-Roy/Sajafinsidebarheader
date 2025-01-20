import React from 'react';
import "./Statistics.css";
import xauusd_img from '../../../assets/image (7).png'
import Bitcoin_img from '../../../assets/image (8).png'
import ngas_img from '../../../assets/image (9).png'
import dogusd_img from '../../../assets/image (10).png'
import green_graph from '../../../assets/Group 4534361.png'
import red_graph from '../../../assets/Group 4534362.png'

const Statistics = () => {
  const tradeData = [
    {
      name: 'XAUUSD',
      symbol: 'XMR',
      price: '$18,783.33',
      change: '45%',
      trend: 'up',
      logo: xauusd_img,
      graph: green_graph,
    },
    {
      name: 'Bitcoin',
      symbol: 'BTC',
      price: '$24,783.33',
      change: '45%',
      trend: 'up',
      logo: Bitcoin_img,
      graph: green_graph,
    },
    {
      name: 'NGAS',
      symbol: 'XMR',
      price: '$18,783.33',
      change: '45%',
      trend: 'down',
      logo: ngas_img,
      graph: red_graph,
    },
    {
      name: 'DOGUSD',
      symbol: 'XMR',
      price: '$18,783.33',
      change: '45%',
      trend: 'up',
      logo: dogusd_img,
      graph: green_graph
    },
  ];
  return (
    <>
      <div className="dashboard-container">
        <div className="current-completed-section">
          <div className="current-trade">
            <div className="current-trade-header">
              <h2 className='current-trade-heading'>Current Trade</h2>
              <div className="current-trade-btn">Current</div>
            </div>


            {/* Trade List */}
      <div className="trade-list">
        {tradeData.map((trade, index) => (
          <div key={index} className={`trade-item ${trade.trend}`}>
            {/* Icon and Details */}
            <div className="trade-info">
              <div className="trade-icon">
                <img
                  src={trade.logo}
                  
                />
              </div>
              <div>
              
                <h3 className="trade-name">{trade.name}</h3>
                <p className="trade-symbol">{trade.symbol}</p>
              </div>
            </div>

            {/* Price and Change */}
            <div className="trade-price">
            <img src={trade.graph} alt="" />
            <div>
            <h4>{trade.price}</h4>
            <p className={`trade-change ${trade.trend}`}>{trade.change} This Week</p>
            </div>
            </div>

            {/* Chart and Options */}
            <div className="trade-actions">
              <div className={`chart ${trade.trend}`}></div>
              <button className="action-btn">
                <i className="fa fa-eye"></i>
              </button>
            </div>
          </div>
        ))}
      </div>
          </div>
          <div className="completed-trade">

          </div>
        </div>
      </div>
    </>
  )
}

export default Statistics
