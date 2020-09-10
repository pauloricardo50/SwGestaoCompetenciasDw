import React, { Component } from "react";
import {
  Grid,
  Row,
  Col,
  FormGroup,
  ControlLabel,
  FormControl
} from "react-bootstrap";

import { Card } from "components/Card/Card.jsx";
import { FormInputs } from "components/FormInputs/FormInputs.jsx";
import Button from "components/CustomButton/CustomButton.jsx";

class CriarProjeto extends Component {
  render() {
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col md={12} >
              <Card
                title="Criar Projeto"
                content={
                  <form>
                    <FormInputs
                      ncols={["col-md-6", "col-md-3", "col-md-3"] }
                      properties={[
                        {
                          label: "Nome do Projeto",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Nome",
                          disabled: false
                        },
                        {
                          label: "Data de início",
                          type: "date",
                          bsClass: "form-control",
                        },
                        {
                          label: "Data final estipulada",
                          type: "date",
                          bsClass: "form-control"
                        }
                      ]}
                    />
                    <FormInputs
                      ncols={["col-md-12"]}
                      properties={[
                        {
                          label: "Equipe",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Membro 1, Membro 2, ... Membro N",
                        }
                      ]}
                    />

                    <Row>
                      <Col md={12}>
                        <FormGroup controlId="formControlsTextarea">
                          <ControlLabel>Observações</ControlLabel>
                          <FormControl
                            rows="6"
                            componentClass="textarea"
                            bsClass="form-control"
                            placeholder="Observações do projeto"
                            defaultValue= {"Sobre:" + "\n\n\n" + "Objetivo:"}
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Button bsStyle="info" pullRight fill type="submit">
                      Criar Projeto
                    </Button>
                    <div className="clearfix" />
                  </form>
                }
              />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default CriarProjeto;
