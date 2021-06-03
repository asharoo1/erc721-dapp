import React, { Component } from 'react'
import { Form, Button } from 'react-bootstrap'
// import Web3 from 'web3'
// import Token from '../abis/Token.json'

class CheckExisitingToken extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tokenId: 0,
    }

    this.handleChangetokenId = this.handleChangetokenId.bind(this)
    this.handleCheckExisitingToken = this.handleCheckExisitingToken.bind(this)
  }

  // async checkExistingTokenCall(tokenId) {
  //   const web3 = new Web3(window.ethereum)
  //   const netId = await web3.eth.net.getId()
  //   const token = new web3.eth.Contract(
  //     Token.abi,
  //     Token.networks[netId].address,
  //   )
  //   const accounts = await web3.eth.getAccounts()
  //   console.log(accounts[0])
  //   console.log(netId)
  //   if (token !== 'undefined') {
  //     try {
  //       const check = await token.methods.checkTokenExistance(tokenId).send({
  //         from: accounts[0],
  //       })
  //       if (check == true) {
  //         alert('Token ' + this.state.tokenId + ' exists..')
  //       } else {
  //         alert('Token ' + this.state.tokenId + ' does not exists..')
  //       }
  //     } catch (e) {
  //       console.log('Error, checkExistingTokenCall(): ', e)
  //     }
  //   }
  // }

  // async burnTokenCall(tokenId) {
  //   const web3 = new Web3(window.ethereum)
  //   const netId = await web3.eth.net.getId()
  //   const token = new web3.eth.Contract(
  //     Token.abi,
  //     Token.networks[netId].address,
  //   )
  //   const accounts = await web3.eth.getAccounts()
  //   console.log(accounts[0])
  //   console.log(netId)
  //   if (token !== 'undefined') {
  //     try {
  //       await token.methods.burnToken(tokenId).send({
  //         from: accounts[0],
  //       })
        
  //     } catch (e) {
  //       console.log('Error, burnTokenCall(): ', e)
  //     }
  //   }
  // }

  handleChangetokenId = (event) => {
    this.setState({
      tokenId: event.target.value,
    })
  }
  handleCheckExisitingToken = (e) => {
    e.preventDefault()

    
    this.checkExistingTokenCall(this.state.tokenId)
    
  }
  handleBurnToken = (e) => {
    e.preventDefault()

    // alert('To: ' + this.state.tokenId)
    this.burnTokenCall(this.state.tokenId);
  }
  render() {
    return (
      <div>
        <Form onSubmit={this.handleCheckExisitingToken}>
          <Form.Group
            value={this.state.tokenId}
            onChange={this.handleChangetokenId}
          >
            <Form.Label>Token Id</Form.Label>
            <Form.Control placeholder="Token Id" required pattern="[0-9]*" type="number"/>
          </Form.Group>

          <Button variant="primary" type="submit">
            Check
          </Button>
        </Form>
        <Form onSubmit={this.handleBurnToken}>
          <Form.Group
            value={this.state.tokenId}
            onChange={this.handleChangetokenId}
          >
            <Form.Label>Token Id</Form.Label>
            <Form.Control placeholder="Token Id" required pattern="[0-9]*" type="number"/>
          </Form.Group>

          <Button variant="primary" type="submit">
            Burn
          </Button>
        </Form>
      </div>
    )
  }
}

export default CheckExisitingToken
