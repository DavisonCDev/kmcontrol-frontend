import React from 'react';
import './Menu.css'; // Adicione este arquivo CSS

const Menu = ({ onAddContrato }) => {
    return (
        <div className="list-group">
            <button className="list-group-item custom-button" onClick={onAddContrato}>Adicionar Contrato</button>
            <button className="list-group-item custom-button">Atualizar KM</button>
            <button className="list-group-item custom-button">Confirmar Revisão</button>
            <button className="list-group-item custom-button">Substituir Veículo</button>
            <button className="list-group-item custom-button">Deletar Contrato</button>
            <button className="list-group-item custom-button">Histórico de Registros</button>
        </div>
    );
};

export default Menu;
