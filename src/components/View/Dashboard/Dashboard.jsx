import React from 'react'
import './Dashboard.css'
import { Chart } from "react-google-charts";
import Euro_icon from '../../../assets/image (6).png'





const tableData = [
  {
    product: "EURUSD",
    price: 120.45,
    amount: 120.45,
    total: "$1234.4",
    type: "CURRENCY",
    icon: Euro_icon, 
  },
  {
    product: "EURUSD",
    price: 120.45,
    amount: 120.45,
    total: "$1234.4",
    type: "CURRENCY",
    icon: Euro_icon,
  },
  {
    product: "EURUSD",
    price: 120.45,
    amount: 120.45,
    total: "$1234.4",
    type: "CURRENCY",
    icon: Euro_icon,
  },
  {
    product: "EURUSD",
    price: 120.45,
    amount: 120.45,
    total: "$1234.4",
    type: "CURRENCY",
    icon: Euro_icon,
  },
  {
    product: "EURUSD",
    price: 120.45,
    amount: 120.45,
    total: "$1234.4",
    type: "CURRENCY",
    icon: Euro_icon,
  },
  {
    product: "EURUSD",
    price: 120.45,
    amount: 120.45,
    total: "$1234.4",
    type: "CURRENCY",
    icon: Euro_icon,
  },
];


const Dashboard = () => {
  const data = [
    ["Month", "1 ETH (USD)", "1 XRP (USD)"],
  ["Jan", 12000, 11000],
  ["Feb", 11500, 10500],
  ["Mar", 11800, 10800],
  ["Apr", 11500, 10500],
  ["May", 11850, 10850],
  ["Jun", 12000, 11000],
  ["Jul", 11500, 10500],
  ["Aug", 11800, 10800],
  ["Sep", 11500, 10500],
  ["Oct", 11750, 10750],
  ["Nov", 12000, 11000],
  ];

  const options = {

    curveType: "function",
    
    series: {
      0: { color: "red" },
      1: { color: "yellow" },
    },
    tooltip: {
      isHtml: true,
    },
    legend: { position: 'none' }, 
    vAxis: {
    textPosition: 'none',  // Hide Y-axis labels
  },
  };


  const data2 = [
    ["Month", "1 ETH (USD)", "1 XRP (USD)"],
  ["Jan", 12000, 11000],
  ["Feb", 11500, 10500],
  ["Mar", 11800, 10800],
  ["Apr", 11500, 10500],
  ["May", 11850, 10850],
  ["Jun", 12000, 11000],
  ["Jul", 11500, 10500],
  ["Aug", 11800, 10800],
  ["Sep", 11500, 10500],
  ["Oct", 11750, 10750],
  ["Nov", 12000, 11000],
  ];

  const options2 = {
    
    curveType: "function",
    
    series: {
      0: { color: "red" },
      1: { color: "yellow" },
    },
    tooltip: {
      isHtml: true,
    },
    legend: { position: 'none' }, 
    vAxis: {
    textPosition: 'none',
    
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
                <div className="crypto-btn active">Tradable</div>
                <div className="crypto-btn">Watchlist</div>
                <div className="crypto-btn">New on Cashbase</div>
              </div>
              <div className="crypto-chart">
              <Chart
        chartType="LineChart"
        width={630}
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
                <div className="crypto-btn active">Tradable</div>
                <div className="crypto-btn">Watchlist</div>
                <div className="crypto-btn">New on Cashbase</div>
              </div>
              <div className="market-chart">
              <Chart
        chartType="LineChart"
        width={630}
        height="400px"
        data={data2}
        options={options2}
      />
              </div>
            </div>
          </div>
        </div>


        <div className="sell-buy-section">
        <div className="sell-order-table-container">
      <h3 className='sell-order-heading'>Sell Order</h3>
      <table className='sell-order-table'>
        <thead className='sell-order-table-header'>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Amount</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody className='sell-order-table-body'>
          {tableData.map((row, index) => (
            <tr key={index}>
              <td className='sell-order-table-data'>
                <div className="product-cell">
                  <img src={row.icon} alt={`${row.product} Icon`} />
                  <div>
                    <span>{row.product}</span>
                    <p>{row.type}</p>
                  </div>
                </div>
              </td>
              <td className='sell-order-table-data'>{row.price}</td>
              <td className='sell-order-table-data'>{row.amount}</td>
              <td className='sell-order-table-data'>{row.total}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
          <div className="buy-order-table-container">
          <h3  className='buy-order-heading'>Buy Order</h3>
      <table className='buy-order-table'>
        <thead className='buy-order-table-header'>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Amount</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, index) => (
            <tr key={index}>
              <td className='buy-order-table-data'>
                <div className="product-cell">
                  <img src={row.icon} alt={`${row.product} Icon`} />
                  <div>
                    <span>{row.product}</span>
                    <p>{row.type}</p>
                  </div>
                </div>
              </td>
              <td className='buy-order-table-data'>{row.price}</td>
              <td className='buy-order-table-data'>{row.amount}</td>
              <td className='buy-order-table-data'>{row.total}</td>
            </tr>
          ))}
        </tbody>
      </table>
          </div>
        </div>
      </div>
    </>
  )
}

export default Dashboard
