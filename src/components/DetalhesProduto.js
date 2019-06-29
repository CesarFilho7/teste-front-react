import React, { Component } from 'react';
import axios from 'axios';

class DetalhesProdutos extends Component {
  constructor(props) {
    super(props)
    this.state = {
      produtos: {}
    }
  }

  componentDidMount(){
    this.getProduto()
  }

  getProduto() {
    axios.get('https://bannetcompras.herokuapp.com/compras/' + this.props.match.params.id)
    .then(res => {
      this.setState({produtos: res.data})
       console.log(this.state.produtos)
    })
    .catch(function (error) {
      console.log(":(")
    })
  }

  render() {
    return (
      <div className="container">
        <div className="row">
            <div className="col-xl-5">
                {this.state.produtos.imagem}
            </div>
            <div className="col-xl-6">
                <h4>Nome:</h4>
                <p>{this.state.produtos.nome}</p>
                <h4>Valor:</h4>
                <p>{this.state.produtos.valor}</p>
                <h3>Data da Compra:</h3>
                <p>{this.state.produtos.dataCompra}</p>
                <h3>Peso:</h3>
                <p>{this.state.produtos.peso}</p>
                <h3>Dimensões:</h3>
                <p>{this.state.produtos.dimensoes}</p>
            </div>
        </div>
      </div>
    )
  }
}

export default DetalhesProdutos;