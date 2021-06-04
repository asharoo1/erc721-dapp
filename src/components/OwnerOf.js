import React, { Component } from 'react'
import { Form, Button } from 'react-bootstrap'
class OwnerOf extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tokenId: 0,
      loading: false,
    }

    this.handleChangetokenId = this.handleChangetokenId.bind(this)
    this.handleGetOwner = this.handleGetOwner.bind(this)
  }

  async getOwnerOfCall(tokenId) {
    const token = this.props.token
    var check = ''
    if (token !== 'undefined') {
      try {
        await token.methods
          .OwnerOf(tokenId)
          .call()
          .then(function (x) {
            check = x
          })

        alert('Owner Of token Id ' + this.state.tokenId + ' is ' + check)

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
  handleChangetokenId = (event) => {
    this.setState({
      tokenId: event.target.value,
    })
  }
  handleGetOwner = (e) => {
    e.preventDefault()
    this.setState({
      loading: true,
    })
    this.getOwnerOfCall(this.state.tokenId)
  }
  render() {
    return (
      <div>
        <Form onSubmit={this.handleGetOwner}>
          <fieldset disabled={this.state.loading}>
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

export default OwnerOf
