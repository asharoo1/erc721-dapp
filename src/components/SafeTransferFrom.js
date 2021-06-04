import React, { Component } from 'react'
import { Form, Button } from 'react-bootstrap'

class SafeTransferFrom extends Component {
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
    this.handleTokenId = this.handleTokenId.bind(this)
    this.handleSafeTransferFrom = this.handleSafeTransferFrom.bind(this)
  }

  async SafeTranferFromCall(fromAddress, toAddress, tokenId) {
    const token = this.props.token
    const account = this.props.account
    if (token !== 'undefined') {
      try {
        await token.methods
          .SafeTransferFrom(fromAddress, toAddress, tokenId)
          .send({
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

  handleTokenId(event) {
    this.setState({
      tokenId: event.target.value,
    })
  }

  handleSafeTransferFrom = (e) => {
    e.preventDefault()

    this.setState({
      loading: true,
    })

    this.SafeTranferFromCall(
      this.state.fromAddress,
      this.state.toAddress,
      this.state.tokenId,
    )
  }
  render() {
    return (
      <div>
        <Form onSubmit={this.handleSafeTransferFrom}>
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
              onChange={this.handleTokenId}
            >
              <Form.Label>Token ID</Form.Label>
              <Form.Control
                placeholder="Token ID"
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

export default SafeTransferFrom
