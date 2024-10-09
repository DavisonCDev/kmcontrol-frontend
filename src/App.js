import React, { useState } from 'react'; // Certifique-se de que está assim
import ContratosTable from './components/ContratosTable';
import Menu from './components/Menu';
import ContratoForm from './components/ContratoForm'; // Importe o ContratoForm
import './App.css';

const App = () => {
    const [showForm, setShowForm] = useState(false);

    const handleAddContrato = () => {
        setShowForm(true);
    };

    const handleCloseForm = () => {
        setShowForm(false);
    };

    return (
        <div className="container-fluid">
            <h1 className="text-center my-4">K M C O N T R O L</h1>
            <div className="row">
                <div className="col-md-3">
                    <h5>Menu</h5>
                    <Menu onAddContrato={handleAddContrato} /> {/* Passa a função */}
                </div>
                <div className="col-md-9">
                    <ContratosTable />
                </div>
            </div>
            {showForm && <ContratoForm onClose={handleCloseForm} />} {/* Exibe o formulário */}
        </div>
    );
};

export default App;