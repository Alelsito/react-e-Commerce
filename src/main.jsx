import React from 'react'
import ReactDOM from 'react-dom/client'

// Router
import { BrowserRouter } from 'react-router-dom'

// App
import App from './App'

// Global style
import './styles/index.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
