import React, { Component } from "react";
import { connect } from 'react-redux';

import { Grid, Button } from "react-bootstrap";
import { getProjeto, criarProjeto, updateTaskProjeto } from '../../store/actions/projetos/projeto'

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
          <Button onClick = {() =>{
            var projeto = {
              "title": "IAmHere",
              "_id": "5f7c8762f94b3a3ba82ee572",
            }
            this.props.getProjeto(projeto._id)
            const task = {
              "title": "TESTE1",
              "project": projeto._id,
              "technology":"React",
              "description":"TESTE2",
              "category":"TESTE3",
              "subcategory":"TESTE4",
            }
            
            this.props.updateTaskProjeto(this.props.projeto.projetoUpdate, task)

          }} >TESTE</Button>
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
    updateTaskProjeto: (projetoUpdate,task) => dispatch(updateTaskProjeto(projetoUpdate,task)),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Footer)