import React, { Component } from "react";
import { NavItem, Nav, NavDropdown, MenuItem } from "react-bootstrap";
import { connect } from 'react-redux';

import { logout} from '../../store/actions/usuarios/usuario'
class AdminNavbarLinks extends Component {
  render() {
    const notification = (
      <div>
        <i className="fa fa-globe" />
        <b className="caret" />
        <span className="notification">5</span>
        <p className="hidden-lg hidden-md">Notification</p>
      </div>
    );
    return (
      <div>
        
        <Nav pullRight>  
          <NavItem eventKey={3} href="/login-admin" onClick = {this.props.logout}>
            Sair
          </NavItem>
        </Nav>
      </div>
    );
  }
}

const mapStateToProps = ({ usuario }) => {
  return {
      usuario,
  }
}
const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout()),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(AdminNavbarLinks)