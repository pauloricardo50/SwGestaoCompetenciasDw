import React, { Component } from "react";
import { Row, Col, Nav,NavDropdown,MenuItem } from "react-bootstrap";

export class StatsCard extends Component {
  render() {
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
                  <MenuItem eventKey={2.1}>{this.props.item1}</MenuItem>
                  <MenuItem eventKey={2.2}>{this.props.item2}</MenuItem>
                  <MenuItem eventKey={2.3}>{this.props.item3}</MenuItem>
                  <MenuItem eventKey={2.4}>{this.props.item4}</MenuItem>
                  <MenuItem eventKey={2.5}>{this.props.item5}</MenuItem>
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
