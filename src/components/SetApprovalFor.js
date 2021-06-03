import React, { Component } from 'react'
import {Form, Button} from 'react-bootstrap';

class SetApprovalFor extends Component {
  constructor(props) {
    super(props)
    this.state = {
      operator: '',
      approved: false,
    }
    this.handleChangeOperator = this.handleChangeOperator.bind(this)
    this.handleChangeApproved = this.handleChangeApproved.bind(this)
    this.handleSetApprovalFor = this.handleSetApprovalFor.bind(this)
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

    alert('Operator: ' + this.state.operator + ' Aprroved: ' + this.state.approved)
    // this.approveCall(this.state.operator, this.state.approved);
  }
  render() {
    return (
      <div>
        <Form onSubmit={this.handleSetApprovalFor}>
          <Form.Group
            value={this.state.operator}
            onChange={this.handleChangeOperator}
          >
            <Form.Label>Operator</Form.Label>
            <Form.Control placeholder="0xabs12a" />
            <Form.Text className="text-muted">address</Form.Text>
          </Form.Group>

          <Form.Group
            value={this.state.approved}
            onChange={this.handleChangeApproved}
          >
            <Form.Label>Aprroved</Form.Label>
            <Form.Control placeholder="true/false" required pattern="true/false" />
          </Form.Group>

          <Button variant="primary" type="submit">
            Send
          </Button>
        </Form>
      </div>
    )
  }
}

export default SetApprovalFor
