import React from 'react'
import './AccountSettings.css'
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
import profile_img from '../../../assets/Ellipse 2.png'
import call_icon from '../../../assets/Group 74642.png'
import email_icon from '../../../assets/Group 74643.png'
import facebook_icon from '../../../assets/Group 4534363.png'
import uparrow_icon from '../../../assets/Group 4534364.png'
import downarrow_icon from '../../../assets/Group 4534365.png'
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
  pieHole: 0.7,
  is3D: false,
  slices: {
    0: { color: "#41C0A8" }, // Red for "Work"
    1: { color: "#B3A8F9" }, // Green for "Eat"
    2: { color: "#B3A8F9" }, // Blue for "Commute"
    3: { color: "#FF7C3B" }, // Yellow for "Watch TV"
    4: { color: "#ff00ff" }, // Magenta for "Sleep"
  },
  legend: { position: "bottom" },
  titleTextStyle: {
    fontSize: 15, 
    fontWeight: 500, 
    bold: false,
    textAlign: "center", 
  },
  pieSliceText: "none",
};

export const data1 = [
  ["Task", "Hours per Day"],
  ["XAUUSD", 40],
  ["Bitcoin", 60],
   
];

export const options1 = {
  pieHole: 0.7,
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
  pieHole: 0.7,
  is3D: false,
  slices: {
    0: { color: "#E1B9B6" }, // Red for "Work"
    1: { color: "#DC2C1D" }, // Green for "Eat"
     
  },
  legend: 'none',
};

const AccountSettings = () => {
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
      <div className="dashboard-container" style={{marginBottom: "50px"}}>
        
        <div className="profile-current-wrapper">
        <div className="profile-section">
            <h2 className='profile-header'>My Profile</h2>
            <div className="profile-wrapper">
            <div className="profile-img"><img src={profile_img} alt="" /></div>
            <h2 className='profile-name'>John Smith</h2>
            <p className='profile-email'>@John Smith</p>
            <p className='profile-join-date'>Join on 24 March 2024</p>
            <p className='profile-info'>Lorem ipsum dolor sit amet,
              Consectetur adipiscing elit, sed do
              eiusmod tempor incididunt</p>
            <div className="contact-buttons">
              <img src={call_icon} alt="" />
              <img src={email_icon} alt="" />
              <img src={facebook_icon} alt="" />
            </div>
            </div>
          </div>



          <div className="current-trade">
                      <div className="current-trade-header">
                        <h2 className='current-trade-heading'>Coin Holding</h2>
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
        </div>


        <div className="recent-week-summary-section">
          <div className="recent-activity">
              <div className="recent-activity-header">
                <div className="recent-activity-left-header">
                  <h2 className='recent-activity-heading'>Recent Activity</h2>
                  <p className='recent-activity-para'>Lorem ipsum dolor sit amet, consectetur</p>
                </div>
                <div className="recent-activity-buttons">
                  <div className="yesterday-button">Yesterday</div>
                  <div className="today-btn">Today</div>
                </div>
              </div>
              <div className="recent-activity-content">
                <div className="activity-box">
                  <div className="activity-logo-name">
                    <div className="activity-logo"><img src={uparrow_icon} alt="" /></div>
                    <h2 className='activity-name'>Topup</h2>
                  </div>
                  <p className='activity-time'>06.24.45 AM</p>
                  <p className='activity-price'>+$5,553</p>
                  <p className='activity-status complete'>Completed</p>
                </div>
                <div className="activity-box">
                <div className="activity-logo-name">
                    <div className="activity-logo"><img src={downarrow_icon} alt="" /></div>
                    <h2 className='activity-name'>Withdraw</h2>
                  </div>
                  <p className='activity-time'>06.24.45 AM</p>
                  <p className='activity-price'>-$542</p>
                  <p className='activity-status pending'>Pending</p>
                </div>
                <div className="activity-box">
                <div className="activity-logo-name">
                    <div className="activity-logo"><img src={downarrow_icon} alt="" /></div>
                    <h2 className='activity-name'>Withdraw</h2>
                  </div>
                  <p className='activity-time'>06.24.45 AM</p>
                  <p className='activity-price'>-$542</p>
                  <p className='activity-status cancel'>Canceled</p>
                </div>
                <div className="activity-box">
                <div className="activity-logo-name">
                    <div className="activity-logo"><img src={uparrow_icon} alt="" /></div>
                    <h2 className='activity-name'>Topup</h2>
                  </div>
                  <p className='activity-time'>06.24.45 AM</p>
                  <p className='activity-price'>+$5,553</p>
                  <p className='activity-status complete'>Completed</p>
                </div>
                <div className="activity-box">
                <div className="activity-logo-name">
                    <div className="activity-logo"><img src={uparrow_icon} alt="" /></div>
                    <h2 className='activity-name'>Topup</h2>
                  </div>
                  <p className='activity-time'>06.24.45 AM</p>
                  <p className='activity-price'>+$5,553</p>
                  <p className='activity-status complete'>Completed</p>
                </div>
                <div className="activity-box">
                <div className="activity-logo-name">
                    <div className="activity-logo"><img src={uparrow_icon} alt="" /></div>
                    <h2 className='activity-name'>Withdraw</h2>
                  </div>
                  <p className='activity-time'>06.24.45 AM</p>
                  <p className='activity-price'>-$542</p>
                  <p className='activity-status cancel'>Canceled</p>
                </div>
              </div>
          </div>
          <div className="weekly-summary-graph-section">
            <div className="weekly-summary-section">
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
            <div className="chart-section">
              <div className="transaction-income-charts">
                <div className="transaction-chart">
                <div className="transaction-chart-text">
                  <p className='text-number'>345</p>
                  <p className='chart-name'>Transactions</p>
                </div>
                  <Chart
                                chartType="PieChart"
                                width="100%"
                                height="100%"
                                data={data2}
                                options={options2}
                              />
                </div>
                <div className="income-chart">
                <div className="income-chart-text">
                  <p className='text-number'>4,563</p>
                  <p className='chart-name'>Income</p>
                </div>
                  <Chart
                                chartType="PieChart"
                                width="100%"
                                height="100%"
                                data={data1}
                                options={options1}
                              />
                </div>
              </div>
              <div className="current-graph-chart" style={{textAlign:"center", position: "relative"}}>
                <Chart
                            chartType="PieChart"
                            width="100%"
                            height="100%"
                            data={data}
                            options={options}
                          />
              </div>
            </div>
          </div>
        </div>
        </div>
      
    </>
  )
}

export default AccountSettings
