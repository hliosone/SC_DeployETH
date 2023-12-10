# Blockchain Concepts

- **Block Reward:**
  - Rewards given to miners/validators for validating transactions and adding them to the blockchain.

- **Gas Fee:**
  - Transaction fees paid by the initiator of a transaction.

- **Sybil Attack:**
  - Creating a lot of false anonymous accounts to try to influence a network (Really difficult to do in PoS and PoW).

- **51% Attack:**
  - The chain selection algorithm is still used. If you have the longest chain on more than 51% of the network, you can do a fork of the chain.

- **Decentralization:**
  - The bigger the blockchains, the more decentralized it gets and the harder it is to do a 51% Attack.

- **PoW:**
  - Costs a lot of energy, environmental impact.

- **PoS:**
  - Aiming at being Eco-Friendly.
  - Nodes put up collateral as a sybil resistance mechanism instead of solving problems; they stake. If they misbehave on the network, they are going to be slashed or removed a part of their stake.

- **Miners:**
  - Called validators in this system.

- **Randomness:**
  - A really important topic in blockchain.

- **PoS Pros:**
  - Great sybil resistance mechanism and node author selection.
  - Way less expensive in energy; only one node needs to do the work, not all nodes like in PoW, reducing environmental impact by 99%.

- **PoS Cons:**
  - Less decentralized due to the upfront staking cost (32 ETH).

# Scalability and Solutions

- **Scalability Problem:**
  - Not always enough block space for the amount of transactions that want to get in.

- **Sharding:**
  - Solution to the scalability blockchain. It means that it's going to be a blockchain of blockchains. There is a blockchain that is going to coordinate everything (chains that hook into this chain). It can increase the number of transactions in a Layer 1.

- **Layer 1:**
  - Any Base layer blockchain implementations (Bitcoin, Ethereum, Avalanche, etc.).

- **Layer 2:**
  - Any applications built on top of a layer 1 (Arbitrum, Chainlink, Optimism, ...).

- **Rollups:**
  - Ex: Arbitrum and Optimism are called rollups because they roll up their transactions to layer 1. They are kinda like sharded chains, they drive their security from the main network (Ethereum). Solves scalability issues.

- **Rollups vs. Sidechains:**
  - Rollups drive their security from base layers, while sidechains drive their security from their own protocol.

# Remix

- **.sol:**
  - Extension of Solidity files.

- **SPDX:**
  - License Identifier.
  - To specify a license ID, we use the MIT license, one of the least restrictive licenses that exist: `// SPDX-License-Identifier: MIT`.

- **Solidity Version:**
  - `pragma solidity ^0.8.7;`.
  - The `^` means above. It accepts versions above the mentioned one.
  - We can also say: `pragma solidity >=0.8.7 <0.9.0;`. It means accepting versions above or equal to 0.8.7 but below 0.9.0.
  - When compiling our smart contract, the compiler will automatically switch to the exact version or the highest by looking at the pragma.

