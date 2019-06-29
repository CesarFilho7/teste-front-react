import React, { Component } from 'react';
import ProdutosCards from '../common/ProdutosCards';
import axios from 'axios';
import Header from './Header';
import Routes from '../Routes';


class Dashboard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      produtos: []
    }
  }

  componentDidMount(){
    this.findAllProdutos()
  }

  findAllProdutos() {
    axios.get('https://bannetloja.herokuapp.com/produtos')
    .then(res => {
      this.setState({produtos: res.data})
      console.log(this.state.produtos)

    })
    .catch(function (error) {
      console.log(":( ")
    })
  }

  produtosCardList() {
    if (this.state.produtos) {
        return this.state.produtos.map((produtos =>
            <ProdutosCards key={produtos.id} nome={produtos.nome} valor={produtos.valor} imagem={produtos.imagem} id={produtos.id} />
        ));
    } else {
        return
    }
  }

  render() {
    const produtosCard = this.produtosCardList()
    return (
      <div className="container">
        <Header/>
        <Routes/>
        <br/>   
        <div className="row">
            {produtosCard}
        </div>
      </div>
    );
  }
}

export default Dashboard;