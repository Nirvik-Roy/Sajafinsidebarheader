import React from 'react'
import Header from '../layout/Header'
import { Outlet, useLocation } from 'react-router-dom'

const MainLayout = () => {
  const location = useLocation()
  return (
    <>
      {location.pathname=="/" ? <Header name={"Dashboard"}/> : location.pathname=="/statistics" ? <Header name={"Statistics"}/> : ""}
      <Outlet />
    </>
  )
}

export default MainLayout
