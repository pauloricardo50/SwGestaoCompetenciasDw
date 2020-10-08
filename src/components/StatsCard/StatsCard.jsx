import React, { Component } from "react";
import { Row, Col, Nav,NavDropdown,MenuItem } from "react-bootstrap";


function MenuItemGroupTitle(opcoes){
  var row = [];
    for (var i = 0; i < opcoes.opcoes.length; i++) {
      row.push(
          
          <MenuItem eventKey={opcoes.opcoes[i]._id}>{opcoes.opcoes[i].title}</MenuItem>
              
      );
    }
    return row;
}

function MenuItemGroupEmail(opcoes){
  var row = [];
    for (var i = 0; i < opcoes.opcoes.length; i++) {
      row.push(
          
          <MenuItem eventKey={opcoes.opcoes[i]._id}>{opcoes.opcoes[i].email}</MenuItem>
              
      );
    }
    return row;

}

export class StatsCard extends Component {
  render() {
    const MenuItem = this.props.opcoes[0].title ? <MenuItemGroupTitle opcoes = {this.props.opcoes}/> : <MenuItemGroupEmail opcoes = {this.props.opcoes}/>

    return (
      <div className="card card-stats">
        <div className="content">
          <Row>
            <Col xs={5}>
              <div className="icon-big text-center icon-warning">
                {this.props.bigIcon}
              </div>
            </Col>
            <Col xs={7}>
              <div className="text-center" style={{fontSize:"1.5em", width:"6.3em"}}>
                <Nav>
                <NavDropdown
                  eventKey={2}
                  title={this.props.statsText}
                  id="basic-nav-dropdown"
                >
                  {MenuItem}
                </NavDropdown>
                </Nav>
              </div>
            </Col>
          </Row>
          <div className="footer">
            <hr />
            <div className="stats">
              {this.props.statsIcon} {this.props.statsIconText}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default StatsCard;