- **Smart Contract Structure:**
  ```solidity
  contract SimpleStorage {  // Define a contract
  }

    Data Types:
        Boolean, uint, int, address, bytes, string.

    Address Type:
        An address like your ETH address 0x.....

    Uint Types:
        uint8: unsigned integer with 8 bits allocated.
        uint256: 256 bits allocated.

    String Example:

    solidity

string test = "Here is the test";

Bytes32 Example:

solidity

bytes32 favoriteBytes = "cat";  // Talk in upcoming lessons; 32 is the maximum.

Solidity Documentation:

    For all types, check out the Solidity Documentation.

Variable Initialization:

solidity

uint256 test;  // Will get assigned the default null value in Solidity, so here zero.

Function Definition:

solidity

    function store(uint256 _favoriteNumber) public {
      favoriteNumber = _favoriteNumber;
    }

    Deploy and Run Transactions Tab:
        Use the JavaScript VM London, now called Remix VM London. It is a fake local blockchain where we can simulate transactions quickly without having to wait for them to go on the testnet. All of this with fake accounts with 100 ethers on it.
        We can deploy our contracts here.

    Smart Contract Address:
        All smart contracts have an address just like our wallet's account.

    Public Variable:
        By stating that a variable is public, it implicitly creates a get function to return its value.

    Function Visibility:
        Private variable only visible in the current contract.
        External variable: only visible externally.
        Internal: only this contract and its children contracts can call it.
        The default visibility is internal.

    Transactions and Gas:
        Every time we call a function that changes the state of a variable, we are sending a transaction because we are changing the state of the blockchain.
        The more computation we need, the more it will cost in gas.

    View and Pure Functions:
        When called alone, don't spend gas.
        View functions disallow modification of state (so they are const).
        Pure functions also disallow reading from blockchain state.

    Solidity Declaration Format:
        TYPE VISIBILITY VARIABLE_NAME.
        Basic Solidity: Array & Structs.

Ethereum Virtual Machine (EVM)

    EVM Places:
        Stack, Memory, Storage, Calldata, Code, Logs.

    Mapping:
        Data structure where a key is "mapped" to a single value (like a dictionary).

    solidity

mapping(string => uint256) public nameToFavNumber;  // Dictionary where every single name will map to a specific number.

Memory Example:

solidity

    People memory newPerson = People(favNum, name);

Basic Solidity: Memory, Storage & Calldata (Intro)

    EVM can access and store information in six places.

    Calldata & Memory:
        Variables exist temporarily during function execution.
        Calldata & memory variables exist temporarily during function execution, whereas storage variables are persistent across function calls for the lifetime of the contract.

    Calldata vs. Memory:
        Calldata are temporary variables that can't be modified.
        Memory are temporary.

    Mapping Example:

    solidity

    mapping(string => uint256) public nameToFavNumber;  // Dictionary where every single name will map to a specific number.
    nameToFavNumber[_name] = _favNum;  // Creating a mapping that associates the given name with the favorite number.

Deploy Your Smart Contract on a Network:

    Instead of London VM, connect to Injected Web3 (MetaMask) and choose your testnet or network.

    Deploy like on the JS London VM.

    Details Section:
        Gas fees, etc.

    Data Section:
        Represents the contract we are deploying (code).

Ethereum Virtual Machine (EVM):

    All the code we are compiling it to the EVM. Any EVM compatible blockchain allows us to deploy SC in Solidity.

Remix Storage Factory:

    Contracts can deploy contracts.

    solidity

import "./ContractName.sol";  // To import a contract in another contract.

It is essential that contracts interact with each other; it is called composability.

    A single file of Solidity can hold multiple smart contracts.

To call a contract from another file after importing the file (create a variable with the type named after the other contract):

solidity

    OtherContractName public otherContract;
    otherContract = new OtherContractName();  // "new Other---" means that we are going to deploy another smart contract. "otherContract" is here going to hold the address of the new contract we deployed.

Interacting With Other Smart Contracts:

    For interacting with another SC, you need:
        Address of the contract.
        ABI - Application Binary Interface.
        The ABI tells you all the different things you can do with this contract.

Inheritance & Overrides:

    We can have a contract that will inherit all the functionality of another; this is called Inheritance.

    solidity

    contract childContractName is ModelContractName{
    }

    This will cause the child contract to inherit all the functionality of the model contract.

    Overriding a function (surcharge): Our function can do something different in our child contract if we want to.
        In order for a function to be overridden:
            In the main contract, add the keyword "virtual" to it.
            In the child contract, add the keyword "override".

Lesson 4 - Remix Fund Me:

    Transactions Fields:
        Nonce: tx count for the account.
        Gas Price: price per unit of gas (in wei).
        Gas Limit: max gas that this tx can use.
        To: address that the tx is sent to.
        Value: amount of wei to send.
        Data: what to send to the To address.
        v, r, s: components of tx signature.

    Smart Contracts can hold funds just like how wallets can.
        To make our function payable, we add the keyword "payable".
        msg.value; // To get how much value someone is sending.

    If we want to ensure someone is sending, for example, 1 ETH, we can use:

    solidity

    require(msg.value > 1e18);  // Money math is done in terms of wei, so 1 ETH needs to be set as 1e18 value.
    // If the value is lower, it will revert and send an error message (message that we can customize like this:
    require(msg.value > 1e18, "Didn't send enough");

    Reverting means:
        Undo any action that happened before and send the remaining gas back.

Chainlink & Oracles:

    In order to get a value that is out of the blockchain, we have to get the value from an oracle.
        Blockchains are deterministic systems; they can't interact with real-world data.

    Blockchain Oracle:
        Any device that interacts with the off-chain world to provide external data or computation to smart contracts.

    Chainlink Features:
        (Can be completely customized).
        Chainlink Data Feeds (price data) URL: data.chain.link.
        Faucet: faucet.chain.link/networkWeWant, Contract address of the testnet LINK token: 0x779877A7B0D9E8603169DdbD7836e478b4624789.

    Whenever a node operator delivers data to an SC, Chainlink node operators are paid a bit of Oracle gas in LINK tokens.
        When we request the latest price from an oracle, there is a decimal flag associated with it, so we know where to put the dot.

    Chainlink VRF (Verifiable Random Dysfunction) (Deterministic systems can't have randomness).
        With Chainlink VRF, we can have random numbers and guarantee randomness.
        docs.chain.link -> docs -> USING RANDOMNESS/Get a Random Number.

    Chainlink Keepers (Decentralized Event-Driven Execution): Link nodes that listen to a registration contract for an event that you specify to fire.
        For example, every 10 minutes, I want to do something or when this equals this, whatever events we want to code.
        Chainlink nodes listen for these events, and when it turns true, the node will perform whatever action we told him to do. This is decentralized event computation.

    End-to-end Reliability (Chainlink Any API):
        Allows us to connect to anything on the planet (will connect to an API through nodes).

Interfaces & Price Feeds:

    Interaction with a contract outside of our project, so need ABI and Address.
        To get the ABI instead of importing the entire contract:
        We can use an interface instead; it is like a .h file in C++ where there are all the definitions of the functions, so we know how to interact with the contract.
        We can either copy an interface on our code. For example:

        solidity

interface NameContractInterface {
}

After, we can call a function by passing our contract (price feed) as a parameter like this to call functions:

solidity

        NameContractInterface(0x694AA1769357215DE4FAC081bf1f309aDC325306).functionWeWantToCall();

Go and search in ETH Data feeds the contract address we want

function getPrice() public view returns (uint256) {
//ETH USD on Sepolia : 0x694AA1769357215DE4FAC081bf1f309aDC325306
NameContractInterface priceFeed = NameContractInterface(0x694AA1769357215DE4FAC081bf1f309aDC325306);
return priceFeed.version();
}

function getConversionRate() public {}
IMPORTING FROM GitHub & NPM : (4h09)

    We can import a contract directly from Github (NPM Package):

    solidity

    import "@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol";

        By doing this, we are getting the ABI.
