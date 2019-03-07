import React, {Component} from 'react'
import axios from 'axios'
import List from './list'

export default class Index extends Component {
    constructor(props){
        super(props)
        this.state = { users: []}
    }
    
    componentDidMount(){
        axios.get('http://localhost:4000/u/list')
        .then(response => {
            this.setState({ users: response.data })
        })
        .catch((error) => {
            console.log(error)
        })
    }

    componentDidUpdate(){
        axios.get('http://localhost:4000/u/list')
        .then(response => {
            this.setState({ users: response.data })
        })
        .catch((error) => {
            console.log(error)
        })
    }

    listUser(){
        return this.state.users.map((object, i) => {
            return <List obj={object} key={i} />
        })
    }
    render(){
        return(
            <div style={{marginTop: 10}}>
                <h3>Lista de Usuários:</h3>  
                <table className="table table-striped" align="center" style={{marginTop: 10}}>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Email</th>
                        <th>Cargo</th>
                        <th>Filial</th>
                        <th>Telefone</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                    <tbody>
                        { this.listUser() }
                    </tbody>
            </table>
            </div>
        )
    }
}