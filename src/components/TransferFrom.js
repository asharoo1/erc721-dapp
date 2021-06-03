import React, { Component } from 'react'
import { Form, Button } from 'react-bootstrap';
// import Web3 from 'web3';
// import Erc20Token from '../abis/Erc20Token.json';

class TransferFrom extends Component {
  constructor(props) {
    super(props)
    this.state = {
      fromAddress: '',
      toAddress: '',
      amount: 0,
    }
    this.handleChangefromAddress = this.handleChangefromAddress.bind(this);
    this.handleChangetoAddress = this.handleChangetoAddress.bind(this);
    this.handleChangeAmount = this.handleChangeAmount.bind(this);
    this.handleTransferFrom = this.handleTransferFrom.bind(this);
  }

  // async tranferFromCall(fromAddress, toAddress, Amount){
    
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
  //       .transferFrom(fromAddress, toAddress, Amount)
  //       .send({
  //         from: accounts[0]
  //       });
        
  //     }catch(e){
  //       console.log('Error, transferFrom(): ', e);
  //     }
  //   }
  // }

  handleChangefromAddress(event) {
    this.setState({
      fromAddress: event.target.value,
    })
  }

  handleChangetoAddress(event) {
    this.setState({
      toAddress: event.target.value,
    })
  }

  handleChangeAmount(event) {
    this.setState({
      amount: event.target.value,
    })
  }

  handleTransferFrom = (e) => {
    e.preventDefault()

    // alert('From: ' + this.state.fromAddress + 'To: ' + this.state.toAddress + ' Value: ' + this.state.amount)
    this.tranferFromCall(this.state.fromAddress, this.state.toAddress, this.state.amount);
  }

  render() {
    return (
      <div>
        <Form onSubmit={this.handleTransferFrom}>
          <Form.Group value = {this.state.fromAddress} onChange={this.handleChangefromAddress}>
            <Form.Label>From</Form.Label>
            <Form.Control placeholder="0xabs12a" />
            <Form.Text className="text-muted">Sender's Address</Form.Text>
          </Form.Group>

          <Form.Group value = {this.state.toAddress} onChange={this.handleChangetoAddress}>
            <Form.Label>To</Form.Label>
            <Form.Control placeholder="0xabs12a" />
            <Form.Text className="text-muted">Recepient's Address</Form.Text>
          </Form.Group>

          <Form.Group value = {this.state.amount} onChange={this.handleChangeAmount}>
            <Form.Label>Token Id</Form.Label>
            <Form.Control placeholder="Token Id" required pattern="[0-9]*" type="number"/>
          </Form.Group>

          <Button variant="primary" type="submit">
            Send
          </Button>
        </Form>
      </div>
    )
  }
}

export default TransferFrom
