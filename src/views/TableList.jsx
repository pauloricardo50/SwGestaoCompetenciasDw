import React, { Component } from "react";
import { Grid, Row, Col, Table } from "react-bootstrap";
import {  Redirect, Link } from "react-router-dom";
import { connect } from 'react-redux';

import Button from "components/CustomButton/CustomButton.jsx";
import Card from "components/Card/Card.jsx";
import { thArray, tdArray,tdArray2 } from "variables/Variables.jsx";


class ListaProjetos extends Component {
  render() {
    return (
      <div className="content">
        <Grid fluid>
        
          <Button bsStyle="info" pullRight fill type="submit" style={{fontSize:"1.3em", marginBottom:"1em"}}> 
            <Link to="/admin/criar-projeto" style={{color:'white'}}>Adicionar</Link> 
          </Button>
          <Row>
            <Col md={12}>
              <Card
                title="Leds Skills"
                category="Projeto de gestão de competências"
                ctTableFullWidth
                ctTableResponsive
                content={
                  
                  <Table striped hover>
                    <thead>
                      <tr>
                        {thArray.map((prop, key) => {
                          return <th key={key}>{prop}</th>;
                        })}
                      </tr>
                    </thead>
                    <tbody>
                      {tdArray.map((prop, key) => {
                        return (
                          <tr key={key}>
                            {prop.map((prop, key) => {
                              return <td key={key}>{prop}</td>;
                            })}
                          </tr>
                        );
                      })}
                    </tbody>
                  </Table>
                }
              />
            </Col>

            <Col md={12}>
              <Card
                plain
                title="IaM Here"
                category="Projeto de Chamada Por Identificação Facial"
                ctTableFullWidth
                ctTableResponsive
                content={
                  <Table hover>
                    <thead>
                      <tr>
                        {thArray.map((prop, key) => {
                          return <th key={key}>{prop}</th>;
                        })}
                      </tr>
                    </thead>
                    <tbody>
                      {tdArray2.map((prop, key) => {
                        return (
                          <tr key={key}>
                            {prop.map((prop, key) => {
                              return <td key={key}>{prop}</td>;
                            })}
                          </tr>
                        );
                      })}
                    </tbody>
                  </Table>
                }
              />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = ({ usuario, projeto, task }) => {
  return {
      usuario,
      projeto,
      task
  }
}
const mapDispatchToProps = dispatch => {
  return {

  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ListaProjetos)
