//SPDX-License-Identifier:UNILICENSEd
pragma solidity ^0.8.11;


contract Inbox{
    string public message;

    function inbox(string memory initialMessage)public{
        message = initialMessage;
            }
    function setMessage(string memory newMessage)public{
        message = newMessage;
    }
}