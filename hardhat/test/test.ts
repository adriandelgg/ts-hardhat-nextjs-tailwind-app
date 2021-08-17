import { expect } from 'chai';
import { ethers } from 'hardhat';
import { Signer } from 'ethers';

describe("Token", function () {
  let accounts: Signer[];

  beforeEach(async function () {
    accounts = await ethers.getSigners();
  });

  it("should do something right", async function () {
      // We get the contract to deploy
		const Greeter = await ethers.getContractFactory("Greeter");
		const greeter = await Greeter.deploy("Hello, Hardhat!");

		await greeter.deployed();

		// we set the greeting message
		await greeter.setGreeting("Hello, Alice!");
		expect(await greeter.greet()).to.equal("Hello, Alice!");
		console.log("Verify the message setting in the smart contract: ", (await greeter.greet()).toString());
  });
});
