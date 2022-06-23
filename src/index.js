import React, { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { SleepProvider } from './context/Context';
import Routes from './Routes';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
  <SleepProvider>
    <StrictMode>
      <Routes />
    </StrictMode>
  </SleepProvider>


);


