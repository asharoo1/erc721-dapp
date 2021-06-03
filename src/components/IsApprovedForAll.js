import React, { Component } from 'react'
import { Form, Button } from 'react-bootstrap'

class IsApprovedForAll extends Component {
  constructor(props) {
    super(props)
    this.state = {
      ownerAddress: '',
      operatorAddress: '',
    }
    this.handleChangeOwnerAddress = this.handleChangeOwnerAddress.bind(this)
    this.handleChangeOperatorAddress = this.handleChangeOperatorAddress.bind(
      this,
    )
    this.isApprovedForAll = this.isApprovedForAll.bind(this)
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

    alert(
      'To: ' +
        this.state.ownerAddress +
        'Operator Address: ' +
        this.state.operatorAddress,
    )
    // this.approveCall(this.state.toAddress, this.state.tokenId);
  }
  render() {
    return (
      <div>
        <Form onSubmit={this.isApprovedForAll}>
          <Form.Group
            value={this.state.ownerAddress}
            onChange={this.handleChangeOwnerAddress}
          >
            <Form.Label>Owner</Form.Label>
            <Form.Control placeholder="0xabs12a" />
            <Form.Text className="text-muted">Owner's address</Form.Text>
          </Form.Group>

          <Form.Group
            value={this.state.operatorAddress}
            onChange={this.handleChangeOperatorAddress}
          >
            <Form.Label>Operator</Form.Label>
            <Form.Control placeholder="0xabs12a" />
            <Form.Text className="text-muted">Operator's address</Form.Text>
          </Form.Group>

          <Button variant="primary" type="submit">
            Send
          </Button>
        </Form>
      </div>
    )
  }
}

export default IsApprovedForAll
