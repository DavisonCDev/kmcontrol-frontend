import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ContratosTable.css'; // Certifique-se de que este arquivo exista

const ContratosTable = () => {
    const [contratos, setContratos] = useState([]);

    useEffect(() => {
        const fetchContratos = async () => {
            try {
                const response = await axios.get('http://localhost:8081/api/contratos/ultimos');
                console.log(response.data); // Verifique os dados aqui
                setContratos(response.data);
            } catch (error) {
                console.error("Erro ao buscar contratos:", error);
            }
        };

        fetchContratos();
    }, []);

    return (
        <table className="table-custom">
            <thead>
                <tr>
                    <th>Numero do Contrato</th>
                    <th>Data de Registro</th>
                    <th>Condutor Principal</th>
                    <th>Modelo</th>
                    <th>Placa</th>
                    <th>KM Atual</th>
                    <th>Observação</th>
                </tr>
            </thead>
            <tbody>
                {contratos.map((contrato) => (
                    <tr 
                        key={contrato.id} 
                        style={{ color: (contrato.fazerRevisao || contrato.kmExcedido) ? 'red' : '#333' }} // Aplicação direta da cor
                    >
                        <td>{contrato.numeroContrato}</td>
                        <td>{contrato.dataRegistro}</td>
                        <td>{contrato.condutorPrincipal}</td>
                        <td>{contrato.modelo}</td>
                        <td>{contrato.placa}</td>
                        <td>{contrato.kmAtual}</td>
                        <td>{contrato.observacoes}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default ContratosTable;
