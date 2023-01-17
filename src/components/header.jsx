import React from 'react'

const header = () => {
  return (
    <div class="bg-sky-900 py-2 border-b-black ">
        <div class="justify-between flex">
            <div class="px-2">
                <h1 class="font-bold text-white">Virtual Reality NFT</h1>
                <h2 class="text-white">Wallet address : <span id="wallet-address" class="text-white"></span></h2>
            </div>
            <div class="px-2 py-2">
                <button id="connect" class="bg-slate-500 text-white border-2 border-white-solid p-2 rounded-xl hover:bg-white hover:text-black" onclick="Connect()">Connect wallet</button>
            </div>
        </div>
    </div>
  )
}

export default header