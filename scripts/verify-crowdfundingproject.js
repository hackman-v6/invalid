const { run, ethers } = require("hardhat");

async function main() {
  //replace contractAddress with the one we saved above querying the 0th publishedProj
  const contractAddress = "0xE7B20f4F9244a1999f58e49CFc6E648932A57405"; //line5
  const args = [
    "Narmada Bachau", ethers.utils.parseUnits("0.1", 18), "The Narmada Bachao Andolan (NBA) is an Indian social movement that began in 1985 to protest against the construction of big dams along the Narmada River.",
//Insert you wallet's public address here
"0xD6E8BfCCcF42226d518Ad678f587ddf00F59Da46",  //line 9

  ];

  try {
    await run("verify:verify", {
      address: contractAddress,
      constructorArguments: args,
      contract: "contracts/crowdfunding.sol:CrowdfundingProject",
    });
  } catch (error) {
    if (error.message.toLowerCase().includes("already verified")) {
      console.log("Already verified!");
    } else {
      console.log(error);
    }
  }
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
