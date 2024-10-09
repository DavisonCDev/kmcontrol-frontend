import React, { useState } from 'react';
import './ContratoForm.css'; // Arquivo de estilos para o formulário

const ContratoForm = ({ onClose }) => {
    const [formData, setFormData] = useState({
        condutorPrincipal: '',
        condutorResponsavel: '',
        dataRegistro: '',
        diarias: '',
        franquiaKm: '',
        kmAtual: '',
        kmInicial: '',
        locadora: '',
        marca: '',
        modelo: '',
        numeroContrato: '',
        osCliente: '',
        placa: '',
        valorAluguel: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const convertDateToISO = (dateString) => {
        const [day, month, year] = dateString.split('/');
        return `${year}-${month}-${day}`;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formattedData = {
            ...formData,
            dataRegistro: convertDateToISO(formData.dataRegistro),
        };

        try {
            const response = await fetch('http://localhost:8081/api/contratos', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formattedData),
            });

            console.log('Status da resposta:', response.status);

            if (!response.ok) {
                const errorMessage = await response.text();
                throw new Error(`Erro ao enviar os dados: ${errorMessage}`);
            }

            const result = await response.json();
            console.log('Dados enviados com sucesso:', result);
            onClose(); // Fechar o formulário após o envio
        } catch (error) {
            console.error('Erro:', error);
        }
    };

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <h2>Adicionar Contrato</h2>
                <form onSubmit={handleSubmit}>
                    {Object.keys(formData).map((key) => (
                        <div className="form-group" key={key}>
                            <label>{key.replace(/([A-Z])/g, ' $1').trim()}</label>
                            <input
                                type={key === 'dataRegistro' ? 'text' : 'text'} // Use text para permitir dd/MM/yyyy
                                name={key}
                                value={formData[key]}
                                onChange={handleChange}
                                required
                                className="form-control"
                            />
                        </div>
                    ))}
                    <button type="submit" className="btn btn-primary">Salvar</button>
                    <button type="button" onClick={onClose} className="btn btn-secondary">Cancelar</button>
                </form>
            </div>
        </div>
    );
};

export default ContratoForm;
