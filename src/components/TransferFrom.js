import React, { Component } from 'react'
import { Form, Button } from 'react-bootstrap'
// import Web3 from 'web3';
// import Erc20Token from '../abis/Erc20Token.json';

class TransferFrom extends Component {
  constructor(props) {
    super(props)
    this.state = {
      fromAddress: '',
      toAddress: '',
      tokenId: 0,
      loading: false,
    }
    this.handleChangefromAddress = this.handleChangefromAddress.bind(this)
    this.handleChangetoAddress = this.handleChangetoAddress.bind(this)
    this.handleChangetokenId = this.handleChangetokenId.bind(this)
    this.handleTransferFrom = this.handleTransferFrom.bind(this)
  }

  async tranferFromCall(fromAddress, toAddress, tokenId) {
    const token = this.props.token
    const account = this.props.account
    if (token !== 'undefined') {
      try {
        await token.methods.TransferFrom(fromAddress, toAddress, tokenId).send({
          from: account,
        })

        this.setState({
          loading: false,
        })
      } catch (e) {
        console.log('Error, TransferFrom(): ', e)
        this.setState({
          loading: false,
        })
      }
    }
  }

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

  handleChangetokenId(event) {
    this.setState({
      tokenId: event.target.value,
    })
  }

  handleTransferFrom = (e) => {
    e.preventDefault()

    this.setState({
      loading: false,
    })
    this.tranferFromCall(
      this.state.fromAddress,
      this.state.toAddress,
      this.state.tokenId,
    )
  }

  render() {
    return (
      <div>
        <Form onSubmit={this.handleTransferFrom}>
          <fieldset disabled={this.state.loading}>
            <Form.Group
              value={this.state.fromAddress}
              onChange={this.handleChangefromAddress}
            >
              <Form.Label>From</Form.Label>
              <Form.Control placeholder="0xabs12a" required />
              <Form.Text className="text-muted">Sender's Address</Form.Text>
            </Form.Group>

            <Form.Group
              value={this.state.toAddress}
              onChange={this.handleChangetoAddress}
            >
              <Form.Label>To</Form.Label>
              <Form.Control placeholder="0xabs12a" required />
              <Form.Text className="text-muted">Recepient's Address</Form.Text>
            </Form.Group>

            <Form.Group
              value={this.state.tokenId}
              onChange={this.handleChangetokenId}
            >
              <Form.Label>Token Id</Form.Label>
              <Form.Control
                placeholder="Token Id"
                required
                pattern="[0-9]*"
                type="number"
                min="1"
              />
            </Form.Group>

            <Button
              variant="primary"
              type="submit"
              disabled={this.state.loading}
            >
              Send
            </Button>
          </fieldset>
        </Form>
      </div>
    )
  }
}

export default TransferFrom
