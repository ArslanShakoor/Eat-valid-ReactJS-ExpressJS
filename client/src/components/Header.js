import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Payments from './Payments';
import { Navbar, Nav, MenuItem } from 'react-bootstrap';
class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return <MenuItem href="/auth/google">SIGN IN WITH GOOGLE</MenuItem>;
      default:
        return <MenuItem href="/api/logout">LOGOUT</MenuItem>;
    }
  }
  render() {
    console.log(this.props);
    const appNavbar = (
      <Navbar inverse fluid collapseOnSelect>
        <Navbar.Header>
          <Link to={'/'}>
            <Navbar.Brand>CODE SCHOOL</Navbar.Brand>
          </Link>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <div className="row">
            <Nav>
              <MenuItem>
                <Payments />
              </MenuItem>
              <MenuItem>BOOTCAMPS</MenuItem>
              <MenuItem>SUBMIT A REVIEW</MenuItem>
              <MenuItem>
                Donations: {this.props.auth ? this.props.auth.credits : 0}
              </MenuItem>
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
  return { auth };
}
export default connect(mapStateToProps)(Header);
