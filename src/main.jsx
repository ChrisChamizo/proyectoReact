import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {Home} from './Components/Home/Home.jsx';
import { About } from './Components/About/About.jsx';
import { Contact } from './Components/Contact/Contact.jsx';
import { Header } from './Components/Header/Header.jsx';
import { Footer } from './Components/Footer/Footer.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <Home />
     <About/>
     <Contact/>
    <Header />
   <Footer />
    
  </React.StrictMode>
);
