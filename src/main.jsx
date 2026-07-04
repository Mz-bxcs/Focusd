import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import PhoneFrame from './components/PhoneFrame.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <PhoneFrame>
        <App />
      </PhoneFrame>
    </BrowserRouter>
  </StrictMode>,
)
