import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainLayout from './components/MainLayout/MainLayout.jsx'
import Dashboard from './components/View/Dashboard/Dashboard.jsx'
import Statistics from './components/View/Statistics/Statistics.jsx'
import AccountSettings from './components/View/AccountSettings/AccountSettings.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainLayout />}>
            <Route path='/' element={<Dashboard />}></Route>
            <Route path='/statistics' element={<Statistics />}></Route>
            <Route path='/account-settings' element={<AccountSettings />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
