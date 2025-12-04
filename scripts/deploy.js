const hre = require("hardhat");

async function main() {
  const BVToken = await hre.ethers.getContractFactory("BVToken");
  const bvToken = await BVToken.deploy();

  await bvToken.waitForDeployment();

  console.log("BVToken deployed to:", await bvToken.getAddress());
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  }); 