import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { Helmet, HelmetProvider } from 'react-helmet-async'; // titleタグを動的に変更できる

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Root element not found');

const componentName = 'LAJ Demo';

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <HelmetProvider>
      <Helmet>
        <title>{componentName}</title>
      </Helmet>
      <App />
    </HelmetProvider>
  </React.StrictMode>,
);
