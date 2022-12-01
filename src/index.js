import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux'
import {persistore,store} from "./redux/store"
import { PersistGate } from 'redux-persist/lib/integration/react'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistore}>
        <App/>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);


reportWebVitals();
