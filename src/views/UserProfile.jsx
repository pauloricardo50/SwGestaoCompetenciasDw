import React, { Component } from "react";
import {
  Grid,
  Row,
  Col,
  FormGroup,
  ControlLabel,
  FormControl
} from "react-bootstrap";
import { connect } from 'react-redux';

import { Card } from "components/Card/Card.jsx";
import { FormInputs } from "components/FormInputs/FormInputs.jsx";
import { FormInputsOption } from "components/FormInputs/FormInputsOption.jsx";
import { UserCard } from "components/UserCard/UserCard.jsx";
import Button from "components/CustomButton/CustomButton.jsx";

import avatar from "assets/img/faces/face-8.jpg";
import wallpaper from "assets/img/faces/wallpaper.jpg";
import wallpaper2 from "assets/img/faces/wallpaper2.jpg";

const initialState = {
  nameTask: '',
  dataInicio: '',
  dataFim: '',
  about: '',
  tecnologias: '',
  categoria:'',
  subCategoria:'',
  getProjeto:'',
}

class UserProfile extends Component {

  constructor(props) {
    super(props)
    this.state = initialState
  }

  async componentDidMount(){  
  }

  onChangeTecnologias = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  onChangeGetProjeto = (getProjetos) => {
    this.setState({
      getProjetos : getProjetos
   })
  }

  onChangeNameTask = (event) =>{
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

  onChangeCategoria = (event) => {
    this.setState({
      [event.target.name]: event.target.value
   })
  }

  onChangeSubCategoria = (event) => {
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
            <Col md={7}>
              <Card
                title="Criar Tasks"
                content={
                  <form>
                    <FormInputs
                      ncols={["col-md-4", "col-md-4", "col-md-4"]}
                      properties={[
                        {
                          name:"nameTask",
                          label: "Nome da Task",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Task",
                          onChange: this.onChangeNameTask,
                        },
                        {
                          name:"dataInicio",
                          label: "Data de início",
                          type: "date",
                          bsClass: "form-control",
                          onChange: this.onChangeDataInicio,
                        },
                        {
                          name:"dataFim",
                          label: "Data final estipulada",
                          type: "date",
                          bsClass: "form-control",
                          onChange: this.onChangeDataFim,
                        }
                      ]}
                    />
                    <FormInputs
                      ncols={["col-md-6", "col-md-6"]}
                      properties={[
                        {
                          name:"categoria",
                          label: "Categoria",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Categoria",
                          onChange: this.onChangeCategoria,
                        },
                        {
                          name:"subCategoria",
                          label: "Subcategoria",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Subcategoria",
                          onChange: this.onChangeSubCategoria,
                        }
                      ]}
                    />
                    <FormInputsOption
                      ncols= {["col-md-12"]}
                      opcoes= {this.props.projeto.getProjetos.projetos}
                      properties={[
                        {
                          name: "projeto",
                          label: "Projeto",
                          componentClass:"select",
                          placeholder: "Projeto",
                          onChange: this.onChangeProjeto,
                        },
                      ]}
                    />       
                    <FormInputs
                      ncols={["col-md-12"]}
                      properties={[
                        {
                          name:"tecnologias",
                          label: "Tecnologias",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Javascript, React, Node, MongoDB",
                          onChange: this.onChangeTecnologias,
                        },
                        
                      ]}
                    />

                    <Row>
                      <Col md={12}>
                        <FormGroup controlId="formControlsTextarea">
                          <ControlLabel>Observações</ControlLabel>
                          <FormControl
                            name="about"
                            rows="5"
                            componentClass="textarea"
                            bsClass="form-control"
                            placeholder="Observações"
                            onChange={this.onChangeAbout}
                           />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Button bsStyle="info" pullRight fill type="submit" onClick={()=>{alert(JSON.stringify(this.state))}}>
                      Criar Task
                    </Button>
                    <div className="clearfix" />
                  </form>
                }
              />
            </Col>
            <Col md={5}>
              <UserCard
                bgImage={wallpaper}
                bgImage2={wallpaper2}
                avatar={avatar}
                name={this.props.usuario.name}
                userName={this.props.usuario.email}
                socials={
                  <div>
                    <Button simple>
                      <i className="fa fa-facebook-square" />
                    </Button>
                    <Button simple>
                      <i className="fa fa-twitter" />
                    </Button>
                    <Button simple>
                      <i className="fa fa-google-plus-square" />
                    </Button>
                  </div>
                }
              />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}
const mapStateToProps = ({ usuario, projeto }) => {
  return {
      usuario,
      projeto
  }
}
const mapDispatchToProps = dispatch => {
  return {
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(UserProfile)