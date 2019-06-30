import React, { Component } from 'react';
import axios from 'axios';
import Header from './Header';
import '../style.css';


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
                <h4>Nome:</h4>
                <p>{this.state.produto.nome}</p>
                <h4>Valor:</h4>
                <p>{this.state.produto.valor}</p>
                <h3>Data da Compra:</h3>
                <p>{this.state.produtos.dataCompra}</p>
                <h3>Peso:</h3>
                <p>{this.state.produto.peso}</p>
                <h3>Altura:</h3>
                <p>{this.state.dimensoes.altura}</p>
                <h3>Comprimento:</h3>
                <p>{this.state.dimensoes.comprimento}</p>
                <h3>Largura:</h3>
                <p>{this.state.dimensoes.largura}</p>
            </div>
        </div>
      </div>
    )
  }
}

export default DetalhesProdutos;