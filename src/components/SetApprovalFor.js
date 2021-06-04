import React, { Component } from 'react'
import { Form, Button } from 'react-bootstrap'

class SetApprovalFor extends Component {
  constructor(props) {
    super(props)
    this.state = {
      operator: '',
      approved: false,
      loading: false,
    }
    this.handleChangeOperator = this.handleChangeOperator.bind(this)
    this.handleChangeApproved = this.handleChangeApproved.bind(this)
    this.handleSetApprovalFor = this.handleSetApprovalFor.bind(this)
  }

  async SetApprovalForAll(operator, approved) {
    const token = this.props.token
    const account = this.props.account
    if (token !== 'undefined') {
      try {
        await token.methods.SetApprovalForAll(operator, approved).send({
          from: account,
        })
        this.setState({
          loading: false,
        })
      } catch (e) {
        console.log('Error, SetApprovalForAll(): ', e)
        this.setState({
          loading: false,
        })
      }
    }
  }

  handleChangeOperator(event) {
    this.setState({
      operator: event.target.value,
    })
  }

  handleChangeApproved = (event) => {
    this.setState({
      approved: event.target.value,
    })
  }
  handleSetApprovalFor = (e) => {
    e.preventDefault()
    this.setState({
      loading: true,
    })
    // alert('Operator: ' + this.state.operator + ' Aprroved: ' + this.state.approved)
    this.SetApprovalForAll(this.state.operator, this.state.approved)
  }
  render() {
    return (
      <div>
        <Form onSubmit={this.handleSetApprovalFor}>
          <fieldset disabled={this.state.loading}>
            <Form.Group
              value={this.state.operator}
              onChange={this.handleChangeOperator}
            >
              <Form.Label>Operator</Form.Label>
              <Form.Control placeholder="0xabs12a" required />
              <Form.Text className="text-muted">address</Form.Text>
            </Form.Group>

            <Form.Group
              value={this.state.approved}
              onChange={this.handleChangeApproved}
            >
              <Form.Label>Aprroved</Form.Label>
              <Form.Control placeholder="true/false" required />
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

export default SetApprovalFor
