import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import Payments from './Payments';
import { Navbar, Nav, MenuItem, NavItem, NavDropdown } from 'react-bootstrap';
import './index.scss';
class Header extends Component {
  renderContent() {
    if (this.props.auth) {
      return (
        <NavDropdown title={this.props.auth.name} id="basic-nav-dropdown">
          <LinkContainer to="/ratings/my">
            <MenuItem>MY REVIEWS</MenuItem>
          </LinkContainer>
          <MenuItem>
            DONATIONS: {this.props.auth ? this.props.auth.credits : 0}
          </MenuItem>
          <MenuItem href="/api/logout">LOGOUT</MenuItem>
        </NavDropdown>
      );
    } else {
      return <MenuItem href="/auth/google">SIGN IN WITH GOOGLE</MenuItem>;
    }
  }
  render() {
    console.log(this.props);
    const appNavbar = (
      <Navbar fluid collapseOnSelect>
        <Navbar.Header>
          <Link to={'/'}>
            <Navbar.Brand>EAT VALID!</Navbar.Brand>
          </Link>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <div className="row">
            <Nav pullRight>
              <MenuItem>
                <Payments />
              </MenuItem>
              <LinkContainer to="/restaurant/list">
                <NavItem>RESTAURANT</NavItem>
              </LinkContainer>
              <LinkContainer to="/ratings/new">
                <NavItem>SUBMIT A REVIEW</NavItem>
              </LinkContainer>
              {this.renderContent()}
            </Nav>
          </div>
        </Navbar.Collapse>
      </Navbar>
    );
    return <div>{appNavbar}</div>;
  }
}
// mapStateToProps(state){
//   return {auth: state.auth}
// }
function mapStateToProps({ auth }) {
  console.log('ad');
  console.log(auth);
  return { auth };
}
export default connect(mapStateToProps)(Header);
