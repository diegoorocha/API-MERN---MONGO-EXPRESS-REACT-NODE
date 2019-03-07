import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { Modal, Button } from 'react-bootstrap'


class List extends Component {
    constructor(props) {
        super(props)
        this.delete = this.delete.bind(this)

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);

        this.state = {
            show: false
        }
    }

    delete() {
        axios.get('http://localhost:4000/u/delete/' + this.props.obj._id)
            .then(console.log('Deletado!'))
        this.setState({ show: false })

    }
    handleClose() {
        this.setState({ show: false })
    }
    handleShow() {
        this.setState({ show: true })
    }

    render() {
        return (
            <tr>
                <td>{this.props.obj.name}</td>
                <td>{this.props.obj.email}</td>
                <td>{this.props.obj.office}</td>
                <td>{this.props.obj.branch}</td>
                <td>{this.props.obj.telephone}</td>

                <td>

                    <Link to={'/edit/' + this.props.obj._id} className="btn btn-warning" >Editar</Link>
                </td>
                <td>
                    <>
                        <button onClick={this.handleShow} className="btn btn-danger" >Excluir</button>

                        <Modal show={this.state.show} onHide={this.handleClose}>
                            <Modal.Header closeButton>
                                <Modal.Title>Deletar</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>Confirmar a exclusão?</Modal.Body>
                            <Modal.Footer>
                                <Button variant="outline-primary" onClick={this.handleClose}>
                                    Não
                        </Button>
                                <Button variant="danger" onClick={this.delete}>
                                    Excluir
                        </Button>
                            </Modal.Footer>
                        </Modal>

                    </>
                </td>

            </tr>

        )
    }
}
export default List