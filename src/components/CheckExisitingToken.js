import React, { Component } from 'react'
import { Form, Button } from 'react-bootstrap'

class CheckExisitingToken extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tokenId: 0,
      loading: false,
    }

    this.handleChangetokenId = this.handleChangetokenId.bind(this)
    this.handleCheckExisitingToken = this.handleCheckExisitingToken.bind(this)
  }

  async checkExistingTokenCall(tokenId) {
    const token = this.props.token

    var check = false

    if (token !== 'undefined') {
      try {
        await token.methods
          .checkTokenExistance(tokenId)
          .call()
          .then(function (x) {
            check = x
          })
        if (check) {
          alert('Token ' + this.state.tokenId + ' exists..')
        } else {
          alert('Token ' + this.state.tokenId + ' does not exists..')
        }
        this.setState({
          loading: false,
        })
      } catch (e) {
        console.log('Error, checkExistingTokenCall(): ', e)
        this.setState({
          loading: false,
        })
      }
    }
  }

  async burnTokenCall(tokenId) {
    const token = this.props.token
    const account = this.props.account
    if (token !== 'undefined') {
      try {
        await token.methods.burnToken(tokenId).send({
          from: account,
        })
        this.setState({
          loading: false,
        })
      } catch (e) {
        console.log('Error, burnTokenCall(): ', e)
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
  handleCheckExisitingToken = (e) => {
    e.preventDefault()

    this.setState({
      loading: true,
    })
    this.checkExistingTokenCall(this.state.tokenId)
  }
  handleBurnToken = (e) => {
    e.preventDefault()
    this.setState({
      loading: true,
    })
    // alert('To: ' + this.state.tokenId)
    this.burnTokenCall(this.state.tokenId)
  }
  render() {
    return (
      <div>
        <Form onSubmit={this.handleCheckExisitingToken}>
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
              Check
            </Button>
          </fieldset>
        </Form>

        <Form onSubmit={this.handleBurnToken}>
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
              Burn
            </Button>
          </fieldset>
        </Form>
      </div>
    )
  }
}

export default CheckExisitingToken
