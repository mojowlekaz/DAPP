




// const provider = new ethers.providers.Web3Provider(.ethereum)
// await provider.send("eth_requestAccounts", []);
// const signer = provider.getSigner()

// var contract;
// $(document).ready(function (){
//     web3 = new Web3(web3.currentProvider);
//     var address = "0xd9145CCE52D386f254917e481eB44e9943F39138";
//     var abi = [
//         [
//             {
//                 "inputs": [
//                     {
//                         "internalType": "uint256",
//                         "name": "_amt",
//                         "type": "uint256"
//                     }
//                 ],
//                 "name": "deposit",
//                 "outputs": [],
//                 "stateMutability": "nonpayable",
//                 "type": "function"
//             },
//             {
//                 "inputs": [],
//                 "stateMutability": "nonpayable",
//                 "type": "constructor"
//             },
//             {
//                 "inputs": [],
//                 "name": "getBalance",
//                 "outputs": [
//                     {
//                         "internalType": "uint256",
//                         "name": "",
//                         "type": "uint256"
//                     }
//                 ],
//                 "stateMutability": "view",
//                 "type": "function"
//             }
//         ]
//     ];

//     contract = new web3.eth.Contract(abi, address);
//     contract.methods.getBalance().call().then(function(bal){
//         $('#balance').html(bal);

//     })

//     $('#deposit').click(function (){
//         var count = 0;
//         count = parseint(($('deposit')).val());
//         web3.eth.getAccounts().then(function(accounts) {
//             var acc = accounts[1];
//             return contract.methods.deposit(amt).send({from: acc});

//         }).then(function(tx) {
//             console.log(tx);
//         }).catch(function (tx) {

//             console.log(tx);
//         })

//     })

// })



// var web3;
// var address = "0xd9145CCE52D386f254917e481eB44e9943F39138";
// async function connect (){
//     await window.web3.currentProvider.enable();
//     web3 = new web3(window.web3.currentProvider);

// }
// if(typeof web3 !=='undefine') {
//     web3=new web3(window.web3.currentProvider);
// }
// else {
//     web3 = new web3(new web3.Provider.HttpProvider("HTTP://127.0.0.1:7545"));
// }

// var abi = [[
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "uint256",
// 				"name": "_amt",
// 				"type": "uint256"
// 			}
// 		],
// 		"name": "deposit",
// 		"outputs": [],
// 		"stateMutability": "nonpayable",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [],
// 		"stateMutability": "nonpayable",
// 		"type": "constructor"
// 	},
// 	{
// 		"inputs": [],
// 		"name": "getBalance",
// 		"outputs": [
// 			{
// 				"internalType": "uint256",
// 				"name": "",
// 				"type": "uint256"
// 			}
// 		],
// 		"stateMutability": "view",
// 		"type": "function"
// 	}
// ]];
// var contract = new web3.eth.contract(abi, address);

// contract = new web3.eth.Contract(abi, address);
//     contract.methods.getBalance().call().then(function(bal){
//        $('#balance').html(bal);
//     })

//         $('#deposit').click(function (){
//         var count = 0;
//         count = parseint(($('deposit')).val());
//         web3.eth.getAccounts().then(function(accounts) {
//             var acc = accounts[1];
//             return contract.methods.deposit(amt).send({from: acc});

//         }).then(function(tx) {
//             console.log(tx);
//         }).catch(function (tx) {

//             console.log(tx);
//         })

//     })

// // })

// const numberContractAddress = "0xd9145CCE52D386f254917e481eB44e9943F39138"
// const numberContractABI = [
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "uint256",
// 				"name": "_amt",
// 				"type": "uint256"
// 			}
// 		],
// 		"name": "deposit",
// 		"outputs": [],
// 		"stateMutability": "nonpayable",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [],
// 		"stateMutability": "nonpayable",
// 		"type": "constructor"
// 	},
// 	{
// 		"inputs": [],
// 		"name": "getBalance",
// 		"outputs": [
// 			{
// 				"internalType": "uint256",
// 				"name": "",
// 				"type": "uint256"
// 			}
// 		],
// 		"stateMutability": "view",
// 		"type": "function"
// 	}
// ]


// async function calldeposit() {
//  const provider = new ethers.providers.web3Provider(window.ethereum)
//  const numberContract = new ethers.Contract(numberContractAddress, numberContractABI)
// }

// const num = await numberContract.number()
// console.log(num.toString)




// const provider = new ethers.providers.Web3Provider(window.ethereum)
// await provider.send("eth_requestAccounts", []);
// const signer = provider.getSigner()




//     contract.methods.getBalance().call().then(function(bal){
//        $('#balance').html(bal);
//     })


// const address ="0xd9145CCE52D386f254917e481eB44e9943F39138"
// const ABI = [
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "uint256",
// 				"name": "_amt",
// 				"type": "uint256"
// 			}
// 		],
// 		"name": "deposit",
// 		"outputs": [],
// 		"stateMutability": "nonpayable",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [],
// 		"stateMutability": "nonpayable",
// 		"type": "constructor"
// 	},
// 	{
// 		"inputs": [],
// 		"name": "getBalance",
// 		"outputs": [
// 			{
// 				"internalType": "uint256",
// 				"name": "",
// 				"type": "uint256"
// 			}
// 		],
// 		"stateMutability": "view",
// 		"type": "function"
// 	}
// ]



