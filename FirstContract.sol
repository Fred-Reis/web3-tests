// SPDX-License-Identifier: MIT

pragma solidity ^0.8.16;


contract FirstContract {
    string name;

    function changeName(string memory _newName ) public {
        name = _newName;
    }

    function getName() public view returns (string memory) {
        return name;
    }

}