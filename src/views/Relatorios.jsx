import React, { Component } from "react";
import ChartistGraph from "react-chartist";
import { Grid, Row, Col } from "react-bootstrap";

import { Card } from "components/Card/Card.jsx";
import { StatsCard } from "components/StatsCard/StatsCard.jsx";
import { TasksRelatorio } from "components/Tasks/TasksRelatorio.jsx";
import {
  dataLinguagens,
  legendLinguagens,
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
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col lg={3} sm={6}>
              <StatsCard
                bigIcon={<i className="pe-7s-news-paper text-warning" />}
                statsText="Projetos"
                item1="Todos"
                item2="SmartPay"
                item3="IAmHere"
                item4="NetIFES"
                item5="ToDoDay"
              />
              
            </Col>
            <Col lg={3} sm={6}>
              <StatsCard
                bigIcon={<i className="pe-7s-users text-success" />}
                statsText="Alunos"
                item1="Todos"
                item2="Guilherme Bodart"
                item3="Gabriel Marchezi"
                item4="Paula Ricarda"
                item5="Renato"
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
                title="Principais Linguagens"
                content={
                  <div
                    id="chartPreferences"
                    className="ct-chart ct-perfect-fourth"
                  >
                    <ChartistGraph data={dataLinguagens} type="Pie" />
                  </div>
                }
                legend={
                  <div className="legend">{this.createLegend(legendLinguagens)}</div>
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
                      <TasksRelatorio />
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

export default Relatorios;
