import React from 'react'
import './Dashboard.css'
import Euro_icon from '../../../assets/image (6).png'
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';





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
    {
      "name": "Jan",
      "uv": 4000,
      "pv": 2400,
      "amt": 2400
    },
    {
      "name": "Feb",
      "uv": 3000,
      "pv": 1398,
      "amt": 2210
    },
    {
      "name": "Mar",
      "uv": 2000,
      "pv": 9800,
      "amt": 2290
    },
    {
      "name": "Apr",
      "uv": 2780,
      "pv": 3908,
      "amt": 2000
    },
    {
      "name": "May",
      "uv": 1890,
      "pv": 4800,
      "amt": 2181
    },
    {
      "name": "June",
      "uv": 2390,
      "pv": 3800,
      "amt": 2500
    },
    {
      "name": "July",
      "uv": 3490,
      "pv": 4300,
      "amt": 2100
    },
    {
      "name": "Aug",
      "uv": 3490,
      "pv": 4300,
      "amt": 2100
    },
    {
      "name": "Sep",
      "uv": 3490,
      "pv": 4300,
      "amt": 2100
    },
    {
      "name": "Oct",
      "uv": 3490,
      "pv": 4300,
      "amt": 2100
    },
    {
      "name": "Nov",
      "uv": 3490,
      "pv": 4300,
      "amt": 2100
    },
    {
      "name": "Dec",
      "uv": 3490,
      "pv": 4300,
      "amt": 2100
    },
  ]



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
              {/* <div className="crypto-chart"> */}
              <ResponsiveContainer height={380}>

              <LineChart data={data}
  margin={{ top: 25,  bottom: 5, right:40 }}>
  {/* <CartesianGrid strokeDasharray="3 3" /> */}
  <XAxis dataKey="name" />
  <YAxis />
  <Tooltip />
  {/* <Legend /> */}
  <Line type="monotone" dataKey="pv" stroke="#DC2C1D" />
  <Line type="monotone" dataKey="uv" stroke="#FAE01A" />
</LineChart>
              </ResponsiveContainer>
              {/* </div> */}
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
              <ResponsiveContainer height={380}>

              <LineChart data={data}
  margin={{ top: 25,  bottom: 5, right:40 }}>
  {/* <CartesianGrid strokeDasharray="3 3" /> */}
  <XAxis dataKey="name" />
  <YAxis />
  <Tooltip />
  {/* <Legend /> */}
  <Line type="monotone" dataKey="pv" stroke="#DC2C1D" />
  <Line type="monotone" dataKey="uv" stroke="#FAE01A" />
</LineChart>
              </ResponsiveContainer>
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
