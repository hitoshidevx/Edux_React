import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/home';
import Login from './pages/login';
import Cadastrar from './pages/cadastrar';
import NaoEncontrada  from './pages/naoencontrada';
import Dicas from './pages/dicas';
import Turma from './pages/turma'
import InicioAluno from './pages/inicioaluno';
import Categorias from './pages/categorias';
import Instituicoes from './pages/instituicoes';
import Curso from './pages/curso';
import TurmaProf from './pages/admin/turmasprof';
import DicasProf from './pages/admin/dicasprof';
import InicioProf from './pages/admin/inicioprof';
import CategoriaProf from './pages/admin/categoriasprof';
import InstituicoesProf from './pages/admin/instituicoesprof';
import CursoProf from './pages/admin/cursoprof';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from './reportWebVitals';
import Usuario from './pages/usuario';

const routing = (
  <Router>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/login" component={Login}/>
        <Route path="/cadastrar" component={Cadastrar}/>
        <Route path="/dicas" component={Dicas}/>
        <Route path="/turma" component={Turma}/>
        <Route path="/turmaprof" component={TurmaProf}/>
        <Route path="/dicasprof" component={DicasProf}/>
        <Route path="/inicioaluno" component={InicioAluno}/>
        <Route path="/inicioprof" component={InicioProf}/>
        <Route path="/categoriasprof" component={CategoriaProf}/>
        <Route path="/categorias" component={Categorias}/>
        <Route path="/usuario" component={Usuario}/>
        <Route path="/instituicoesprof" component={InstituicoesProf}/>
        <Route path="/instituicoes" component={Instituicoes}/>
        <Route path="/cursoprof" component={CursoProf}/>
        <Route path="/curso" component={Curso}/>
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
