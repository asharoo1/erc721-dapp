import React, { Component } from 'react'
import { Form, Button } from 'react-bootstrap';
class GetApproved extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tokenId: 0,
    }

    this.handleChangetokenId = this.handleChangetokenId.bind(this)
    this.handleGetApprove = this.handleGetApprove.bind(this)
  }
  handleChangetokenId = (event) => {
    this.setState({
      tokenId: event.target.value,
    })
  }
  handleGetApprove = (e) => {
    e.preventDefault()

    alert('To: ' + this.state.tokenId)
    // this.approveCall(this.state.toAddress, this.state.tokenId);
  }
  render() {
    return (
      <div>
        <Form onSubmit={this.handleGetApprove}>
          
          <Form.Group
            value={this.state.tokenId}
            onChange={this.handleChangetokenId}
          >
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

export default GetApproved
