import React, { Component } from 'react'
import { Tab, Row, Nav, Col } from 'react-bootstrap'
import Token from './build/contracts/Token.json'
import Web3 from 'web3'
import Header from './components/Header'
import TransferFrom from './components/TransferFrom'
import Approve from './components/Approve'
import Details from './components/Details'
import SafeTransferFrom from './components/SafeTransferFrom'
import SetApprovalFor from './components/SetApprovalFor'
import GetApproved from './components/GetApproved'
import IsApprovedForAll from './components/IsApprovedForAll'
import Minter from './components/Minter'
import CheckExisitingToken from './components/CheckExisitingToken';
import OwnerOf from './components/OwnerOf';

class App extends Component {
  async componentDidMount() {
    await this.loadBlockchainData(this.props.dispatch)
  }

  // connect the app with the blockchain
  async loadBlockchainData(dispatch) {
    //check if MetaMask exists
    if (typeof window.ethereum !== 'undefined') {
      const web3 = new Web3(window.ethereum)
      const netId = await web3.eth.net.getId()
      const accounts = await web3.eth.getAccounts()
      console.log(accounts[0])
      if (typeof accounts[0] !== 'undefined') {
        // const balance = await web3.eth.getBalance(accounts[0]);
        this.setState({
          account: accounts[0],
          // balance: web3.utils.fromWei(balance),
          web3: web3,
          netId: netId,
        })
      } else {
        window.alert('Please login with Metamask.')
      }

      try {
        const token = new web3.eth.Contract(
          Token.abi,
          Token.networks[netId].address,
        )

        const tokenAddress = Token.networks[netId].address

        console.log('Token Address: ', tokenAddress)
        const tokenBalance = await token.methods
          .balanceOf(this.state.account)
          .call()

        console.log('Token Balance: ', tokenBalance)
        this.setState({
          tokenAddress: tokenAddress,
          token: token,
          tokenBalance: tokenBalance,
        })
      } catch (e) {
        console.log('Error', e)
        window.alert('Contracts not deployed to the current network')
      }
    } else {
      window.alert('Please install Metamask')
    }
  }

  constructor(props) {
    super(props)
    this.state = {
      web3: 'undefined',
      netId: 0,
      account: '',
      token: null,
      tokenSymbol: 'LNs',

      tokenName: 'Launchnodes',
      balance: 0,
      tokenAddress: null,

      tokenBalance: 0,
    }
  }

  render() {
    return (
      <div>
        <Header account={this.state.account} />
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Row>
            <Col sm={3}>
              <Nav variant="pills" className="flex-column">
                <Nav.Item>
                  <Nav.Link eventKey="first">Mint Token</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">
                    Check/Burn Exisiting Token
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Transfer From</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="fourth">Safe Transfer From</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="fifth">Approve</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="sixth">Set Approval For</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="seventh">Get Approved</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="eighth">Is Approved For All</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="ninth">Owner Of Token</Nav.Link>
                  </Nav.Item>
                  <Nav.Link eventKey="tenth">Details</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={9}>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Minter
                    token={this.state.token}
                    account={this.state.account}
                  />
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <CheckExisitingToken
                    token={this.state.token}
                    account={this.state.account}
                  />
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <TransferFrom
                    token={this.state.token}
                    account={this.state.account}
                  />
                </Tab.Pane>
                <Tab.Pane eventKey="fourth">
                  {
                    <SafeTransferFrom
                      token={this.state.token}
                      account={this.state.account}
                    />
                  }
                </Tab.Pane>
                <Tab.Pane eventKey="fifth">
                  <Approve
                    token={this.state.token}
                    account={this.state.account}
                  />
                </Tab.Pane>
                <Tab.Pane eventKey="sixth">
                  <SetApprovalFor
                    token={this.state.token}
                    account={this.state.account}
                  />
                </Tab.Pane>
                <Tab.Pane eventKey="seventh">
                  <GetApproved
                    token={this.state.token}
                    
                  />
                </Tab.Pane>
                <Tab.Pane eventKey="eighth">
                  <IsApprovedForAll
                    token={this.state.token}
                    
                  />
                </Tab.Pane>
                <Tab.Pane eventKey="ninth">
                  <OwnerOf
                    token={this.state.token}
                    
                  />
                </Tab.Pane>
                <Tab.Pane eventKey="tenth">
                  {
                    <Details
                      account={this.state.account}
                      tokenName={this.state.tokenName}
                      tokenSymbol={this.state.tokenSymbol}
                      tokenBalance={this.state.tokenBalance}
                    />
                  }
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </div>
    )
  }
}

export default App
