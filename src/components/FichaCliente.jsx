// /rentacar-webapp/components/FichaCliente.js
import React from 'react';

const FichaCliente = ({ nombre, numeroAlquileres }) => (
    <div className="ficha-cliente">
        <h3>{nombre}</h3>
        <p>Numero de Alquileres: {numeroAlquileres}</p>
    </div>
);

export default FichaCliente;
