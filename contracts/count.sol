// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract count {

    function getcount(uint _num) pure public  returns(uint) {
        _num = 1;
        return _num;

    }

    function incrementcount(uint _num) public pure returns(uint){
        _num = _num +10;
        return _num;
    }
    function decrementcount(uint _num) public pure returns(uint){
        _num = _num -4;
        return _num;
    }
    function multcount(uint _num) public pure returns(uint){
        _num = _num**2;
        return _num;
    }
    
}