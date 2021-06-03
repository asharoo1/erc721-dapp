import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';

class SafeTransferFrom extends Component {
    constructor(props) {
        super(props)
        this.state = {
          fromAddress: '',
          toAddress: '',
          tokenId: 0,
        }
        this.handleChangefromAddress = this.handleChangefromAddress.bind(this);
        this.handleChangetoAddress = this.handleChangetoAddress.bind(this);
        this.handleTokenId = this.handleTokenId.bind(this);
        this.handleSafeTransferFrom = this.handleSafeTransferFrom.bind(this);
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
    
        alert('From: ' + this.state.fromAddress + 'To: ' + this.state.toAddress + ' Token Id: ' + this.state.tokenId)
        // this.tranferFromCall(this.state.fromAddress, this.state.toAddress, this.state.amount);
      }
  render() {
    return (
      <div>
        <Form onSubmit={this.handleSafeTransferFrom}>
          <Form.Group
            value={this.state.fromAddress}
            onChange={this.handleChangefromAddress}
          >
            <Form.Label>From</Form.Label>
            <Form.Control placeholder="0xabs12a" />
            <Form.Text className="text-muted">Sender's Address</Form.Text>
          </Form.Group>

          <Form.Group
            value={this.state.toAddress}
            onChange={this.handleChangetoAddress}
          >
            <Form.Label>To</Form.Label>
            <Form.Control placeholder="0xabs12a" />
            <Form.Text className="text-muted">Recepient's Address</Form.Text>
          </Form.Group>

          <Form.Group
            value={this.state.tokenId}
            onChange={this.handleTokenId}
          >
            <Form.Label>Token ID</Form.Label>
            <Form.Control placeholder="Token ID" required pattern="[0-9]*" type="number"/>
          </Form.Group>

          <Button variant="primary" type="submit">
            Send
          </Button>
        </Form>
      </div>
    )
  }
}

export default SafeTransferFrom
