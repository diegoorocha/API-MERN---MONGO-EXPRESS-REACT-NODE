import './App.css' // CSS!
import 'bootstrap/dist/css/bootstrap.min.css' // BIBLIOTECA BOOTSTRAP!
import React, { Component } from 'react' // REACT!
import { BrowserRouter as Router, Route, Link } from 'react-router-dom' // REACT ROUTER DOM PARA NAVEGAÇÃO ENTRE PAGINA/MENU DA APLICAÇÃO!

import Create from '../components/create' // COMPONENTE PARA CRIAR!
import Edit from '../components/edit' // COMPONENTE PARA EDITAR!
//import List from '../components/list' // COMPONENTE PARA LISTAR TODOS CRIADOS!
import Index from '../components/index'

import logo from './logo.png' // LOGO DO MENU NAVBAR!

class App extends Component {
    render() {
        return (
            <Router>
                <div className="container">
                    <nav className="navbar navbar-expand-lg navbar-light bg-light"> 
                        <nav className="navbar-brand"> 
                            <img src={logo} width="30" height="30" alt=""/> 
                        </nav>
                        <Link to="/" className="navbar-brand">CRUD MERN</Link>
                        <div className="collpase nav-collapse">
                            <ul className="navbar-nav mr-auto"> 
                                <li className="navbar-item">
                                    <Link to="/" className="nav-link">Lista</Link> 
                                </li>
                                <li className="navbar-item">
                                    <Link to="/create" className="nav-link">Criar</Link> 
                                </li>
                            </ul>
                        </div>
                    </nav>
                        
                    <Route path="/" exact component={Index} /> 
                    <Route path="/edit/:id" component={Edit} /> 
                    <Route path="/create" component={Create} /> 
                </div>
            </Router>
        )
    }
}

export default App