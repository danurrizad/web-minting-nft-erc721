import React from 'react'
import NFTimg from "../assets/img/image-nft.png"

const contentmint = () => {
  return (
    <div>
      <div class="my-4 bg-[#C6FAED] mx-12 rounded-xl shadow-xl">
          <div class="justify-center flex py-4">
              <button class="bg-blue-500 py-2 px-4 rounded border-2 border-yellow-700 hover:bg-blue-700">
                  <a href="https://testnets.opensea.io/collection/virtual-reality-boys-nfts" class="text-yellow-400 hover:text-yellow-600">OpenSea TestNet</a>
              </button>
          </div>
          <div class="justify-center flex py-2">
              <img src={NFTimg} alt="nft-vrboy" class="w-1/4"/>
          </div>
          <div class="text-center">
              <h1 class="text-xl font-bold">Total Supply : <span id="total"></span>/6</h1>
          </div>
          <div class="justify-center flex">
              <button id="mint" class="border-2 border-black p-2 bg-green-400 hover:bg-green-600 my-4">Mint this NFT</button>
          </div>
      </div>
    </div>
  )
}

export default contentmint