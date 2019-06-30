import React, { Component } from 'react';
import axios from 'axios';
import Header from './Header';


class DetalhesProdutos extends Component {
  constructor(props) {
    super(props)
    this.state = {
      produtos: {},
      produto: {},
      dimensoes: {}
    }
  }

  componentDidMount(){
    this.getProduto()
  }

  getProduto() {
    axios.get('https://bannetcompras.herokuapp.com/compras/' + this.props.match.params.id)
    .then(res => {
      this.setState({produtos: res.data})
      this.setState({produto: res.data.produto})
      this.setState({dimensoes: res.data.produto.dimensoes})
       console.log(this.state.produtos)
    })
    .catch(function (error) {
      console.log(":(")
    })
  }

  render() {
    return (
      <div>
        <Header/>
        <div className="row">
            <div className="col">
                <img src={this.state.produto.imagem} alt={this.state.produto.nome}/>
            </div>
            <div className="col">
                <br/>
                <br/>
                <h3>Nome: {this.state.produto.nome}</h3>
                {/* <p>{this.state.produto.nome}</p> */}
                <h3>Valor: {this.state.produto.valor}</h3>
                <h3>Data da Compra: {this.state.produtos.dataCompra}</h3>
                <h3>Peso: {this.state.produto.peso}</h3>
                <h3>Altura: {this.state.dimensoes.altura}</h3>
                <h3>Comprimento: {this.state.dimensoes.comprimento}</h3>
                <h3>Largura: {this.state.dimensoes.largura}</h3>
            </div>
        </div>
      </div>
    )
  }
}

export default DetalhesProdutos;