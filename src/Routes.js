import React from 'react'
import {Switch, Route} from 'react-router-dom';
import Dashboard from './components/Dashboard';
import MinhasCompras from './components/MinhasCompras';


export default () => (
    <Switch>
        <Route path='/compras' component={MinhasCompras}/>
        <Route path='/dashboard' component={Dashboard}/>
    </Switch>
)