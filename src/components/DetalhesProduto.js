import React, { Component } from 'react';
import axios from 'axios';

class DetalhesProdutos extends Component {
  constructor(props) {
    super(props)
    this.state = {
      produto: {}
    }
  }

  componentDidMount(){
    this.getProduto()
  }

  getProduto() {
    axios.get('https://bannetcompras.herokuapp.com/compras/:idCompra' + this.props.match.params.id)
    .then(res => {
      this.setState({produto: res.data})
       console.log(this.state.produto)
    })
    .catch(function (error) {
      console.log(":(")
    })
  }

  render() {
    return (
      <div className="container">
        {/* <Row form>
          <Col xl={{size: 5}}>
            <CardImg width="100%" height="100%" src={img} alt={this.state.pets.nome}/>
          </Col>
          <Col xl={{size: 6}}>
            <h4>Nome:</h4>
            <p>{this.state.pets.nome}</p>
            <h4>Gênero:</h4>
            <p>{genero}</p>
            <h3>Data de Nascimento:</h3>
            <p>{this.state.pets.data_nasc}</p>
            <h3>Porte:</h3>
            <p>{this.state.pets.porte}</p>
            <Button color="primary" onClick={this.adotar}>Adotar</Button>
          </Col>
        </Row> */}
        <div className="row">
            <div className="col-xl-5">
                {this.state.imagem}
            </div>
            <div className="col-xl-6">
                <h4>Nome:</h4>
                <p>{this.state.produto.nome}</p>
                <h4>Valor:</h4>
                <p>{this.state.produto.valor}</p>
                <h3>Data da Compra:</h3>
                <p>{this.state.produto.dataCompra}</p>
                <h3>Peso:</h3>
                <p>{this.state.produto.peso}</p>
                <h3>Dimensões:</h3>
                <p>{this.state.produto.dimensoes}</p>
            </div>
        </div>
      </div>
    )
  }
}

export default DetalhesProdutos;