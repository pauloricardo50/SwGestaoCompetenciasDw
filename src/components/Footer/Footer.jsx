import React, { Component } from "react";
import { connect } from 'react-redux';

import { Grid, Button } from "react-bootstrap";
import { criarProjeto } from '../../store/actions/projetos/projeto'

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
              'title':"TESTE1",
              'about':"TESTE1",
              'team':[],
              'tasks':[],
              'createdAt':'2020-10-03T19:00:38.383Z',
              'endedAt':'2020-10-02T19:00:38.383Z',
            }
            this.props.criarProjeto(projeto)

          }} >TESTE</Button>
        </Grid>
      </footer>
    );
  }
}

const mapStateToProps = ({ usuario }) => {
  return {
      usuario,
  }
}
const mapDispatchToProps = dispatch => {
  return {
    criarProjeto: (projeto) => dispatch(criarProjeto(projeto)),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Footer)