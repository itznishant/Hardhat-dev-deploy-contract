require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.4",
  networks: {
    goerli: {
      url: process.env.ALCHEMY_RPC_URL_GORLI,
      accounts: [process.env.GORLI_TESTNET_PRIVATE_KEY]
    },
  }
};