import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'


import { storeConfig, persistor } from './store/storeConfig'

import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/animate.min.css";
import "./assets/sass/light-bootstrap-dashboard-react.scss?v=1.3.0";
import "./assets/css/demo.css";
import "./assets/css/pe-icon-7-stroke.css";

import AdminLayout from "layouts/Admin.jsx";
import Login from "layouts/Login.jsx";

ReactDOM.render(
  <Provider store={storeConfig}>
    <PersistGate persistor = { persistor } loading = {null}>
      <BrowserRouter>
        <Switch>
          <Route path="/admin" render={props => <AdminLayout {...props} />} />
          <Route exact path="/login-admin">
            <Login/>
          </Route>
          <Redirect from="/" to="/admin/dashboard" />
        </Switch>
      </BrowserRouter>
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
