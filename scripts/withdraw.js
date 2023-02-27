const {getNamedAccounts, ethers} = require("hardhat")

async function main() {
    const { deployer } = await getNamedAccounts()
    const fundMe = await ethers.getContract("FundMe", deployer);
    console.log("Rugging contract...");
    const transactionResponse = await fundMe.withdraw();
    await transactionResponse.wait(1) 
    console.log("Money rugged");
}

main()
.then(() => process.exit(0))
.catch((error) => {
    console.error(error);
    process.exitCode = 1;
});