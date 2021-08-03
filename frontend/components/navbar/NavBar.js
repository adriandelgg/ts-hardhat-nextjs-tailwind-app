import { useContext } from 'react';
import { Web3Context } from '@components/Web3Context';
import MetaMask from './MetaMask';

const NavBar = () => {
	const { account } = useContext(Web3Context);

	return (
		<header className="flex justify-around align-center">
			<nav>
				{!account ? (
					<MetaMask />
				) : (
					<div className="">
						<h3 className="text-center py-1">Wallet Connected</h3>
						<button
							className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-1 px-4 rounded"
							onClick={() => console.log(account)}
						>
							Check Account
						</button>
					</div>
				)}
			</nav>
		</header>
	);
};

export default NavBar;
