import { task } from "hardhat/config";
import "hardhat-gas-reporter";
import 'hardhat-contract-sizer';
import "@nomiclabs/hardhat-ethers";
import "@nomiclabs/hardhat-waffle";
import "hardhat-typechain";
import "@typechain/ethers-v5";
import '@openzeppelin/hardhat-upgrades';
import 'hardhat-spdx-license-identifier';
import '@nomiclabs/hardhat-etherscan';
import 'dotenv/config';
// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (args, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
	networks: {
		mainnet: {
			chainId: 1,
			url: `https://mainnet.infura.io/v3/${process.env.INFURAKEY}`,
			gasPrice: 65000000000,
			accounts: {
				mnemonic:process.env.MNEMONIC
			}
		},
		ropsten: {
			chainId: 3,
			url: `https://ropsten.infura.io/v3/${process.env.INFURAKEY}`,
			gasPrice: 65000000000,
			accounts: {
				mnemonic:process.env.MNEMONIC
			}
		},
		rinkeby: {
			chainId: 4,
			url: `https://rinkeby.infura.io/v3/${process.env.INFURAKEY}`,
			gasPrice: 65000000000,
			accounts: {
				mnemonic:process.env.MNEMONIC,
				count:parseInt(`${process.env.ACCOUNTS}`)
			}
		},
		bsc_mainnet: {
			chainId: 56,
			url: process.env.URL_BSC,
			gasPrice: 20000000000,
			accounts: {
				mnemonic:process.env.MNEMONIC
			}
		},
		bsc_testnet: {
			chainId: 97,
			url: process.env.URL_TESTNET_BSC,
			gasPrice: 20000000000,
			accounts: {
				mnemonic:process.env.MNEMONIC,
				count:parseInt(`${process.env.ACCOUNTS}`)
			}
		},
		moonbase: {
			// Need to go to Dicord channel and get DEV (coin in Moonbase Alphanet)
			// And Verify Procedure in https://docs.moonbeam.network/networks/testnet/
			// Faucet https://docs.moonbeam.network/getting-started/testnet/faucet/
			// And Explorer https://moonbase-blockscout.testnet.moonbeam.network/ (Recommend this, https://moonbase.subscan.io/ is too early)
			chainId: 1287,
			url: process.env.URL_MOONBEAM_TESTNET,
			gasPrice: 50000000000,
			accounts: {
				mnemonic:process.env.MNEMONIC
			}
		},
		localhost: {
			url: "http://localhost:8545",
			gasPrice: 35000000000,
			blockGasLimit: 149000000
		},
		hardhat: {
			gasPrice: 35000000000,
			blockGasLimit: 149000000,
			chainId: 31337,
			accounts: {
				mnemonic:process.env.MNEMONIC,
				count:parseInt(`${process.env.ACCOUNTS}`)
			}
		}
	},
	paths: {
		sources: "./contracts",
		tests: "./test",
		cache: "./cache",
		artifacts: "./artifacts"
	},
	mocha: {
		timeout: 20000
	},
	gasReporter: {
		currency: 'USD',
		gasPrice: 35,
		coinmarketcap: process.env.COINMARKETCAP_API_KEY ? true : false,
		maxMethodDiff: 10,
    	excludeContracts: [],
    	src: "./contracts",
	},
	contractSizer: {
		alphaSort: true,
		runOnCompile: true,
		disambiguatePaths: false,
	},
	etherscan: {
		// Your API key for Etherscan
		// Obtain one at https://etherscan.io/
		apiKey: process.env.ETHERSCAN_API_KEY
		// apiKey: process.env.BSCSCAN_API_KEY
	},
	spdxLicenseIdentifier: {
		overwrite: true,
		runOnCompile: true,
	},
  solidity: {
    version: "0.8.7",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
};
