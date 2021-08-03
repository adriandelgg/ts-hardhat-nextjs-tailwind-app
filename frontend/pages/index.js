import { useContext } from 'react';
import { Web3Context } from '@components/Web3Context';

import NavBar from '@components/navbar/NavBar';

export default function Home() {
	const { contract } = useContext(Web3Context);
	return (
		<>
			<NavBar />
			{contract && <main></main>}
		</>
	);
}
