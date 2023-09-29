import React from 'react'
import ReactDOM from 'react-dom/client'
import MyRoutes from './Router.jsx'
import'./style.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MyRoutes />
  </React.StrictMode>,
)
