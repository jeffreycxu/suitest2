import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { EthosConnectProvider } from 'ethos-connect';
// import { NETWORK } from "./lib/constants";

const ethosConfiguration = {
  apiKey: process.env.NEXT_PUBLIC_ETHOS_API_KEY,
  preferredWallets: ['Ethos Wallet'],
  network: process.env.NETWORK || process.env.NEXT_PUBLIC_NETWORK

};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <EthosConnectProvider
  ethosConfiguration={ethosConfiguration}
  dappName="EthosConnect Example App"
  connectMessage="Your connect message goes here!"
>    <App />
  </EthosConnectProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
