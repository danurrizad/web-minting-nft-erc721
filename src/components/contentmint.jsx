import React, {useState} from 'react';
import Web3 from "web3"; 
import contractABI from './contractABI.json';

const Contentmint = ({isConnected}) => {
    const [msg, setMsg] = useState('');
    const [msgMint, setMsgMint] = useState('');
 
    var contract = null;
    
    const CONTRACT_ABI = contractABI.abi;
    const CONTRACT_ADDRESS = "0x92A8e58C39b8e6d1506DD6c4eD56acf5455133dd";
    async function Minting() {
      try {
        if(window.ethereum){
          setMsgMint("Minting this NFT to your account...")
          var account = document.getElementById('wallet-address').textContent;
          var web3 = new Web3(window.ethereum);
          contract = new web3.eth.Contract(CONTRACT_ABI, CONTRACT_ADDRESS);
          contract.methods.safeMint(account).send({from:account,value:"25000000000000000"})
          var totalsupply = await contract.methods.totalSupply().call();
          document.getElementById('total').textContent = totalsupply;   
      }
        setMsgMint("")
      } catch (error) {
        console.log(error);
        console.log("You dont have MetaMask installed on your browser");  
      }
      
      };


      

    async function RefreshSupply() {
      try {
        setMsg("Refreshing supply of this NFT...")
        var web3 = new Web3(window.ethereum);
        contract = new web3.eth.Contract(CONTRACT_ABI, CONTRACT_ADDRESS);
        var totalsupply = await contract.methods.totalSupply().call();
        document.getElementById('total').textContent = totalsupply;
        setMsg("")
      } catch (error) {
        console.log(error);
        setMsg("You dont have MetaMask installed, please install and reload this page")
      }
    }

  return (
    <div class="font-mono">
      <div class="my-6">
        <div class=" bg-blue-100 mx-12 rounded-xl shadow-xl min-h-[80vh]">
            <div class="justify-center flex py-4">
                <button class="bg-blue-500 py-2 px-4 rounded border-2 border-yellow-700 hover:bg-blue-700">
                    <a href="https://testnets.opensea.io/collection/virtual-reality-boys-v2-nft" class="text-yellow-400 hover:text-yellow-600">OpenSea TestNet</a>
                </button>
            </div>
            <div class="justify-center flex py-2">
                <img src="https://www.graphie.web.id/dev/danur/static/media/image-nft.e87c3256a0bbc692b707.png" alt="nft-vrboy" class="2xl:w-1/4 border-dashed border-yellow-500 border-4"/>
            </div>
            <div class="justify-center flex-1 text-center">
                <h1 class="text-xl font-bold">Total Supply : <span id="total"></span>/10</h1>
                <button class=" bg-slate-500 font-mono text-white border-2 border-white-solid py-1 px-4 rounded-3xl hover:bg-white hover:text-black" onClick={RefreshSupply}>Refresh supply</button>
                <p class="animate-pulse text-green-600">{msg}</p>
            </div>
            <div class="justify-center flex-1">
                {isConnected ? <button id="mint" class="border-2 border-black p-2 bg-green-400 hover:bg-green-600 my-4" onClick={Minting}>Mint this NFT</button> : <h2 class="text-black py-2 text-xl font-bold">You have to connect your wallet to mint</h2>}
                <p class="animate-pulse text-green-600">{msgMint}</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Contentmint