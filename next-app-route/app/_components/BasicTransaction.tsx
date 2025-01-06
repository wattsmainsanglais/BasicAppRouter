'use client'

import { useWallet } from '@meshsdk/react';
import { Transaction } from '@meshsdk/core';



export default function BasicTransaction() {
  const { wallet, connected, name, connecting, connect, disconnect, error } = useWallet();


  async function runTransaction() {
    const tx = new Transaction({ initiator: wallet })
.sendLovelace(
  'addr1qx72rfhqp7d2q2c32f95yz60ghrp38fgz82da735r5tn589tjzert4m55umpkyj4urevug5ae7t6y93cavh65kxwvxtqnzkekz',
  '1000000'
);

const unsignedTx = await tx.build();
const signedTx = await wallet.signTx(unsignedTx);
const txHash = await wallet.submitTx(signedTx);
  }

  return (
    <div>
      <p>
        <b>Connected?: </b> {connected ? 'Is connected' : 'Not connected'}
      </p>
      <p>
        <b>Connecting wallet?: </b> {connecting ? 'Connecting...' : 'No'}
      </p>
      <p>
        <b>Name of connected wallet: </b>
        {name}
      </p>
      <button onClick={() => disconnect()}>Disconnect Wallet</button>

        <div>
            {connected? <button style={{backgroundColor: 'green'}} onClick={runTransaction}>Send Ada</button>: <></>}
        </div>

    </div>
  );
}