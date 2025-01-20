import React from 'react'
import '../../App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import Sidebar from './Sidebar';
import notification_btn from '../../assets/notification-btn.png'
import profile_img from '../../assets/Ellipse 2.png'

const Header = () => {
  return (
    <>
    <Sidebar />
      <div className="header-section">
          <div className="header-section-wrapper dashboard-content">
              <div className="header-left">
              <div className="header-text">
              <h2>Dashboard</h2>
              <p>Welcome Back <span>John Smith!</span></p>
              </div>
                <div className="header-search-box">
                <FontAwesomeIcon icon={faMagnifyingGlass}/>
                </div>
              </div>
              <div className="header-right">
                <img src={notification_btn} alt="" className='notify-btn'/>
                <div className="profile-info">
                  <div className="profile-img"><img src={profile_img} alt="" /></div>
                  <p>John Smith</p>
                </div>
              </div>
          </div>
      </div>
    </>
  )
}

export default Header
