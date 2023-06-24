
const { ethers } = require("hardhat");

async function main() {
const contract = await ethers.getContractAt("CrowdFactory",
//add the contract address that you just deployed in the last step
"0xbe44C8552236a7cAD922Eb7f0697098A4bFa46AE") //line 6

await contract.createProject(
"Narmada Bachau", 
ethers.utils.parseUnits("0.1", 18), 
"The Narmada Bachao Andolan (NBA) is an Indian social movement that began in 1985 to protest against the construction of big dams along the Narmada River.", 
//insert your wallet's public key
"0xD6E8BfCCcF42226d518Ad678f587ddf00F59Da46") //line 13
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
