import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { LoaderProvider, ThreeDots } from '@agney/react-loading';

ReactDOM.render(
  <React.StrictMode>
    <LoaderProvider indicator={<ThreeDots width="50" />}>
      <App />
    </LoaderProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
