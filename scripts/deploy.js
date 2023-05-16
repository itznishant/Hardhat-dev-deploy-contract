const ethers = require("ethers");
require('dotenv').config();

async function main() {

  const url = process.env.ALCHEMY_RPC_URL_GORLI;

  let artifacts = await hre.artifacts.readArtifact("Faucet");

  const provider = new ethers.providers.JsonRpcProvider(url);

  let privateKey = process.env.GORLI_TESTNET_PRIVATE_KEY;

  let wallet = new ethers.Wallet(privateKey, provider);

  // Create an instance of Faucet Contract
  let faucetContractInstance = new ethers.ContractFactory(artifacts.abi, artifacts.bytecode, wallet);

  let faucet = await faucetContractInstance.deploy();

  console.log("Faucet contract deployed at address: ", faucet.address);

  await faucet.deployed();
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
});