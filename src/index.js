import React from 'react';
import {createRoot} from 'react-dom/client';
import App from './App'


const domApp = document.getElementById('app');
createRoot(domApp).render(<App />);