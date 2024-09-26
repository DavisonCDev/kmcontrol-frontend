import React from 'react';
import ContratosTable from './components/ContratosTable';
import Menu from './components/Menu';
import './App.css'; // Certifique-se de que esse arquivo existe

const App = () => {
    return (
        <div className="container-fluid">
            <h1 className="text-center my-4">K M C O N T R O L</h1>
            <div className="row">
                <div className="col-md-3">
                    <h5>Menu</h5>
                    <Menu />
                </div>
                <div className="col-md-9">
                    <ContratosTable />
                </div>
            </div>
        </div>
    );
};

export default App;
