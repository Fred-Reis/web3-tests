// @ts-ignore
import React, { useState } from 'react';
import Web3 from 'web3';
import './style.css';

export default function App() {
  const [account, setAccount] = useState(null);

  const handleConnectWallet = async () => {
    // @ts-ignore
    if (window.ethereum !== undefined) {
      // @ts-ignore
      const accounts = await ethereum.request({
        method: 'eth_requestAccounts',
      });
      const account = accounts[0];
      setAccount(account);
    }
  };

  const handleConnectSmartContract = async () => {};

  return (
    <div>
      <h2>Connect to metamask!</h2>
      <button onClick={handleConnectWallet}>Click here to connect</button>
      <span>{account}</span>
      <h2>Connect to Smart Contract!</h2>
      <button onClick={handleConnectSmartContract}>
        Click here to connect
      </button>
      <span>{account}</span>
    </div>
  );
}
