// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.5.0 < 0.9.0;


import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract Token is ERC721{
    
    constructor() ERC721("LaunchNodes", "LNs") public{}
    
    function mintTokens(uint _tokenId) public returns(bool success){
        
        _mint(msg.sender, _tokenId);
        
        return true;
    }
    
    function OwnerOf(uint256 _tokenId) public view returns (address) {
        return ownerOf(_tokenId);
    }
    
    function checkTokenExistance(uint _tokenId) public view returns (bool){
        return _exists(_tokenId);
    }
    
    function tokenName() public view returns (string memory) {
        return name();
    }
    
    function tokenSymbol() public view returns (string memory) {
        return symbol();
    }
    
    function balanceOfToken(address _owner) public view returns (uint256) {
        return balanceOf(_owner);
    }
    
    function ownerOfToken(uint256 _tokenId) public view returns (address) {
        return ownerOf(_tokenId);
    }
    
    
    function _approveAddress(address _to, uint _tokenId) public{
        approve(_to, _tokenId);
    }
    
    function GetApproved(uint _tokenId) public view  returns(address){
        return getApproved(_tokenId);
    }
    
    function SetApprovalForAll(address _operater, bool _approved) public{
        setApprovalForAll(_operater, _approved);
    }
    
    function IsApprovedForAll(address _owner, address _operator) public view returns (bool) {
        return isApprovedForAll(_owner, _operator);
    }
    
    function TransferFrom(address _from, address _to, uint256 _tokenId) public {
       transferFrom(_from, _to, _tokenId);
    }
    
    function SafeTransferFrom(address _from, address _to, uint256 _tokenId) public {
        safeTransferFrom(_from, _to, _tokenId);
    }
    
    function IsApprovedOrOwner(address _spender, uint256 _tokenId) internal view returns (bool) {
        
        return _isApprovedOrOwner(_spender, _tokenId);
    }
    
    function SafeMint(address _to, uint256 _tokenId) public {
        _safeMint(_to, _tokenId);
    }
    
    
    
    function burnToken(uint _tokenId) public {
        _burn(_tokenId);
    }
    
    
    
}