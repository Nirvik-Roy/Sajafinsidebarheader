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
          
          <table className="transaction-table">
  
  <tbody className="transaction-body">
    <tr className="transaction-row">
      <td className="flexbox">
        <img src={xauusd_img} alt="" />
        <p>XAUUSD</p>
      </td>
      <td>06.24.45 AM</td>
      <td className="positive">+$5,553</td>
      <td className="completed">Completed</td>
    </tr>

    <tr className="transaction-row">
      <td className="flexbox">
        <img src={Bitcoin_img} alt="" />
        <p>BitCoin</p>
      </td>
      <td>06.24.45 AM</td>
      <td className="negative">-$542</td>
      <td className="pending">Pending</td>
    </tr>

    <tr className="transaction-row">
      <td className="flexbox">
        <img src={ngas_img} alt="" />
        <p>NGAS</p>
      </td>
      <td>06.24.45 AM</td>
      <td className="negative">-$542</td>
      <td className="canceled">Canceled</td>
    </tr>


    <tr className="transaction-row">
      <td className="flexbox">
        <img src={ngas_img} alt="" />
        <p>NGAS</p>
      </td>
      <td>06.24.45 AM</td>
      <td className="negative">-$542</td>
      <td className="canceled">Canceled</td>
    </tr>


    <tr className="transaction-row">
      <td className="flexbox">
        <img src={Bitcoin_img} alt="" />
        <p>BitCoin</p>
      </td>
      <td>06.24.45 AM</td>
      <td className="negative">-$542</td>
      <td className="pending">Pending</td>
    </tr>


    <tr className="transaction-row">
      <td className="flexbox">
        <img src={ngas_img} alt="" />
        <p>NGAS</p>
      </td>
      <td>06.24.45 AM</td>
      <td className="negative">-$542</td>
      <td className="canceled">Canceled</td>
    </tr>
  </tbody>
</table>

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
                <div className="sun-bar">
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
          {/* <div className="trade-chart">
            <Chart
              chartType="PieChart"
              width="100%"
              height="400px"
              data={data2}
              options={options2}
            />
          </div> */}
          {/* <div className="profit-chart">
            <Chart
              chartType="PieChart"
              width="100%"
              height="400px"
              data={data1}
              options={options1}
            />
          </div> */}
          {/* <div className="current-graph">
          <Chart
            chartType="PieChart"
            width="100%"
            height="400px"
            data={data}
            options={options}
          />
          </div> */}
        </div>
      </div>
    </>
  )
}

export default Statistics
