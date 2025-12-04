const hre = require("hardhat");

async function main() {
  const LUCToken = await hre.ethers.getContractFactory("LUCToken");
  const lucToken = await LUCToken.deploy();

  await lucToken.waitForDeployment();

  console.log("LUCToken deployed to:", await lucToken.getAddress());
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  }); 