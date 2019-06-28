import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from './components/Dashboard';
import MinhasCompras from './components/MinhasCompras';
import Routes from './Routes';


function App() {
  return (
    <div className="">
      <Dashboard/>
      <Routes/>
    </div>
  );
}

export default App;
