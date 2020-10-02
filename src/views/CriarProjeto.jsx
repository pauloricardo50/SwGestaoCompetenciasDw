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


const initialState = {
  nameProjeto: '',
  dataInicio: '',
  dataFim: '',
  equipe: '',
  about: '',
}
class CriarProjeto extends Component {

  constructor(props) {
    super(props)
    this.state = initialState
  }

  onChangeNameProjeto = (event) =>{
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  onChangeDataInicio = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
    
  }

  onChangeDataFim = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  onChangeMembro1 = (event) => {
    this.setState({
      [event.target.name]: event.target.value
   })
  }

  onChangeMembro2 = (event) => {
    this.setState({
      [event.target.name]: event.target.value
   })
  }

  onChangeMembro3 = (event) => {
    this.setState({
      [event.target.name]: event.target.value
   })
  }

  onChangeAbout = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

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
                          name: "nameProjeto",
                          label: "Nome do Projeto",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Nome",
                          disabled: false,
                          onChange: this.onChangeNameProjeto
                        },
                        {
                          name: "dataInicio",
                          label: "Data de início",
                          type: "date",
                          bsClass: "form-control",
                          onChange: this.onChangeDataInicio
                        },
                        {
                          name: "dataFim",
                          label: "Data final estipulada",
                          type: "date",
                          bsClass: "form-control",
                          onChange: this.onChangeDataFim
                        }
                      ]}
                    />
                    <FormInputs
                      ncols={["col-md-4", "col-md-4", "col-md-4"]}
                      properties={[
                        {
                          name: "membro1",
                          label: "Membro1",
                          componentClass:"select",
                          placeholder: "Membro",
                          onChange: this.onChangeEquipe
                        },
                        {
                          name: "membro2",
                          label: "Membro2",
                          componentClass:"select",
                          placeholder: "Membro",
                          onChange: this.onChangeEquipe
                        },
                        {
                          name: "membro3",
                          label: "Membro3",
                          componentClass:"select",
                          placeholder: "Membro",
                          onChange: this.onChangeEquipe
                        }
                      ]}
                    />
                    <FormGroup controlId="formControlsSelect">
                      <ControlLabel>Projeto</ControlLabel>
                      <FormControl componentClass="select" placeholder="projeto">
                        <option value="select">select</option>
                        <option value="other">...</option>
                      </FormControl>
                    </FormGroup>          

                    <Row>
                      <Col md={12}>
                        <FormGroup controlId="formControlsTextarea">
                          <ControlLabel>Sobre</ControlLabel>
                          <FormControl
                            name="about"
                            rows="6"
                            componentClass="textarea"
                            bsClass="form-control"
                            placeholder="Observações do projeto"
                            onChange={this.onChangeAbout}
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Button bsStyle="info" pullRight fill type="submit" onClick={()=>{
                      alert(this.state.nameProjeto + this.state.equipe + this.state.dataFim + this.state.dataInicio + this.state.about)
                    }}>
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
