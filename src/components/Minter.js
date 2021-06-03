import React, { Component } from 'react'
import { Form, Button } from 'react-bootstrap';
// import Web3 from 'web3';
// import Token from '../abis/Token.json'

class Minter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tokenId: '',
    }

    this.handleChangetokenId = this.handleChangetokenId.bind(this)
    this.handleMinting = this.handleMinting.bind(this)
  }

  // async mintTokenCall(tokenId) {
  //   const web3 = new Web3(window.ethereum);
  //   const netId = await web3.eth.net.getId();
  //   const token = new web3.eth.Contract(
  //     Token.abi,
  //     Token.networks[netId].address,
  //   )
  //   const accounts = await web3.eth.getAccounts();
  //   console.log(accounts[0]);
  //   console.log(netId);
  //   if (token !== 'undefined') {
  //     try {
  //       await token.methods
  //       .mintTokens(tokenId)
  //       .send({
  //         from: accounts[0],
  //       })
  //     } catch (e) {
  //       console.log('Error, mintTokens(): ', e)
  //     }
  //   }
  // }
  handleChangetokenId = (event) => {
    this.setState({
      tokenId: event.target.value,
    })
  }
  handleMinting = (e) => {
    e.preventDefault()

    // alert('To: ' + this.state.tokenId)
    this.mintTokenCall(this.state.tokenId)
  }
  render() {
    return (
      <div>
        <Form onSubmit={this.handleMinting}>
          <Form.Group
            value={this.state.tokenId}
            onChange={this.handleChangetokenId}
          >
            <Form.Label>Token Id</Form.Label>
            <Form.Control placeholder="Token Id" required pattern="[0-9]*" type="number"/>
          </Form.Group>

          <Button variant="primary" type="submit">
            Mint
          </Button>
        </Form>
      </div>
    )
  }
}

export default Minter
