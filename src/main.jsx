import React from 'react';
import ReactDOM from 'react-dom/client';
import { NetflixApp } from './NetflixApp';
import { BrowserRouter } from 'react-router-dom';
import { MidDiv } from './home/components/MidDiv';
import { TopDiv } from './home/components/TopDiv';
import { NetflixHome } from './home/NetflixHome';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <NetflixApp />
    </BrowserRouter>
  </React.StrictMode>
)
