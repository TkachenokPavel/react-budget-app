import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { CurrencyProvider } from './context/CurrencyContext/CurrencyContext';
import { ExpensesProvider } from './context/ExpensesContext/ExpensesContext';
import { GlobalStyles } from './ui/GlobalStyles';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <CurrencyProvider>
      <ExpensesProvider>
        <GlobalStyles />
        <App />
      </ExpensesProvider>
    </CurrencyProvider>
  </React.StrictMode>
);
