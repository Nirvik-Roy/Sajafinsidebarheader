import React from 'react';
import "./Statistics.css";
import xauusd_img from '../../../assets/image (7).png'
import Bitcoin_img from '../../../assets/image (8).png'
import ngas_img from '../../../assets/image (9).png'
import dogusd_img from '../../../assets/image (10).png'
import green_graph from '../../../assets/Group 4534361.png'
import red_graph from '../../../assets/Group 4534362.png'
import big_graph from '../../../assets/Vector 4.png'
import big_red_graph from '../../../assets/Vector 4 (1).png'
import eye_symbol from '../../../assets/mdi_eye-outline.png'
import file_symbol from '../../../assets/mdi_file.png'
import { Chart } from "react-google-charts";



export const data = [
  ["Task", "Hours per Day"],
  ["XAUUSD", 30],
  ["Bitcoin", 20],
  ["Bitcoin", 20],
  ["NGAS", 30],
   
];

export const options = {
  title: "Current Graph",
  pieHole: 0.8,
  is3D: false,
  slices: {
    0: { color: "#41C0A8" }, // Red for "Work"
    1: { color: "#B3A8F9" }, // Green for "Eat"
    2: { color: "#B3A8F9" }, // Blue for "Commute"
    3: { color: "#FF7C3B" }, // Yellow for "Watch TV"
    4: { color: "#ff00ff" }, // Magenta for "Sleep"
  },
};


export const data1 = [
  ["Task", "Hours per Day"],
  ["XAUUSD", 40],
  ["Bitcoin", 60],
   
];

export const options1 = {
  pieHole: 0.8,
  is3D: false,
  slices: {
    0: { color: "#E1B9B6" }, // Red for "Work"
    1: { color: "#DC2C1D" }, // Green for "Eat"
     
  },
  legend: 'none',
};
export const data2 = [
  ["Task", "Hours per Day"],
  ["XAUUSD", 40],
  ["Bitcoin", 60],
   
];

export const options2 = {
  pieHole: 0.8,
  is3D: false,
  slices: {
    0: { color: "#E1B9B6" }, // Red for "Work"
    1: { color: "#DC2C1D" }, // Green for "Eat"
     
  },
  legend: 'none',
};

