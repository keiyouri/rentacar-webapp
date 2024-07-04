import React, { useEffect, useState } from 'react';
import FichaCliente from '../components/FichaCliente';
import layout from "@/app/backoffice/layout";

const Clientes = () => {
    const [clientes, setClientes] = useState([]);

    useEffect(() => {
        // Obtener datos de clientes del servidor
        fetch('/api/clientes')
            .then(response => response.json())
            .then(data => setClientes(data));
    }, []);

    return (
        <div>
            <h1>Lista de Clientes</h1>
            {clientes.map((cliente, index) => (
                <FichaCliente
                    key={index}
                    nombre={cliente.nombre}
                    numeroAlquileres={cliente.numeroAlquileres}
                />
            ))}
        </div>
    );
};

export default Clientes;
