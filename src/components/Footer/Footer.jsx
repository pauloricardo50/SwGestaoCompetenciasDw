import React, { Component } from "react";
import { connect } from 'react-redux';

import { Grid, Button } from "react-bootstrap";
import { getProjeto, criarProjeto } from '../../store/actions/projetos/projeto'
import { saveTask } from '../../store/actions/tasks/task'

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <Grid fluid>
          <nav className="pull-left">
            
          </nav>
          <p className="copyright pull-right">
            &copy; {new Date().getFullYear()}{" "}
            <a href="#">
              Leds Skills 
            </a>
            , Trabalho de Desenvolvimento Web.
          </p>
          {/* <Button onClick = {() =>{
            var projeto = {
              "title": "ToDo Day",
              "_id": "5f7c893af94b3a3ba82ee573",
            }
            this.props.getProjeto(projeto._id)
            const task = {
              "title": "Botao de adicionar",
              "assignedTo": this.props.usuario._id,
              "about":"Fazer o adicionar da lista",
              "frontend": "Javascript - React",
              "backend": "Javascript - Express",
              "banco": "MongoDB",
              "category":"Funcionalidade",
              "subcategory":"Botao",
              "finishedAt":"2020-10-21T00:00:00.000Z"
            }
            
            this.props.saveTask(this.props.projeto.projetoUpdate, task)

          }} >TESTE</Button> */}
        </Grid>
      </footer>
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
    getProjeto: (idprojeto) => dispatch(getProjeto(idprojeto)),
    criarProjeto: (projeto) => dispatch(criarProjeto(projeto)),
    saveTask: (projetoUpdate,task) => dispatch(saveTask(projetoUpdate,task)),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Footer)