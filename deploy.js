const fs = require('fs');
require('dotenv').config({ path: 'param.env' });


const infuraApiKey = process.env.INFURA_API_KEY;
if (!infuraApiKey) {
  throw new Error('Infura API key not found in env');
  process.exit(1);
}

const { Web3 } = require('web3');
const web3 = new Web3(`https://sepolia.infura.io/v3/${infuraApiKey}`);

// Connexion test
web3.eth.getBlockNumber().then((blockNumber) => {
  console.log('Connected to the node, Block number:', blockNumber);
}).catch((error) => {
  console.error('Houston we have a problem ^^:', error);
});

const path = require('path');
const contractPath = path.resolve(__dirname, 'bin/ProjectEth/contracts/SimpleStorage.json');
const contractData = require(contractPath);
const bytecode = contractData.bytecode;
const abi = contractData.abi;



const senderAddress = '0x945db2CD48057fB1881bf0ecfc3D5F520FFd0D8c';

// Instance creation
const contract = new web3.eth.Contract(abi);

const deployTransaction = contract.deploy({
  data: '0x' + bytecode,
});

// Get estimated gas for the tx
deployTransaction.estimateGas().then((gasEstimate) => {

    const privateKey = process.env.PRIVATE_KEY;
  // Transaction signed
  web3.eth.accounts.signTransaction(
    {
      from: senderAddress,
      gas: gasEstimate,
      gasPrice: '1000000000',
      data: deployTransaction.encodeABI(),
    },
    privateKey
  ).then((signedTransaction) => {
    console.log('ON est la');
    // Here we send the transaction
    web3.eth.sendSignedTransaction(signedTransaction.rawTransaction)
      .on('receipt', (receipt) => {
        console.log('Contract deployed here :', receipt.contractAddress);
      })
      .on('error', (error) => {
        console.error('Error during deployment:', error);
      });
  });
});
