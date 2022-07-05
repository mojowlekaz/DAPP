
async function connectMetamask(){
	
	const provider = new ethers.providers.Web3Provider(window.ethereum)
	let signer;
				
	const ContractAddress = "0xb09030A969487874CDD6da4B052c9f6D87301D65";
	const ContractABI = [
		{
			"constant": false,
			"inputs": [
				{
					"name": "value",
					"type": "string"
				}
			],
			"name": "setValue",
			"outputs": [],
			"payable": false,
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [
				{
					"name": "value",
					"type": "string"
				}
			],
			"payable": false,
			"stateMutability": "nonpayable",
			"type": "constructor"
		},
		{
			"anonymous": false,
			"inputs": [
				{
					"indexed": true,
					"name": "author",
					"type": "address"
				},
				{
					"indexed": false,
					"name": "oldValue",
					"type": "string"
				},
				{
					"indexed": false,
					"name": "newValue",
					"type": "string"
				}
			],
			"name": "ValueChanged",
			"type": "event"
		},
		{
			"constant": true,
			"inputs": [],
			"name": "getValue",
			"outputs": [
				{
					"name": "",
					"type": "string"
				}
			],
			"payable": false,
			"stateMutability": "view",
			"type": "function"
		}
	];
	 

		await provider.send("eth_requestAccounts", []);
		contract = new ethers.Contract(ContractAddress, ContractABI, provider);
		signer = await provider.getSigner();
		signature = await signer.signMessage ("Connect");
		// contract.connect(signer)
		console.log("Accounts address:", await signer.getAddress());
		Accounts = await signer.getAddress();
		document.getElementById("connectMetamask").outerHTML =  Accounts ;
		
	}
	
	

	
	
	async function getValue() {
		
		const ContractAddress = "0xb09030A969487874CDD6da4B052c9f6D87301D65";
		const ContractABI = [
			{
				"constant": false,
				"inputs": [
					{
						"name": "value",
						"type": "string"
					}
				],
				"name": "setValue",
				"outputs": [],
				"payable": false,
				"stateMutability": "nonpayable",
				"type": "function"
			},
			{
				"inputs": [
					{
						"name": "value",
						"type": "string"
					}
				],
				"payable": false,
				"stateMutability": "nonpayable",
				"type": "constructor"
			},
			{
				"anonymous": false,
				"inputs": [
					{
						"indexed": true,
						"name": "author",
						"type": "address"
					},
					{
						"indexed": false,
						"name": "oldValue",
						"type": "string"
					},
					{
						"indexed": false,
						"name": "newValue",
						"type": "string"
					}
				],
				"name": "ValueChanged",
				"type": "event"
			},
			{
				"constant": true,
				"inputs": [],
				"name": "getValue",
				"outputs": [
					{
						"name": "",
						"type": "string"
					}
				],
				"payable": false,
				"stateMutability": "view",
				"type": "function"
			}
		];
         
	
		if (typeof window.ethereum !== 'undefined'){
			const provider = new ethers.providers.Web3Provider(window.ethereum);
			await window.ethereum.request({ method: 'eth_requestAccounts' })
		    signer =  await provider.getSigner();
			signature = await signer.signMessage ("getValue");
	        Contract = new ethers.Contract(ContractAddress, ContractABI, signer);
			 currentValue = await Contract.getValue();
			console.log(currentValue)
			document.getElementById("getValue").outerHTML = currentValue;
			// console.log(Contract.address);
			// $('#getValue').click(function() {
			// 	$("p").html(Contract.address);
			// });
			// const Value = await window.Contract.methods.getValue(document.getElementById("getValue").value).send({from: account});

			
	
	}
	
	}
	
	
	
	async function getBalance () {
		
		const ContractAddress = "0xD7f0408Eed2ab37800cd63eA9c8b010a5f5D55D0";
		const ContractABI = [
			{
				"inputs": [
					{
						"internalType": "uint256",
						"name": "_amt",
						"type": "uint256"
					}
				],
				"name": "deposit",
				"outputs": [],
				"stateMutability": "nonpayable",
				"type": "function"
			},
			{
				"inputs": [],
				"stateMutability": "nonpayable",
				"type": "constructor"
			},
			{
				"inputs": [],
				"name": "getBalance",
				"outputs": [
					{
						"internalType": "uint256",
						"name": "",
						"type": "uint256"
					}
				],
				"stateMutability": "view",
				"type": "function"
			}
		];
		provider = new ethers.providers.Web3Provider(window.ethereum);
			let Contract = new ethers.Contract(ContractAddress, ContractABI, provider);
			await window.ethereum.request({ method: 'eth_requestAccounts' })
			let signer =  await provider.getSigner();
			signature = await signer.signMessage ("get Balance");
			const value = await  Contract.getBalance();
			console.log("value:" ,await signer.getBalance());
			document.getElementById("getBalance").outerHTML = value;
			// console.log(`Value: ${(Contract.getBalance)}`)			
	}


	async function deposit() {

		
		const ContractAddress = "0xD7f0408Eed2ab37800cd63eA9c8b010a5f5D55D0";
		const ContractABI = [
			{
				"inputs": [
					{
						"internalType": "uint256",
						"name": "_amt",
						"type": "uint256"
					}
				],
				"name": "deposit",
				"outputs": [],
				"stateMutability": "nonpayable",
				"type": "function"
			},
			{
				"inputs": [],
				"stateMutability": "nonpayable",
				"type": "constructor"
			},
			{
				"inputs": [],
				"name": "getBalance",
				"outputs": [
					{
						"internalType": "uint256",
						"name": "",
						"type": "uint256"
					}
				],
				"stateMutability": "view",
				"type": "function"
			}
		];
		provider = new ethers.providers.Web3Provider(window.ethereum);
		let signer =  await provider.getSigner();
		signature = await signer.signMessage("deposit");
		let  Contract = new ethers.Contract(ContractAddress, ContractABI, signer);
	    await window.ethereum.request({ method: 'eth_requestAccounts' })
		const value  = await Contract.deposit(2);
         document.getElementById("setValue").onclick = function() {
			var set = document.getElementById("setValue").value;
			console.log(set);
		 }
		   var amt = 10;
		   amt = parseInt('#setValue').value();
				console.log (value);
				// console.log(val);
				// console.log(amt);
				return contract.deposit(amt)
			}
		
			
    // $('#setValue').click(function (){
    //     var count = 0;
    //     count = parseint(($('setValue')).val());
    //     web3.eth.getAccounts().then(function(accounts) {
    //         var acc = accounts[1];
    //         return contract.methods.setValue(amt).send({from: acc});

    //     }).then(function(tx) {
    //         console.log(tx);
    //     }).catch(function (tx) {

    //         console.log(tx);
    //     })

    
	