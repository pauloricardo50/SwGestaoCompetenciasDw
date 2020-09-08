import React, { Component } from "react";
import { Row, Col, Nav,NavDropdown,MenuItem } from "react-bootstrap";

export class StatsCard2 extends Component {
  render() {
    return (
      <div className="card card-stats">
        <div className="content">
          <Row>
            <Col xs={12}>
              <div className= "text-center">
                  <p>{this.props.statsText}</p>
                  <div className= "numbers">
                    {this.props.statsValue}
                  </div>
              </div>
            </Col>
          </Row>
          <div className="footer">
            <hr />
          </div>
        </div>
      </div>
    );
  }
}

export default StatsCard2;
