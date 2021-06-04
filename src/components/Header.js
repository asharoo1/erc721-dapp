import React, { Component } from 'react'
import { Container, Jumbotron } from 'react-bootstrap'

class Header extends Component {
  render() {
    return (
      <div>
        <Jumbotron fluid>
          <Container>
            <h1 style={{ textAlign: 'center' }}>
              Welcome to Launchnode's ERC-721 Tokens
            </h1>
            <h3 style={{ textAlign: 'center' }}>{this.props.account}</h3>
          </Container>
        </Jumbotron>
      </div>
    )
  }
}

export default Header
