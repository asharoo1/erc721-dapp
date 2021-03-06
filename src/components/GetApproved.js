import React, { Component } from 'react'
import { Form, Button } from 'react-bootstrap'
class GetApproved extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tokenId: 0,
      loading: false,
    }

    this.handleChangetokenId = this.handleChangetokenId.bind(this)
    this.handleGetApprove = this.handleGetApprove.bind(this)
  }

  async getApprovedCall(tokenId) {
    const token = this.props.token
    var check = ''
    if (token !== 'undefined') {
      try {
        await token.methods
          .getApproved(tokenId)
          .call()
          .then(function (x) {
            check = x
          })

        alert(
          'Aprroved Operator of token Id ' +
            this.state.tokenId +
            ' is ' +
            check,
        )

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
  handleGetApprove = (e) => {
    e.preventDefault()
    this.setState({
      loading: true,
    })
    this.getApprovedCall(this.state.tokenId)
  }
  render() {
    return (
      <div>
        <Form onSubmit={this.handleGetApprove}>
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

export default GetApproved
