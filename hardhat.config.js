require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");
require("hardhat-deploy");
require("solidity-coverage");
require("hardhat-gas-reporter");
require("hardhat-contract-sizer");
// require("@nomicfoundation/hardhat-chai-matchers");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
const COINMARKETCAP_API_KEY = process.env.COINMARKETCAP_API_KEY || "";
const EITHER_SCAN_API_KEY = process.env.PRIVATE_API_KEY_EITHERSCAN || "";
const SEPOLIA_RPC_URL = process.env.sepolia_test_url || "";
const PRIVATE_KEY = process.env.private_key || "";
module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 31337,
    },
    localhost: {
      chainId: 31337,
    },
    sepolia: {
      url: SEPOLIA_RPC_URL,
      accounts: [PRIVATE_KEY],
      chainId: 11155111,
      blockonfirmation: 6,
    },
  },
  etherscan: {
    apiKey: EITHER_SCAN_API_KEY,
  },
  gasReporter: {
    enabled: false,
    currency: "USD",
    outputFile: "gas-report.txt",
    noColors: true,
    coinmarketcap: COINMARKETCAP_API_KEY,
  },
  solidity: "0.8.18",
  namedAccounts: {
    deployer: {
      default: 0,
    },
    player: {
      default: 1,
    },
  },
  mocha: {
    timeout: 500000,
  },
};
