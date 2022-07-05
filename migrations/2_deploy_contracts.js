const count = artifacts.require("./count");

const getcountsettings ={
  count : 1
}
module.exports = function(deployer) {
  deployer.deploy(count, getcountsettings.count);
};

// let getcount = getcount.deployed(
//     count.getcount )

// const getcount = artifacts.require("getcount");

// module.exports = function(deployer) {
//   deployer.deploy(getcount);
// };

async function instance () {
  let instance = await count.at("0x8799b33555a6305be1fA6E4c8457B5F6731A76e6")
  // instance.getCount()
  instance.getcount()
  
}
