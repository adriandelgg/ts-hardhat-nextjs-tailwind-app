import { useContext } from 'react';
import { Web3Context } from '../Web3Context';

// prettier-ignore
// const abi =

const MetaMask = () => {
	const { setContract, setProvider, ethers, setAccount } =
		useContext(Web3Context);

	async function enableEth() {
		try {
			if (window.ethereum) {
				const provider = new ethers.providers.Web3Provider(window.ethereum);
				const [account] = await ethereum.request({
					method: 'eth_requestAccounts'
				});
				const chainId = await ethereum.request({ method: 'eth_chainId' });
				let contractAddress;

				// Hardhat Local
				if (chainId === '0x7a69') {
					contractAddress = '';

					// Rinkeby
				} else if (chainId === '0x4') {
					contractAddress = '';

					// Polygon Mainnet
				} else if (chainId === '0x89') {
					contractAddress = '';

					// Polygon Testnet
				} else if (chainId === '0x13881') {
					contractAddress = '';

					// Mainnet
				} else if (chainId === '0x1') {
					contractAddress = '';

					// Ropsten
				} else if (chainId === '0x3') {
					contractAddress = '';
				}

				const signer = provider.getSigner(account);
				const contract = new ethers.Contract(
					contractAddress,
					abi,
					signer
				);

				setProvider(provider);
				setContract(contract);
				setAccount(contract.signer._address);
			} else if (window.web3) {
				console.log('Update MetaMask');
			} else {
				console.log('Enable MetaMask');
			}
		} catch (e) {
			console.log(e);
		}
	}

	return (
		<div>
			<button
				className="btn bg-green-400 hover:bg-green-600 mt-8"
				onClick={enableEth}
			>
				Connect Wallet
			</button>
		</div>
	);
};

export default MetaMask;
