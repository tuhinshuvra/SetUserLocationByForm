import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css';

// ReactDOM.createRoot(document.getElementById('root')).render(
ReactDOM.createRoot(document.getElementById('map')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
