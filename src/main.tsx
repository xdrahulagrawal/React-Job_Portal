import React from 'react';
import ReactDOM from 'react-dom';
import Navigation from './Component/Navigation';
import { BrowserRouter } from 'react-router-dom'
import './Assests/Style/Style.css'
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navigation />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
