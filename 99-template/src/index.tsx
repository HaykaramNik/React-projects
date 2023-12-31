import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';

const rootElement: HTMLElement = document.getElementById('root') as HTMLElement
const root = ReactDOM.createRoot(rootElement);
root.render(<App />);
