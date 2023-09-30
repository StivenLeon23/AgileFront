import React from 'react'
import ReactDOM from 'react-dom/client'
import MyRoutes from './Router.jsx'

//Estilos
import 'bootstrap/dist/css/bootstrap.min.css';
import './Styles/main.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MyRoutes />
  </React.StrictMode>,
)
