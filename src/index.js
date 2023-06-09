import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { EthosConnectProvider } from 'ethos-connect';

const ethosConfiguration = {
  apiKey: process.env.NEXT_PUBLIC_ETHOS_API_KEY,
  preferredWallets: ['Ethos Wallet'],
  network: process.env.NETWORK || process.env.NEXT_PUBLIC_NETWORK
};

console.log(ethosConfiguration, "test")

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <EthosConnectProvider
    ethosConfiguration={ethosConfiguration}
    dappName="EthosConnect Example App"
    connectMessage="Your connect message goes here!"
  >   
    <App />
  </EthosConnectProvider>
);
