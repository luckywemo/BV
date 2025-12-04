const hre = require("hardhat");

async function main() {
  const BUILDToken = await hre.ethers.getContractFactory("BUILDToken");
  const buildToken = await BUILDToken.deploy();

  await buildToken.waitForDeployment();

  console.log("BUILDToken deployed to:", await buildToken.getAddress());
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  }); 