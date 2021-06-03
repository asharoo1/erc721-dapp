import React, { Component } from 'react';
import { Container, Jumbotron } from 'react-bootstrap';


class Header extends Component {
  render() {
    return (
      <div>
        <Jumbotron fluid>
          <Container>
            <h1>Welcome to Launchnode's ERC-721 Tokens</h1>
            <h4>{this.props.account}</h4>
          </Container>
        </Jumbotron>
      </div>
    )
  }
}

export default Header;
