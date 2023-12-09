// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7; //good version

contract SimpleStorage {

    uint256 private  favNumber;

    //Dictionnary to map name to value
  mapping (string => uint256) public nameToFavNum;
  
    struct People {
      uint256 favNumber;
      string name;
    } 

    //Array of People objects
    People[] public peopleList;

    //store the new value of the favNumber
    function store(uint256 favNum) public virtual {
      favNumber = favNum;
    }

    //pure
    function get() public pure returns (uint256){
        return(1+1);
    }

    //view
    function retrieve() public view returns (uint256){
      return favNumber;
    }

    //add a person to an array and do the mapping 
    function addPerson(string memory _name, uint256 _favNumber) public {
      peopleList.push(People(_favNumber, _name));
      nameToFavNum[_name] = _favNumber;

    }

}

// 0x4dca3101362e25987a33b1490ea019979a6e4f98
// address of the contract