import React, { Component } from 'react';
import ProdutosTable from './ProdutosTable';
import axios from 'axios';
import Header from './Header';

class MinhasCompras extends Component {
  constructor(props) {
    super(props)
    this.state = {
      produtos: [],
      titulo: 'Minhas Compras'
    }
  }
  
  componentDidMount() {
    this.findAllProdutos()
  }

  findAllProdutos() {
    axios.get('https://bannetcompras.herokuapp.com/compras')
    .then(res => {
      this.setState({produtos: res.data})
    })
    .catch(function (error) {
      console.log(":(")
    })
  }

  produtosList() {
    if (this.state.produtos) {
        return this.state.produtos.map((produtos =>
            <ProdutosTable key={produtos.id} nome={produtos.produto.nome} id={produtos.id}
             descricao={produtos.produto.descricao} dataCompra={produtos.dataCompra}/>
        ));
    } else {
        return
    }
  }


  render() {
    const produtosDetails = this.produtosList()
    
    return (
    <div className="container">
        <Header/>
        <br/>
        <br/>
        <h3>{this.state.titulo}</h3>
        <br/>
        <table className="table">
            <thead className="thead-dark">
                <tr>
                    <th scope="col">Nome</th>
                    <th scope="col">Descrição</th>
                    <th scope="col">Data da Compra</th>
                </tr>
            </thead>
            <tbody>
                {produtosDetails}
            </tbody>
        </table>
    </div>    
    
    )
  }
}

export default MinhasCompras;