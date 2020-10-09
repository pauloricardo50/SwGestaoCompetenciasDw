import React, { Component } from "react";
import ChartistGraph from "react-chartist";
import { Grid, Row, Col } from "react-bootstrap";
import { connect } from 'react-redux';

import { getTasks } from "../store/actions/tasks/task"

import { Card } from "components/Card/Card.jsx";
import { StatsCard } from "components/StatsCard/StatsCard.jsx";
import { TasksRelatorio } from "components/Tasks/TasksRelatorio.jsx";
import {
  dataLinguagens,
  graficoAtividades,
  optionsAtividades,
  responsiveAtividades,
  legendSales,
  dataBar,
  optionsBar,
  responsiveBar,
  legendBar
} from "variables/Variables.jsx";



class Relatorios extends Component {
  contaLinguagensFront = () => {    
    var listaQtdFront = [0,0,0,0,0]
    if(this.props.task.getTasks.tasks!==undefined){
      var tamanho = 0
      const tasks = this.props.task.getTasks.tasks

      // this.props.task.getTasks.tasks[0].frontend
      // this.props.task.frontend
      // ["Javascript - React", "Javascript - Angular", "Javascript - Vue.js", "Javascript - Ionic","Dart - Flutter"]
      tasks.map((task, index) => {
        if(task.frontend == "Javascript - React"){
          listaQtdFront[0] += 1
          tamanho +=1          
        }
        else if(task.frontend == "Javascript - Angular"){
          listaQtdFront[1] += 1
          tamanho +=1 
        }
        else if(task.frontend == "Javascript - Vue.js"){
          listaQtdFront[2] += 1
          tamanho +=1 
        }
        else if(task.frontend == "Javascript - Ionic"){
          listaQtdFront[3] += 1
          tamanho +=1 
        }
        else if(task.frontend == "Dart - Flutter"){
          listaQtdFront[4] += 1
          tamanho +=1 
        }
      })
      const data = [
                    ((listaQtdFront[0]/tamanho)*100), 
                    ((listaQtdFront[1]/tamanho)*100), 
                    ((listaQtdFront[2]/tamanho)*100), 
                    ((listaQtdFront[3]/tamanho)*100), 
                    ((listaQtdFront[4]/tamanho)*100)
                  ]
      return data
    }
  }
  contaLinguagensBack = () => {    
    var listaQtdBack = [0,0,0,0,0]
    if(this.props.task.getTasks.tasks!==undefined){
      var tamanho = 0
      const tasks = this.props.task.getTasks.tasks
      // this.props.task.getTasks.tasks[0].frontend
      // this.props.task.frontend
      // backend: ["Javascript - Express", "Python - Django","Ruby - Rails", "PHP - Laravel", "Java - Spring"],
      tasks.map((task, index) => {
        if(task.backend == "Javascript - Express"){
          listaQtdBack[0] += 1
          tamanho +=1 
        }
        else if(task.backend == "Python - Django"){
          listaQtdBack[1] += 1
          tamanho +=1 
        }
        else if(task.backend == "Ruby - Rails"){
          listaQtdBack[2] += 1
          tamanho +=1 
        }
        else if(task.backend == "PHP - Laravel"){
          listaQtdBack[3] += 1
          tamanho +=1 
        }
        else if(task.backend == "Java - Spring"){
          listaQtdBack[4] += 1
          tamanho +=1 
        }
      })
      const data = [
                    ((listaQtdBack[0]/tamanho)*100), 
                    ((listaQtdBack[1]/tamanho)*100), 
                    ((listaQtdBack[2]/tamanho)*100), 
                    ((listaQtdBack[3]/tamanho)*100), 
                    ((listaQtdBack[4]/tamanho)*100)
                  ]
      return data
    }
  }
  contaLinguagensBanco = () => {    
    var listaQtdBanco = [0,0,0,0,0]
    if(this.props.task.getTasks.tasks!==undefined){
      var tamanho = 0
      const tasks = this.props.task.getTasks.tasks
      // this.props.task.getTasks.tasks[0].frontend
      // this.props.task.frontend
      // bd: ["MongoDB", "Firebase", "Oracle", "MySQL", "DynamoDB"],
      tasks.map((task, index) => {
        if(task.banco == "MongoDB"){
          listaQtdBanco[0] += 1
          tamanho +=1 
        }
        else if(task.banco == "Firebase"){
          listaQtdBanco[1] += 1
          tamanho +=1 
        }
        else if(task.banco == "Oracle"){
          listaQtdBanco[2] += 1
          tamanho +=1 
        }
        else if(task.banco == "MySQL"){
          listaQtdBanco[3] += 1
          tamanho +=1 
        }
        else if(task.banco == "DynamoDB"){
          listaQtdBanco[4] += 1
          tamanho +=1 
        }
      })
      const data = [
                    ((listaQtdBanco[0]/tamanho)*100), 
                    ((listaQtdBanco[1]/tamanho)*100), 
                    ((listaQtdBanco[2]/tamanho)*100), 
                    ((listaQtdBanco[3]/tamanho)*100), 
                    ((listaQtdBanco[4]/tamanho)*100)
                  ]
      return data
    }
  }
  async componentDidMount(){
    this.props.getTasks()
  }
  createLegend(json) {
    var legend = [];
    for (var i = 0; i < json["names"].length; i++) {
      if (json["names"][i] != ""){
        var type = "fa fa-circle text-" + json["types"][i];
        legend.push(<i className={type} key={i} />);
        legend.push(" ");
        legend.push(json["names"][i]);
      }
    }
    return legend;
  }
  render() {
    var dataFront
    var dataBack
    var dataBanco
    var legendLinguagensFront = {
      names: this.props.task.frontend,
      types: ["info", "danger", "warning","success",]
    } 
    var dataLinguagensFront = {
      labels: ["45%", "20%", "10%","15%","10%"],
      series: [45,20,10,15,10]
    };
    var legendLinguagensBack = {
      names: this.props.task.backend,
      types: ["info", "danger", "warning","success",]
    } 
    var dataLinguagensBack = {
      labels: ["45%", "20%", "10%","15%","10%"],
      series: [45,20,10,15,10]
    };
    var legendLinguagensBanco = {
      names: this.props.task.bd,
      types: ["info", "danger", "warning","success",]
    } 
    var dataLinguagensBanco = {
      labels: ["45%", "20%", "10%","15%","10%"],
      series: [45,20,10,15,10]
    };
    if(this.props.task.getTasks.tasks!==undefined){
      dataFront = this.contaLinguagensFront()
      dataBack = this.contaLinguagensBack()
      dataBanco = this.contaLinguagensBanco()
      dataLinguagensFront = {
                labels: [dataFront[0].toFixed(2).toString()+"%", dataFront[1].toFixed(2).toString()+"%", dataFront[2].toFixed(2).toString()+"%",dataFront[3].toFixed(2).toString()+"%",dataFront[4].toFixed(2).toString()+"%"],
                series: [dataFront[0],dataFront[1],dataFront[2],dataFront[3],dataFront[4]]
      };
      dataLinguagensBack = {
        labels: [dataBack[0].toFixed(2).toString()+"%", dataBack[1].toFixed(2).toString()+"%", dataBack[2].toFixed(2).toString()+"%",dataBack[3].toFixed(2).toString()+"%",dataBack[4].toFixed(2).toString()+"%"],
        series: [dataBack[0],dataBack[1],dataBack[2],dataBack[3],dataBack[4]]
      };
      dataLinguagensBanco = {
        labels: [dataBanco[0].toFixed(2).toString()+"%", dataBanco[1].toFixed(2).toString()+"%", dataBanco[2].toFixed(2).toString()+"%",dataBanco[3].toFixed(2).toString()+"%",dataBanco[4].toFixed(2).toString()+"%"],
        series: [dataBanco[0],dataBanco[1],dataBanco[2],dataBanco[3],dataBanco[4]]
      };
     
    }  

    
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col lg={3} sm={6}>
              <StatsCard
                bigIcon={<i className="pe-7s-news-paper text-warning" />}
                statsText="Projetos"
                opcoes = {this.props.projeto.getProjetos.projetos}
              />
              
            </Col>
            <Col lg={3} sm={6}>
              <StatsCard
                bigIcon={<i className="pe-7s-users text-success" />}
                statsText="Alunos"
                opcoes = {this.props.usuario.getUsuarios.usuarios}
              />
            </Col>
          </Row>
          <Row>
            <Col md={8}>
              <Card
                id="graficoAtividades"
                title="Atividades Concluídas"
                category="Mensalmente"
                content={
                  <div className="ct-chart">
                    <ChartistGraph
                      data={graficoAtividades}
                      type="Line"
                      options={optionsAtividades}
                      responsiveOptions={responsiveAtividades}
                    />
                  </div>
                }
              />
            </Col>
            <Col md={4}>
            
            
              <Card
                title="Principais Linguagens Banco de Dados"
                content={
                  <div
                    id="chartPreferences"
                    className="ct-chart ct-perfect-fourth"
                  >
                    <ChartistGraph data={dataLinguagensBanco} type="Pie" />
                  </div>
                }
                legend={
                  <div className="legend">{this.createLegend(legendLinguagensBanco)}</div>
                }
              />
            </Col>
          </Row>
          <Row>
            <Col md={6}>
            <Card
                title="Principais Linguagens Frontend"
                content={
                  <div
                    id="chartPreferences"
                    className="ct-chart ct-perfect-fourth"
                  >
                    <ChartistGraph data={dataLinguagensFront} type="Pie" />
                  </div>
                }
                legend={
                  <div className="legend">{this.createLegend(legendLinguagensFront)}</div>
                }
              />
            </Col>
            <Col md={6}>
            <Card
                title="Principais Linguagens Backend"
                content={
                  <div
                    id="chartPreferences"
                    className="ct-chart ct-perfect-fourth"
                  >
                    <ChartistGraph data={dataLinguagensBack} type="Pie" />
                  </div>
                }
                legend={
                  <div className="legend">{this.createLegend(legendLinguagensBack)}</div>
                }
              />
            </Col>
          </Row>

          <Row>
            <Col md={12}>
              <Card
                title="Atividades"
                content={
                  <div className="table-full-width">
                    <table className="table">
                      <TasksRelatorio tasks = {this.props.task} projetos = {this.props.projeto}/>
                    </table>
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

const mapStateToProps = ({ usuario, projeto, task }) => {
  return {
      usuario,
      projeto,
      task
  }
}
const mapDispatchToProps = dispatch => {
  return {
    getTasks: () => dispatch(getTasks()),

  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Relatorios)
