import React, {Component} from 'react'
import axios from 'axios'

export default class Create extends Component {
    constructor(props){
        super(props)

        this.onChangeName = this.onChangeName.bind(this) // BIND PARA ALTERAR O NOME!
        this.onChangeEmail = this.onChangeEmail.bind(this) // BIND PARA ALTERAR EMAIL!
        this.onChangeOffice = this.onChangeOffice.bind(this) // BIND PARA ALTERAR CARGO!
        this.onChangeBranch = this.onChangeBranch.bind(this) // BIND PARA ALTERAR FILIAL!
        this.onChangeTelephone = this.onChangeTelephone.bind(this) // BIND PARA ALTERAR TELEFONE!
        this.onSubmit = this.onSubmit.bind(this) // BIND DE ENVIO(POST) DAS INFORMAÇÕES!

        // DEFININDO ESTADO DE CADA OBJETO!
        this.state = {
            name: '',
            email: '',
            office: '',
            branch: '',
            telephone: '',
        }
    }
    // EVENTOS DE CADA OBJETO!
    onChangeName(e){ // NOME
        this.setState({
            name: e.target.value
        })
    }
    onChangeEmail(e){ // EMAIL
        this.setState({
            email: e.target.value
        })
    }
    onChangeOffice(e){ // CARGO
        this.setState({
            office: e.target.value
        })
    }
    onChangeBranch(e){ // FILIAL
        this.setState({
            branch: e.target.value
        })
    }
    onChangeTelephone(e){ // TELEFONE
        this.setState({
            telephone: e.target.value
        })
    }
    onSubmit(e){ // ENVIANDO
        e.preventDefault()

        //INFORMAÇÕES DO QUE FOI DIGITADO NO CONSOLE!
        console.log(`Nome: ${this.state.name}`)
        console.log(`Email: ${this.state.email}`)
        console.log(`Cargo: ${this.state.office}`)
        console.log(`Filial: ${this.state.branch}`)
        console.log(`Telefone: ${this.state.telephone}`)

        // ATRIBUINDO CADA OBJETO AO SEU ESTADO (ENVIADO VIA REQ.BODY)
        const obj = {
            name: this.state.name,
            email: this.state.email,
            office: this.state.office,
            branch: this.state.branch,
            telephone: this.state.telephone
        }
        // ENVIANDO AS INFORMAÇÕES ATRIBUIDAS (UTILIZANDO A ROTA PARA CRIAR)
        axios.post('http://localhost:4000/u/create', obj) // ROTA + PASSANDO O "OBJ" COM AS INFORMAÇÕES INSERIDAS!
            .then(res => console.log(res.data)) // RETORNO!

            // DEFININDO O ESTADO DE CADA OBJETO APÓS O ENVIO (CRIAÇÃO)
            // NECESSÁRIO PARA QUE O FORMULÁRIO FIQUE "EM BRANCO" PARA O PROXIMO CADASTRO!
            this.setState({
                name: '',
                email: '',
                office: '',
                branch: '',
                telephone: ''
            })
    }

    render(){
        return (
            <div style={{maginTop: 10}}>  
                <h3>Adicionar Usuário:</h3>
                <form onSubmit={this.onSubmit}> 
                <div className="form-group">
                <label>Nome:</label>
                <input type="text" className="form-control"
                value={this.state.name}
                onChange={this.onChangeName} required/>
                </div>

                <div className="form-group">
                <label>Email:</label>
                <input type="text" className="form-control"
                value={this.state.email}
                onChange={this.onChangeEmail} required/>
                </div>

                <div className="form-group">
                <label>Cargo:</label>
                <input type="text" className="form-control"
                value={this.state.office}
                onChange={this.onChangeOffice} required/>
                </div>

                <div className="form-group">
                <label>Filial:</label>
                <input type="text" className="form-control"
                value={this.state.branch}
                onChange={this.onChangeBranch} required/>
                </div>

                <div className="form-group">
                <label>Telefone:</label>
                <input type="text" className="form-control"
                value={this.state.telephone}
                onChange={this.onChangeTelephone} required/>
                </div>

                <div className="form-group">
                <input type="submit" value="Criar Usuario" className="btn btn-primary" />
                </div>
                </form>
            </div>
        )
    }
}