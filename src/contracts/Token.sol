// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.5.0 < 0.9.0;


import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract Token is ERC721{
    
    constructor() ERC721("LaunchNodes", "LNs") public{}
    
    function mintTokens(uint _tokenId) public returns(bool success){
        
        _mint(msg.sender, _tokenId);
        
        return true;
    }
    
    
    function checkTokenExistance(uint _tokenId) public view returns (bool){
        return _exists(_tokenId);
    }
    
    function burnToken(uint _tokenId) public {
        _burn(_tokenId);
    }
    
    // function _approve(address _to, uint _tokenId) public{
    //     approve(_to, _tokenId);
    // }
    
    // function burnToken(uint _tokenId) public {
    //     _burn(_tokenId);
    // }
    
    // function burnToken(uint _tokenId) public {
    //     _burn(_tokenId);
    // }
    
}