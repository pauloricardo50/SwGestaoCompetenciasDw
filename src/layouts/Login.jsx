import React, { Component } from "react";
import {
  Grid,
  Row,
  Col,
} from "react-bootstrap";
import { connect } from 'react-redux';

import { FormInputs } from "components/FormInputs/FormInputs.jsx";
import Button from "components/CustomButton/CustomButton.jsx";
import { criarUsuario, autenticarUsuario} from '../store/actions/usuarios/usuario'

const initialState = {
  emailCadastro: '',
  name: '',
  senhaCadastro: '',
  emailLogin: '',
  senhaLogin: '',
}

class Login extends Component {

  constructor(props) {
    super(props)
    this.state = initialState
  }

  onChangeName = (name) => {
    this.setState({
        name
    })
  }

  onChangeEmailCadastro = (emailCadastro) => {
    this.setState({
        emailCadastro
    })
  }

  onChangeEmailLogin = (emailLogin) => {
    this.setState({
      emailLogin
    })
  }

  onChangeSenhaCadastro = (senhaCadastro) => {
    this.setState({
      senhaCadastro
   })
  }

  onChangeSenhaLogin = (senhaLogin) => {
    this.setState({
      senhaLogin
    })
  }

  render() {
    return(
      <Grid fluid style={{}} >
        <Row style={{}}>
        <Col md={5} xs={5} style={{ borderBottom:"solid", height:"100vh",backgroundColor:"#48B216",}}>
          <p style={{fontWeight:500, fontSize:"2.73em", textAlign : "center", marginTop: "1.5em" }}>Leds Skills</p>
          <FormInputs
            
            ncols={["col-md-10"]}
            properties={[
              {
                label: "E-mail",
                type: "text",
                bsClass: "form-control",
                placeholder: "E-mail",
                defaultValue: "",
                onChange: {value: this.onChangeEmailLogin}
                                      }
            ]}
                      
          />
          <FormInputs
            ncols={["col-md-10"]}
            properties={[
              {
                label: "Senha",
                type: "password",
                bsClass: "form-control",
                placeholder: "Senha",
                defaultValue: "",
                onChange: {value: this.onChangeSenhaLogin}
              }
            ]}
          />
          <Button bsStyle="danger" fill type="submit" 
          pullRight style={{marginTop:"7em", marginRight:"8.5vw",backgroundColor:"#B21648"}}
          onClick = {() => {
            this.props.autenticarUsuario({ email: this.props.email, password: this.state.senha})
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
              label: "Nome",
              type: "text",
              bsClass: "form-control",
              placeholder: "Nome",
              defaultValue: "",
              onChange: {value: this.onChangeName}
                                    }
          ]}
                    
          />
        <FormInputs
          ncols={["col-md-10"]}
          properties={[
            {
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
              label: "Senha",
              type: "password",
              bsClass: "form-control",
              placeholder: "Senha",
              defaultValue: "",
              onChange: {value: this.onChangeSenhaCadastro}
            }
          ]}
        />
        <Button bsStyle="info" fill type="submit" 
                pullRight style={{marginTop:"1.27em", marginRight:"11vw", backgroundColor:"#1648B2"}}
                onClick = {() => {
                  this.props.criarUsuario({name: this.state.name, email: this.state.email, password: this.state.senha})
                }} >
          Criar Conta
        </Button>
      </Col>
      </Row>        
      </Grid>
      
    )
    }
}
const mapStateToProps = ({ user }) => {
  return {
      user,
  }
}
const mapDispatchToProps = dispatch => {
  return {
      criarUsuario: user => dispatch(criarUsuario(user)),
      autenticarUsuario: user => dispatch(autenticarUsuario(user)),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Login)