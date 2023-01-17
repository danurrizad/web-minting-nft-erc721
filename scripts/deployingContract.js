const hre = require("hardhat");

async function main() {

  const VirtualRealityNFT = await hre.ethers.getContractFactory("VRBNFT");
  const virtualRealityNFT = await VirtualRealityNFT.deploy();

  await virtualRealityNFT.deployed();

  console.log(
    `Virtual Reality Boy NFT deployed to ${virtualRealityNFT.address}`
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});