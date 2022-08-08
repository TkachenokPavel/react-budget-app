import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ExpensesProvider } from './context/ExpensesContext/ExpensesContext';
import { GlobalStyles } from './ui/GlobalStyles';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ExpensesProvider>
      <GlobalStyles />
      <App />
    </ExpensesProvider>
  </React.StrictMode>
);
