import React, { Component } from "react";
import {
  Grid,
  Row,
  Col,
} from "react-bootstrap";

import { FormInputs } from "components/FormInputs/FormInputs.jsx";
import Button from "components/CustomButton/CustomButton.jsx";


class Login extends Component {
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
                label: "Usuário",
                type: "text",
                bsClass: "form-control",
                placeholder: "Usuário",
                defaultValue: ""
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
                defaultValue: ""
              }
            ]}
          />
          <Button href="/" bsStyle="danger" fill type="submit" pullRight style={{marginTop:"7em", marginRight:"8.5vw",backgroundColor:"#B21648"}}>
            Conectar
          </Button>
        </Col>
        
      <Col  md={7} xs={7} style={{ borderLeft:"solid", borderBottom:"solid", height:"100vh",backgroundColor:"white",}}>
        <p style={{fontWeight:500, fontSize:"2.73em", textAlign : "center", marginTop: "1.5em" }}>Criação de Conta</p>
        <FormInputs

          ncols={["col-md-10"]}
          properties={[
            {
              label: "Usuário",
              type: "text",
              bsClass: "form-control",
              placeholder: "Usuário",
              defaultValue: ""
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
              defaultValue: ""
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
              defaultValue: ""
            }
          ]}
        />
        <Button href="/" bsStyle="info" fill type="submit" pullRight style={{marginTop:"1.27em", marginRight:"11vw", backgroundColor:"#1648B2"}}>
          Criar Conta
        </Button>
      </Col>
      </Row>
      

        
      </Grid>
      
    )
    }
}

export default Login;