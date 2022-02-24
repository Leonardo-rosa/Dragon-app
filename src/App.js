import React from 'react';
import { Route, BrowserRouter as Router, Link } from 'react-router-dom';
import './App.css';
import Listar from './components/Listar';
import Criar from './components/Criar';
import Editar from './components/Editar';
import Login from './components/Login';
import Single from './components/Single';

function App() {
  return (
    <Router>
      <main className="main-site">
        <nav className="nav d-flex">
          <ul className="container d-flex">
            <li>
              <Link to={'/'}>Login</Link>
            </li>
            <li>
              <Link to={'/Listar'}>Listar dragões</Link>
            </li>
            <li>
              <Link to={'/Criar'}>Criar Dragão</Link>
            </li>
          </ul>
        </nav>
        <div className="container">
          <Route exact path="/" component={Login}></Route>
          <Route path="/Listar" component={Listar}></Route>
          <Route path="/Criar" component={Criar}></Route>
          <Route path="/editar/:id" component={Editar}></Route>
          <Route path="/Single/:id" component={Single}></Route>
        </div>
      </main>
    </Router>
  );
}

export default App;
