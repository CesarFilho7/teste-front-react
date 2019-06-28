import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
class ProdutosTable extends Component {

  render() {
    return (
      <tr> 
        <td>
        {/* <Link to={`/pet/${this.props.id}`}>
          {this.props.nome}
        </Link> */}
        {this.props.nome}
        </td>
        <td>{this.props.descricao}</td>
        <td>{this.props.dataCompra}</td>
      </tr>
    )
  }
}

export default ProdutosTable;