const Statistics = () => {
  const tradeData = [
    {
      name: 'XAUUSD',
      symbol: 'XMR',
      price: '$18,783.33',
      change: '45%',
      biggraph: big_graph,
      logo: xauusd_img,
      graph: green_graph,
    },
    {
      name: 'Bitcoin',
      symbol: 'BTC',
      price: '$24,783.33',
      change: '45%',
      biggraph: big_graph,
      logo: Bitcoin_img,
      graph: green_graph,
    },
    {
      name: 'NGAS',
      symbol: 'XMR',
      price: '$18,783.33',
      change: '45%',
      biggraph: big_red_graph,
      logo: ngas_img,
      graph: red_graph,
    },
    {
      name: 'DOGUSD',
      symbol: 'XMR',
      price: '$18,783.33',
      change: '45%',
      biggraph: big_graph,
      logo: dogusd_img,
      graph: green_graph
    },
  ];

  const transactiondata = [
    {
      name:"XAUUSD",
      time: '06.24.45 AM',
      price: '+$5,553',
      status: 'Completed',
      logo: xauusd_img,
    },
    {
      name:"Bitcoin",
      time: '06.24.45 AM',
      price: '-$542',
      status: 'Pending',
      logo: Bitcoin_img,
    },
    {
      name:"NGAS",
      time: '06.24.45 AM',
      price: '-$542',
      status: 'Canceled',
      logo: ngas_img,
    },
    {
      name:"NGAS",
      time: '06.24.45 AM',
      price: '-$542',
      status: 'Canceled',
      logo: ngas_img,
    },
    {
      name:"Bitcoin",
      time: '06.24.45 AM',
      price: '-$542',
      status: 'Pending',
      logo: Bitcoin_img,
    },
    {
      name:"NGAS",
      time: '06.24.45 AM',
      price: '-$542',
      status: 'Canceled',
      logo: ngas_img,
    },
  ]


  const getStatusColor = (status) => {
    if (status === 'Completed') return '#00A478';
    if (status === 'Pending') return '#8E8E90';
    if (status === 'Canceled') return '#DC2C1D';
    return '#000';
  };
  return (
    <>
      <div className="dashboard-container" style={{paddingBottom: "50px"}}>
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
              <img src={trade.biggraph} alt="" />

            </div>

            <div className="trade-view">
              <img src={eye_symbol} alt="" />
              <img src={file_symbol} alt="" />
            </div>
          </div>
        ))}
      </div>
          </div>
          <div className="completed-trade">
          <div className="completed-trade-header">
            <div className="completed-trade-left-header">
            <h2 className='completed-trade-heading'>Completed Trade</h2>
            <p className='completed-trade-para'>Lorem ipsum dolor sit amet, consectetur</p>
            </div>
            <div className="completed-trade-right-header">
              <div className="yesterday-btn">Yesterday</div>
              <div className="weekly-btn">Weekly</div>
            </div>
          </div>


          <div className="transaction-list">
      {transactiondata.map((transaction, index) => (
        <div key={index} className="transaction-item">
          <div className="transaction-info">
            <div className="transaction-logo">
              <img src={transaction.logo} alt={transaction.name} />
            </div>
            <div className="transaction-details">
              <h3 className="transaction-name">{transaction.name}</h3>
              
            </div>
          </div>
          <div className="transaction-time">
          <p className="transaction-time">{transaction.time}</p>
          </div>

          <div className="transaction-price">
            <p>{transaction.price}</p>
          </div>

          <div className="transaction-status" style={{color: getStatusColor(transaction.status)}}>
            {transaction.status}
          </div>
        </div>
      ))}
    </div>
          
          

          </div>
        </div>




        <div className="weekly-charts-wrapper">
          <div className="weekly-summary">
          <div className='weekly-summary-heading'>
          <h2>Weekly Summary</h2>
          </div>
            <div className="weekly-content-wrapper">
            <div className="weekly-left-box">
              <div className="weekly-flex-box">
                <div className='thirty-div'></div>
                <h2>30%</h2>
                <p>Succesfull Market</p>
              </div>
              <div className="weekly-flex-box">
              <div className='fourty-six-div'></div>
                <h2>46%</h2>
                <p>Failed</p>
              </div>
              <div className="weekly-flex-box">
              <div className='ten-div'></div>
                <h2>10%</h2>
                <p>waiting</p>
              </div>
            </div>

            <div className="weekly-right-box">
              <div className="horizontal-bar-div">
                <div className="bar">
                  <div className="sun-grey-bar">
                  <div className="sun-red-bar">
                  <div className="sun-green-bar"></div>
                  </div>
                  </div>
                </div>
                <p>Sun</p>
              </div>
              <div className="horizontal-bar-div">
                <div className="bar">
                <div className="mon-grey-bar">
                  <div className="mon-red-bar">
                  <div className="mon-green-bar"></div>
                  </div>
                  </div>
                </div>
                <p>Mon</p>
              </div>
              <div className="horizontal-bar-div">
                <div className="bar">
                <div className="sun-grey-bar">
                  <div className="sun-red-bar">
                  <div className="sun-green-bar"></div>
                  </div>
                  </div>
                </div>
                <p>Tue</p>
              </div>
              <div className="horizontal-bar-div">
                <div className="bar">
                <div className="sun-grey-bar">
                  <div className="sun-red-bar">
                  <div className="sun-green-bar"></div>
                  </div>
                  </div>
                </div>
                <p>Wed</p>
              </div>
              <div className="horizontal-bar-div">
                <div className="bar">
                <div className="sun-grey-bar">
                  <div className="sun-red-bar">
                  <div className="sun-green-bar"></div>
                  </div>
                  </div>
                </div>
                <p>Thu</p>
              </div>
              <div className="horizontal-bar-div">
                <div className="bar">
                <div className="sun-grey-bar">
                  <div className="sun-red-bar">
                  <div className="sun-green-bar"></div>
                  </div>
                  </div>
                </div>
                <p>Fri</p>
              </div>
              <div className="horizontal-bar-div">
                <div className="bar">
                <div className="sun-grey-bar">
                  <div className="sun-red-bar">
                  <div className="sun-green-bar"></div>
                  </div>
                  </div>
                </div>
                <p>Sat</p>
              </div>
            </div>
            </div>
            
            
          </div>
          <div className="trade-chart">
          <h2 className='trade-chart-heading'>345</h2>
          {/* <p className='trade-chart-para'>Trade</p> */}
            <Chart
              chartType="PieChart"
              width="100%"
              height="100%"
              data={data2}
              options={options2}
            />
          </div>
          <div className="profit-chart">
          <h2 className='trade-chart-heading'>4,563</h2>
            <Chart
              chartType="PieChart"
              width="100%"
              height="100%"
              data={data1}
              options={options1}
            />
          </div>
          
        </div>
        <div className="current-graph">
          <Chart
            chartType="PieChart"
            width="100%"
            height="100%"
            data={data}
            options={options}
          />
          </div>
      </div>
    </>
  )
}

export default Statistics
