import React, { Component } from 'react';
import {Form, Button} from 'react-bootstrap';
// import Web3 from 'web3';
// import Erc20Token from '../abis/Erc20Token.json';


class Approve extends Component {
  constructor(props) {
    super(props)
    this.state = {
      toAddress: '',
      tokenId: 0,
    }
    this.handleChangeToAddress = this.handleChangeToAddress.bind(this);
    this.handleChangetokenId = this.handleChangetokenId.bind(this);
    this.handleApprove = this.handleApprove.bind(this);
  }
  // async approveCall(spenderAddress, Amount){
    
  //   const web3 = new Web3(window.ethereum);
  //   const netId = await web3.eth.net.getId()
  //   const erc20T = new web3.eth.Contract(
  //     Erc20Token.abi,
  //     Erc20Token.networks[netId].address
  //   );
  //   const accounts = await web3.eth.getAccounts();
  //   if(erc20T !== 'undefined'){
  //     try{
  //       await erc20T.methods
  //       .approve(spenderAddress, Amount)
  //       .send({
  //         from: accounts[0]
  //       });
        
  //     }catch(e){
  //       console.log('Error, transfer(): ', e);
  //     }
  //   }
  // }

  handleChangeToAddress(event) {
    this.setState({
      toAddress: event.target.value,
    })
  }

  handleChangetokenId = (event) => {
    this.setState({
      tokenId: event.target.value,
    })
  }
  handleApprove = (e) => {
    e.preventDefault()

    alert('To: ' + this.state.toAddress + ' Token Id: ' + this.state.tokenId)
    // this.approveCall(this.state.toAddress, this.state.tokenId);
  }

  render() {
    return (
      <div>
        <Form onSubmit={this.handleApprove}>
          <Form.Group value = {this.state.toAddress} onChange={this.handleChangeToAddress}>
            <Form.Label>To</Form.Label>
            <Form.Control placeholder="0xabs12a" />
            <Form.Text className="text-muted">
              address
            </Form.Text>
          </Form.Group>

          <Form.Group value = {this.state.tokenId} onChange={this.handleChangetokenId}>
            <Form.Label>Token Id</Form.Label>
            <Form.Control placeholder="Token Id" />
          </Form.Group>

          <Button variant="primary" type="submit">
            Send
          </Button>
        </Form>
      </div>
    )
  }
}

export default Approve
