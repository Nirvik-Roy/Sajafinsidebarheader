import React from 'react'
import './Dashboard.css'
import { Chart } from "react-google-charts";


const Dashboard = () => {
  const data = [
    ["Month", "1 ETH (USD)", "1 XRP (USD)"],
    ["Jan", 12000, 400],
    ["Feb", 11500, 380],
    ["Mar", 11000, 360],
    ["Apr", 10536.4, 345],
    ["May", 10200, 320],
    ["Jun", 9800, 310],
    ["Jul", 9400, 300],
    ["Aug", 9100, 290],
    ["Sep", 8800, 280],
    ["Oct", 8500, 270],
    ["Nov", 8200, 260],
  ];

  const options = {
    title: "Cryptocurrency Prices (2025)",
    curveType: "function",
    legend: { position: "bottom" },
    series: {
      0: { color: "red" },
      1: { color: "yellow" },
    },
    tooltip: {
      isHtml: true,
    },
  };


  const data2 = [
    ["Month", "1 ETH (USD)", "1 XRP (USD)"],
    ["Jan", 12000, 400],
    ["Feb", 11500, 380],
    ["Mar", 11000, 360],
    ["Apr", 10536.4, 345],
    ["May", 10200, 320],
    ["Jun", 9800, 310],
    ["Jul", 9400, 300],
    ["Aug", 9100, 290],
    ["Sep", 8800, 280],
    ["Oct", 8500, 270],
    ["Nov", 8200, 260],
  ];

  const options2 = {
    title: "Cryptocurrency Prices (2025)",
    curveType: "function",
    legend: { position: "bottom" },
    series: {
      0: { color: "red" },
      1: { color: "yellow" },
    },
    tooltip: {
      isHtml: true,
    },
  };
  return (
    <>
      <div className="dashboard-container">
        <div className="four-divs-wrapper">
          <div className="small-div"><p>Number of Trade</p>
          <p>120</p></div>
          <div className="small-div"><p>Successful Trade</p><p>40</p></div>
          <div className="small-div"><p>Profit earned</p><p>60</p></div>
          <div className="small-div"><p>Lifetime Withdrawal</p><p>60</p></div>
        </div>


        <div className="crypto-market-section">
          <div className="crypto-market-section-wrapper">
            <div className="crypto-chart-section">
              <h2>Crypto Statistics</h2>
              <p>Lorem ipsum dolor sit amet, consectetur</p>
              <div className="crypto-buttons">
                <div className="crypto-btn">Bitcoin</div>
                <div className="crypto-btn">Tradable</div>
                <div className="crypto-btn">Watchlist</div>
                <div className="crypto-btn">New on Cashbase</div>
              </div>
              <div className="crypto-chart">
              <Chart
        chartType="LineChart"
        
        height="400px"
        data={data}
        options={options}
      />
              </div>
            </div>
            <div className="market-chart-section">
              <h2>Market Overview</h2>
              <p>Lorem ipsum dolor sit amet, consectetur</p>
              <div className="crypto-buttons">
                <div className="crypto-btn">Bitcoin</div>
                <div className="crypto-btn">Tradable</div>
                <div className="crypto-btn">Watchlist</div>
                <div className="crypto-btn">New on Cashbase</div>
              </div>
              <div className="market-chart">
              <Chart
        chartType="LineChart"
        
        height="400px"
        data={data2}
        options={options2}
      />
              </div>
            </div>
          </div>
        </div>


        <div className="sell-buy-section">
          <div className="sell-order-table">
            <table>
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Amount</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>EURUSD</td>
                  <td>120.45</td>
                  <td>120.45</td>
                  <td>$1234.4</td>
                </tr>
                <tr>
                  <td>EURUSD</td>
                  <td>120.45</td>
                  <td>120.45</td>
                  <td>$1234.4</td>
                </tr>
                <tr>
                  <td>EURUSD</td>
                  <td>120.45</td>
                  <td>120.45</td>
                  <td>$1234.4</td>
                </tr>
                <tr>
                  <td>EURUSD</td>
                  <td>120.45</td>
                  <td>120.45</td>
                  <td>$1234.4</td>
                </tr>
                <tr>
                  <td>EURUSD</td>
                  <td>120.45</td>
                  <td>120.45</td>
                  <td>$1234.4</td>
                </tr>
                <tr>
                  <td>EURUSD</td>
                  <td>120.45</td>
                  <td>120.45</td>
                  <td>$1234.4</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="buy-order-table"></div>
        </div>
      </div>
    </>
  )
}

export default Dashboard
