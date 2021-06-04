import React, { Component } from 'react'
import { Form, Button } from 'react-bootstrap'

class IsApprovedForAll extends Component {
  constructor(props) {
    super(props)
    this.state = {
      ownerAddress: '',
      operatorAddress: '',
      loading: false,
    }
    this.handleChangeOwnerAddress = this.handleChangeOwnerAddress.bind(this)
    this.handleChangeOperatorAddress = this.handleChangeOperatorAddress.bind(
      this,
    )
    this.isApprovedForAll = this.isApprovedForAll.bind(this)
  }

  async isApprovedForAllCall(ownerAddress, operatorAddress) {
    const token = this.props.token
    // const account = this.props.account
    var check = false
    if (token !== 'undefined') {
      try {
        await token.methods
          .IsApprovedForAll(ownerAddress, operatorAddress)
          .call()
          .then(function (x) {
            check = x
          })
        if (check) {
          alert(check)
        } else {
          alert(check)
        }
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

  handleChangeOwnerAddress(event) {
    this.setState({
      ownerAddress: event.target.value,
    })
  }

  handleChangeOperatorAddress = (event) => {
    this.setState({
      operatorAddress: event.target.value,
    })
  }
  isApprovedForAll = (e) => {
    e.preventDefault()

    this.setState({
      loading: true,
    })
    this.isApprovedForAllCall(
      this.state.ownerAddress,
      this.state.operatorAddress,
    )
  }
  render() {
    return (
      <div>
        <Form onSubmit={this.isApprovedForAll}>
          <fieldset disabled={this.state.loading}>
            <Form.Group
              value={this.state.ownerAddress}
              onChange={this.handleChangeOwnerAddress}
            >
              <Form.Label>Owner</Form.Label>
              <Form.Control placeholder="0xabs12a" required />
              <Form.Text className="text-muted">Owner's address</Form.Text>
            </Form.Group>

            <Form.Group
              value={this.state.operatorAddress}
              onChange={this.handleChangeOperatorAddress}
            >
              <Form.Label>Operator</Form.Label>
              <Form.Control placeholder="0xabs12a" required />
              <Form.Text className="text-muted">Operator's address</Form.Text>
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

export default IsApprovedForAll
