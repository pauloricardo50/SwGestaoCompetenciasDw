import React, { Component } from "react";
import {
  Grid,
  Row,
  Col,
  FormGroup,
  ControlLabel,
  FormControl
} from "react-bootstrap";
import Admin from "./Admin"
import { Route, Redirect } from "react-router-dom";
import { connect } from 'react-redux';
import Alerta from '../components/Alert/Alert'

import { FormInputs } from "components/FormInputs/FormInputs.jsx";
import Button from "components/CustomButton/CustomButton.jsx";
import { criarUsuario, autenticarUsuario } from '../store/actions/usuarios/usuario'
import { alertout } from '../store/actions/alertas/alertas'

const initialState = {
  emailCadastro: '',
  name: '',
  senhaCadastro: '',
  emailLogin: '',
  senhaLogin: '',
  logado: false,
}

class Login extends Component {

  constructor(props) {
    super(props)
    this.state = initialState
  }

  onChangeLogado = () => {
    this.setState({ 
      logado: true
    })
  }

  onChangeName = (event) =>{
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  onChangeEmailCadastro = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
    
  }

  onChangeEmailLogin = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  onChangeSenhaCadastro = (event) => {
    this.setState({
      [event.target.name]: event.target.value
   })
  }

  onChangeSenhaLogin = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render(props) {
    if(this.props.usuario.name){
      this.props.alertout()
      return <Redirect to="/admin/dashboard"/>
    }
    if(this.state.logado){
      this.props.alertout()
      return <Redirect to="/admin/dashboard"/>
    }
    else{
        return(
          <Grid fluid style={{}} >
            <Alerta open= {true} alertTitle= {this.props.alerta.alertTitle} severity= {this.props.alerta.severity} texto= {this.props.alerta.texto}/>
            <Row style={{}}>
            <Col md={5} xs={5} style={{ borderBottom:"solid", height:"100vh",backgroundColor:"#48B216",}}>
              <p style={{fontWeight:500, fontSize:"2.73em", textAlign : "center", marginTop: "1.5em" }}>Leds Skills</p>
              <FormInputs
                
                ncols={["col-md-10"]}
                properties={[
                  {
                    name: "emailLogin",
                    label: "E-mail",
                    type: "text",
                    bsClass: "form-control",
                    placeholder: "E-mail",
                    defaultValue: "",
                    onChange: this.onChangeEmailLogin,                
                  }
                ]}
                          
              />
              <FormInputs
                ncols={["col-md-10"]}
                properties={[
                  {
                    name: "senhaLogin",
                    label: "Senha",
                    type: "password",
                    bsClass: "form-control",
                    placeholder: "Senha",
                    defaultValue: "",
                    onChange: this.onChangeSenhaLogin
                  }
                ]}
              />
              <Button bsStyle="danger" fill type="submit" 
              pullRight style={{marginTop:"7em", marginRight:"8.5vw",backgroundColor:"#B21648"}}
              onClick = { async () => {
                await this.props.autenticarUsuario({email: this.state.emailLogin, password: this.state.senhaLogin})          
                await this.onChangeLogado()
              }}
              >
                Conectar 
              </Button>
            </Col>
            
          <Col  md={7} xs={7} style={{ borderLeft:"solid", borderBottom:"solid", height:"100vh",backgroundColor:"white",}}>
            <p style={{fontWeight:500, fontSize:"2.73em", textAlign : "center", marginTop: "1.5em" }}>Criação de Conta</p>
            <FormInputs

              ncols={["col-md-10"]}
              properties={[
                {
                  name: "name",
                  label: "Nome",
                  type: "text",
                  bsClass: "form-control",
                  placeholder: "Nome",
                  defaultValue: "",
                  onChange: this.onChangeName
              }
              ]}
                        
              />
            <FormInputs
              ncols={["col-md-10"]}
              properties={[
                {
                  name: "emailCadastro",
                  label: "E-Mail",
                  type: "email",
                  bsClass: "form-control",
                  placeholder: "E-mail",
                  defaultValue: "",
                  onChange: this.onChangeEmailCadastro
                }
              ]}
            />
            <FormInputs
              ncols={["col-md-10"]}
              properties={[
                {
                  name: "senhaCadastro",
                  label: "Senha",
                  type: "password",
                  bsClass: "form-control",
                  placeholder: "Senha",
                  defaultValue: "",
                  onChange: this.onChangeSenhaCadastro
                }
              ]}
            />
            <Button bsStyle="info" fill type="submit" 
                    pullRight style={{marginTop:"1.27em", marginRight:"11vw", backgroundColor:"#1648B2"}}
                    onClick = {async () => {
                      this.props.criarUsuario({name: this.state.name, email: this.state.emailCadastro, password: this.state.senhaCadastro})
                    }} >
                      
              Criar Conta
            </Button>
          </Col>
          </Row>        
          </Grid>
          
        )
      }
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
      criarUsuario: usuario => dispatch(criarUsuario(usuario)),
      autenticarUsuario: usuario => dispatch(autenticarUsuario(usuario)),
      alertout: () => dispatch(alertout()),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Login)