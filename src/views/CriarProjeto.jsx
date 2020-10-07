import React, { Component } from "react";
import { connect } from 'react-redux';
import {
  Grid,
  Row,
  Col,
  FormGroup,
  ControlLabel,
  FormControl
} from "react-bootstrap";

import { getUsuarios } from "../store/actions/usuarios/usuario"
import { criarProjeto } from "../store/actions/projetos/projeto"
import { Card } from "components/Card/Card.jsx";
import { FormInputs } from "components/FormInputs/FormInputs.jsx";
import { FormInputsOption } from "components/FormInputs/FormInputsOption.jsx";
import Button from "components/CustomButton/CustomButton.jsx";


const initialState = {
  nameProjeto: '',
  dataInicio: '',
  dataFim: '',
  about: '',
  getUsuarios: {},
  membro1:'',
  membro2:'',
  membro3:'',
}
class CriarProjeto extends Component {

  constructor(props) {
    super(props)
    this.state = initialState
  }

  async componentDidMount(){
    this.onChangeGetUsuarios(this.props.usuario.getUsuarios)
  }

  onChangeGetUsuarios = (getUsuarios) => {
    this.setState({
      getUsuarios : getUsuarios
    })
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
                    <FormInputsOption
                      ncols= {["col-md-4", "col-md-4", "col-md-4"]}
                      opcoes= {this.props.usuario.getUsuarios.usuarios}
                      properties={[
                        {
                          name: "membro1",
                          label: "Membro1",
                          componentClass:"select",
                          placeholder: "Membro",
                          onChange: this.onChangeMembro1,
                        },
                        {
                          name: "membro2",
                          label: "Membro2",
                          componentClass:"select",
                          placeholder: "Membro",
                          onChange: this.onChangeMembro2,
                        },
                        {
                          name: "membro3",
                          label: "Membro3",
                          componentClass:"select",
                          placeholder: "Membro",
                          onChange: this.onChangeMembro3,
                        }
                      ]}
                    />       

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
                    <Button bsStyle="info" pullRight fill type="submit" 
                    onClick={()=>
                              {
                                // const team = []
                                // const membro1 = this.state.membro1 ? team.push(this.state.membro1) : this.state.membro1
                                // const membro2 = this.state.membro2 ? team.push(this.state.membro2) : this.state.membro2
                                // const membro3 = this.state.membro3 ? team.push(this.state.membro3) : this.state.membro3
                                // const projeto = {
                                //                   title:this.state.nameProjeto, 
                                //                   about:this.state.about,
                                //                   team:team,
                                //                   tasks:[],
                                //                   createdAt:this.state.dataInicio,
                                //                   endedAt:this.state.dataFim
                                //                 }
                                // this.props.criarProjeto(projeto)                                      
                            }
                          }>
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

const mapStateToProps = ({ usuario, alerta }) => {
  return {
      usuario,
      alerta
  }
}
const mapDispatchToProps = dispatch => {
  return {     
      getUsuarios: () => dispatch(getUsuarios()),
      criarProjeto: (projeto) => dispatch(criarProjeto(projeto)),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(CriarProjeto)
