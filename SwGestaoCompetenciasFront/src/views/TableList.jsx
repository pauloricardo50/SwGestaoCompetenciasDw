import React, { Component } from "react";
import { Grid, Row, Col, Table } from "react-bootstrap";
import Button from "components/CustomButton/CustomButton.jsx";
import Card from "components/Card/Card.jsx";
import { thArray, tdArray } from "variables/Variables.jsx";

class ListaProjetos extends Component {
  render() {
    return (
      <div className="content">
        <Grid fluid>
        <Button bsStyle="info" pullRight fill type="submit"> Adicionar </Button>
          <Row>
            <Col md={12}>
              <Card
                title="IAmHere"
                category="Projeto de chamada por reconhecimento facial"
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
                title="Striped Table with Hover"
                category="Here is a subtitle for this table"
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
          </Row>
        </Grid>
      </div>
    );
  }
}

export default ListaProjetos;
