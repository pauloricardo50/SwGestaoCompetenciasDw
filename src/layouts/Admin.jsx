import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from 'react-redux';
import { Row }  from 'react-bootstrap'

import AdminNavbar from "components/Navbars/AdminNavbar";
import Footer from "components/Footer/Footer";
import Sidebar from "components/Sidebar/Sidebar";

import { style } from "variables/Variables.jsx";
import { alertout } from '../store/actions/alertas/alertas'
import { getUsuarios } from '../store/actions/usuarios/usuario'
import { getProjetos } from '../store/actions/projetos/projeto'
import { getTecnologias } from '../store/actions/tasks/task'

import routes from "routes.js";
import Alerta from '../components/Alert/Alert'

import image from "assets/img/sidebar-3.jpg";

class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: image,
      color: "black",
      hasImage: true,
      fixedClasses: "dropdown show-dropdown open",
      logado: this.props.usuario.name
    };
  }
 
  getRoutes = routes => {
    return routes.map((prop, key) => {
      if (prop.layout === "/admin") {
        return (
          <Route
            path={prop.layout + prop.path}
            render={props => (
              <prop.component
                {...props}
              />
            )}
            key={key}
          />
        );
      } else {
        return null;
      }
    });
  };
  getBrandText = path => {
    for (let i = 0; i < routes.length; i++) {
      if (
        this.props.location.pathname.indexOf(
          routes[i].layout + routes[i].path
        ) !== -1
      ) {
        return routes[i].name;
      }
    }
    return "Brand";
  };
  handleImageClick = image => {
    this.setState({ image: image });
  };
  handleColorClick = color => {
    this.setState({ color: color });
  };
  handleHasImage = hasImage => {
    this.setState({ hasImage: hasImage });
  };
  handleFixedClick = () => {
    if (this.state.fixedClasses === "dropdown") {
      this.setState({ fixedClasses: "dropdown show-dropdown open" });
    } else {
      this.setState({ fixedClasses: "dropdown" });
    }
  };
  async componentDidMount() {
    await this.props.getUsuarios()
    await this.props.getProjetos()
    await this.props.getTecnologias()

    var color = Math.floor(Math.random() * 4 + 1);
    var level;
    switch (color) {
      case 1:
        level = "success";
        break;
      case 2:
        level = "warning";
        break;
      case 3:
        level = "error";
        break;
      case 4:
        level = "info";
        break;
      default:
        break;
    }
    }
  componentDidUpdate(e) {
    if (
      window.innerWidth < 993 &&
      e.history.location.pathname !== e.location.pathname &&
      document.documentElement.className.indexOf("nav-open") !== -1
    ) {
      document.documentElement.classList.toggle("nav-open");
    }
    if (e.history.action === "PUSH") {
      document.documentElement.scrollTop = 0;
      document.scrollingElement.scrollTop = 0;
      this.refs.mainPanel.scrollTop = 0;
    }
  }
  render(props) {
    if(!this.state.logado){
      this.props.alertout()
      return <Redirect to="/login-admin"/>
    }
    else{
      return (

        <div className="wrapper">
          <Sidebar {...this.props} routes={routes} image={this.state.image}
          color={this.state.color}
          hasImage={this.state.hasImage}/>
          <div id="main-panel" className="main-panel" ref="mainPanel">
            <Row style={{width:"95%"}}>
              <Alerta open= {true} alertTitle= {this.props.alerta.alertTitle} severity= {this.props.alerta.severity} texto= {this.props.alerta.texto}/>
            </Row>
            <AdminNavbar
              {...this.props}
              brandText={this.getBrandText(this.props.location.pathname)}
            />
            <Switch>{this.getRoutes(routes)}</Switch>
            <Footer />
          </div>
        </div>
      );
    }
  }
 }

const mapStateToProps = ({ usuario, alerta, projeto, task}) => {
  return {
      usuario,
      alerta,
      projeto,
      task
  }
}
const mapDispatchToProps = dispatch => {
  return {
    alertout: () => dispatch(alertout()),
    getUsuarios: () => dispatch(getUsuarios()),
    getProjetos: () => dispatch(getProjetos()),
    getTecnologias: () => dispatch(getTecnologias()),

  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Admin)