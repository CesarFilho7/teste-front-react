import React, { Component } from 'react';
import '../style.css';

class ProdutosCards extends Component {

    render() {
        return (
            <div className="col-md-12 col-lg-6 col-xl-3">
                <div className="card">
                    <div className="header">
                        <img src={this.props.imagem} className="card-img-top" alt="..."/>
                    </div>
                    <div className="card-body">
                        <strong><p className="card-text">{this.props.nome}</p></strong>
                        <strong className="card-text valor"><p>R$ {this.props.valor}</p></strong>
                        <button className="btn btn-primary">Comprar</button>
                    </div>
                </div>
            </div>
        )
    }
}
export default ProdutosCards;