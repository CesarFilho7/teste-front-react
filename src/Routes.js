import React from 'react'
import {Switch, Route} from 'react-router-dom';
import Dashboard from './components/Dashboard';
import MinhasCompras from './components/MinhasCompras';
import DetalhesProdutos from './components/DetalhesProduto';


export default () => (
    <Switch>
        <Route path='/compras' component={MinhasCompras}/>
        <Route path='/dashboard' component={Dashboard}/>
        <Route exact path='/compras/:id' component={DetalhesProdutos}/>
    </Switch>
)