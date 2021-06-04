import React, { Component } from 'react'
import { Form, Button } from 'react-bootstrap'

class Approve extends Component {
  constructor(props) {
    super(props)
    this.state = {
      toAddress: '',
      tokenId: 0,
      loading: false,
    }
    this.handleChangeToAddress = this.handleChangeToAddress.bind(this)
    this.handleChangetokenId = this.handleChangetokenId.bind(this)
    this.handleApprove = this.handleApprove.bind(this)
  }
  async approveCall(toAddress, tokenId) {
    const token = this.props.token
    const account = this.props.account
    if (token !== 'undefined') {
      try {
        await token.methods._approveAddress(toAddress, tokenId).send({
          from: account,
        })
        this.setState({
          loading: false,
        })
      } catch (e) {
        console.log('Error, approveCall(): ', e)
        this.setState({
          loading: false,
        })
      }
    }
  }

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
    this.setState({
      loading: true,
    })

    this.approveCall(this.state.toAddress, this.state.tokenId)
  }

  render() {
    return (
      <div>
        <Form onSubmit={this.handleApprove}>
          <fieldset disabled={this.state.loading}>
            <Form.Group
              value={this.state.toAddress}
              onChange={this.handleChangeToAddress}
            >
              <Form.Label>To</Form.Label>
              <Form.Control placeholder="0xabs12a" required />
              <Form.Text className="text-muted">address</Form.Text>
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

export default Approve
