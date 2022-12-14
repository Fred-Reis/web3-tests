const main = async () => {
  const [deployer] = await hre.ethers.getSigners();
  const accountBalance = await deployer.getBalance();

  console.log('Contract deployed by: ', deployer.address);
  console.log('Account balance: ', accountBalance.toString());

  const waveContractFactory = await hre.ethers.getContractFactory(
    'FirstContract'
  );
  const waveContract = await waveContractFactory.deploy({
    value: hre.ethers.utils.parseEther('0.01'),
  });

  await waveContract.deployed();

  console.log('WavePortal deployed at address: ', waveContract.address);
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

runMain();
