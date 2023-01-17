import React from 'react'
import Web3 from "web3"; 

const header = () => {
    var account = null;

    async function Connect(){
        await window.ethereum.send('eth_requestAccounts');
        window.web3 = new Web3(window.ethereum);
        
        var web3 = new Web3(window.ethereum);
        var accounts = await web3.eth.getAccounts();
        account = accounts[0];
        document.getElementById('wallet-address').textContent = account;
    };

  return (
    <div class="bg-sky-900 py-2 border-b-black ">
        <div class="justify-between flex">
            <div class="px-2 text-left">
                <h1 class="font-bold font-mono text-white">Virtual Reality NFT</h1>
                <h2 class="text-white font-mono">Wallet address : <span id="wallet-address" class="text-white"></span></h2>
            </div>
            <div class="px-2 py-2">
                <button id="connect" class="bg-slate-500 font-mono text-white border-2 border-white-solid p-2 rounded-xl hover:bg-white hover:text-black" onClick={Connect}>Connect wallet</button>
            </div>
        </div>
    </div>
  )
}

export default header