import React, { Component } from 'react';
import Hello from './Hello';
import Today from './Today';

import {
  Grid,
  Navbar,
  Nav,
  NavItem,
  Jumbotron,
  Button
} from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar inverse fixedTop>
          <Grid>
            <Navbar.Header>
              <Navbar.Brand>
                <a href="/">Medical Hall</a>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
              <Nav pullRight>
                <NavItem href="/Login">
                  Login
                </NavItem>
                <NavItem href="/Signup">
                  Signup
                </NavItem>
              </Nav>
            </Navbar.Collapse>
          </Grid>
        </Navbar>
        <Jumbotron>
          <Grid>
            <h1>Medical Hall</h1>
            <p className="App-title">Medicine delivery to your door in a snap</p>
            <p><Button bsStyle="success" bsSize="large">
              Learn more
            </Button></p>
            <Hello name="Varma"><Today /></Hello>
            <Hello name="Hussain"/>
            <Hello name="Harika"/>
          </Grid>
        </Jumbotron>
      </div>
    );
  }
}

export default App;
