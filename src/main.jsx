import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

// Langsung render ke wadah "root" tanpa perlu mencari HTML CMS
const container = document.getElementById('root');
const root = createRoot(container);

root.render(<App />);