const { expect } = require('chai');

describe('ContractName', function () {
	let ContractName, owner, bob, contract, contract2;
	const oneEther = ethers.BigNumber.from('1000000000000000000');

	beforeEach(async function () {
		ContractName = await ethers.getContractFactory('ContractName');
		[owner, bob] = await ethers.getSigners();
		contract = await ContractName.deploy();
		contract2 = contract.connect(bob);
	});
});
