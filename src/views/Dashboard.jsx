import React, { Component } from "react";
import { connect } from 'react-redux';

import ChartistGraph from "react-chartist";
import { Grid, Row, Col } from "react-bootstrap";
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Legend } from "recharts";

import { Card } from "components/Card/Card.jsx";
import { StatsCard2 } from "components/StatsCard/StatsCard2.jsx";
import { Tasks } from "components/Tasks/Tasks.jsx";
import {
  dataPie,
  legendPie,
  dataSales,
  optionsSales,
  responsiveSales,
  legendSales,
  dataBar,
  optionsBar,
  responsiveBar,
  legendBar,
  radarData,
  dataDashBoard,
  legendDashBoard
} from "variables/Variables.jsx";

class Dashboard extends Component {
  createLegend(json) {
    var legend = [];
    for (var i = 0; i < json["names"].length; i++) {
      if (json["names"][i] !== ""){
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
              <StatsCard2
                // bigIcon={<i className="pe-7s-server text-warning" />}
                statsText="Usuários ativos"
                statsValue= {this.props.usuario.getUsuarios.usuarios.length-1}
              />
              
            </Col>
          </Row>
          <Row>
            <Col md={8}>
              <Card
                id="chartHours"
                title="Progresso dos projetos"
                category="24 Hours performance"
                content={
                  <div className="ct-chart">
                    <ChartistGraph
                      data={dataSales}
                      type="Line"
                      options={optionsSales}
                      responsiveOptions={responsiveSales}
                    />
                  </div>
                }
                legend={
                  <div className="legend">{this.createLegend(legendSales)}</div>
                }
              />
            </Col>
            <Col md={4}>
              <Card
                statsIcon="fa fa-clock-o"
                title="Ferramentas utilizadas"
                content={
                  <div
                    id="chartPreferences"
                    className="ct-chart ct-perfect-fourth"
                  >
                    <ChartistGraph data={dataPie} type="Pie" />
                  </div>
                }
                legend={
                  <div className="legend">{this.createLegend(legendPie)}</div>
                }
              />
            </Col>
          </Row>

          <Row>
            <Col md={6}>
              <Card
                id="chartActivity"
                title="Competências"
                category="Conhecimentos técnicos"
                content={
                    <RadarChart outerRadius={150} width={520} height={400} data={radarData}>
                      <PolarGrid />
                      <PolarAngleAxis dataKey="subject" />
                      <PolarRadiusAxis angle={30} domain={[0, 150]} />
                      <Radar name="Mike" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                      <Radar name="Lily" dataKey="B" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
                      <Legend />
                    </RadarChart>
                }
              />
            </Col>

            <Col md={6}>
              <Card
                  statsIcon="fa fa-clock-o"
                  title="Índice de satisfação"
                  content={
                      <ChartistGraph data={dataDashBoard} type="Pie" />
                 
                  }
                  legend={
                    <div className="legend">{this.createLegend(legendPie)}</div>
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
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)

