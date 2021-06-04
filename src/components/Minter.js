import React, { Component } from 'react'
import { Form, Button } from 'react-bootstrap';

class Minter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tokenId: '',
      toAddress: '',
      loading: false,
    }

    this.handleChangetokenId = this.handleChangetokenId.bind(this)
    this.handleMinting = this.handleMinting.bind(this)
  }

  async mintTokenCall(tokenId) {
    
    const token = this.props.token;
    const account = this.props.account;
    
    if (token !== 'undefined') {
      try {
        await token.methods
        .mintTokens(tokenId)
        .send({
          from: account,
        })
        this.setState({
          loading: false
        });
      } catch (e) {
        console.log('Error, mintTokens(): ', e);
        this.setState({
          loading: false
        });
      }
    }
  }
  async SafeMintTokenCall(toAddress,tokenId) {
    const token = this.props.token;
    const account = this.props.account;
    
    if (token !== 'undefined') {
      try {
        await token.methods
        .SafeMint(toAddress,tokenId)
        .send({
          from: account,
        })
        this.setState({
          loading: false
        });
      } catch (e) {
        console.log('Error, mintTokens(): ', e);
        this.setState({
          loading: false
        });
      }
    }
  }
  handleChangetokenId = (event) => {
      this.setState({
      tokenId: event.target.value,
    })
  }
  handleChangetoAddress = (event) => {
    this.setState({
      toAddress: event.target.value,
    })
  }
  handleMinting = (e) => {
    e.preventDefault()

    this.setState({
      loading: true
    });
    
    this.mintTokenCall(this.state.tokenId)
  }
  handleSafeMinting = (e) => {
    e.preventDefault()

    this.setState({
      loading: true
    });
    
    this.SafeMintTokenCall(this.state.toAddress,this.state.tokenId)
  }
  render() {
    return (
      <div>
        <Form onSubmit={this.handleMinting}>
          <fieldset disabled={this.state.loading}>
          <Form.Group
            value={this.state.tokenId}
            onChange={this.handleChangetokenId}
          >
            <Form.Label>Token Id</Form.Label>
            <Form.Control placeholder="Token Id" required pattern="[0-9]*" type="number" min="1"/>
          </Form.Group>

          <Button variant="primary" type="submit" disabled={this.state.loading}>
            Mint
          </Button>
          </fieldset>
        </Form>
        <h4>Safe Mint</h4>
        <Form onSubmit={this.handleSafeMinting}>
          <fieldset disabled={this.state.loading}>
          <Form.Group
            value={this.state.toAddress}
            onChange={this.handleChangetoAddress}
          >
            <Form.Label>To</Form.Label>
            <Form.Control placeholder="0xa7ssd124" required />
          </Form.Group>

          <Form.Group
            value={this.state.tokenId}
            onChange={this.handleChangetokenId}
          >
            <Form.Label>Token Id</Form.Label>
            <Form.Control placeholder="Token Id" required pattern="[0-9]*" type="number" min="1"/>
          </Form.Group>

          <Button variant="primary" type="submit" disabled={this.state.loading}>
            Safe Mint
          </Button>
          </fieldset>
        </Form>
      </div>
    )
  }
}

export default Minter
