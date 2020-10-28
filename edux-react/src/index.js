import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/home';
import Login from './pages/login';
import Cadastrar from './pages/cadastrar';
import NaoEncontrada  from './pages/naoencontrada';
import Dicas from './pages/dicas';
import DicasProf from './pages/admin/dicasprof';
import InicioAluno from './pages/inicioaluno';
import InicioProf from './pages/admin/inicioprof';

import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import reportWebVitals from './reportWebVitals';

const routing = (
  <Router>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/login" component={Login}/>
        <Route path="/cadastrar" component={Cadastrar}/>
        <Route path="/dicas" component={Dicas}/>
        <Route path="/dicasprof" component={DicasProf}/>
        <Route path="/inicioaluno" component={InicioAluno}/>
        <Route path="/inicioprof" component={InicioProf}/>
        <Route component={NaoEncontrada}/>
      </Switch>
  </Router>
)

ReactDOM.render(
  routing,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
