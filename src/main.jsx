import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainLayout from './components/MainLayout/MainLayout.jsx'
import Dashboard from './components/View/Dashboard/Dashboard.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainLayout />}>
            <Route path='/' element={<Dashboard />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
