// /rentacar-webapp/pages/vehiculos.js
import React, { useEffect, useState } from 'react';
import FichaVehiculo from '../components/FichaVehiculo';

const Vehiculos = () => {
    const [vehiculos, setVehiculos] = useState([]);

    useEffect(() => {
        // Obtener datos de vehiculos del servidor
        fetch('/api/vehiculos')
            .then(response => response.json())
            .then(data => setVehiculos(data));
    }, []);

    return (
        <div>
            <h1>Lista de Vehículos</h1>
            {vehiculos.map((vehiculo, index) => (
                <FichaVehiculo
                    key={index}
                    modelo={vehiculo.modelo}
                    combustible={vehiculo.combustible}
                />
            ))}
        </div>
    );
};

export default Vehiculos;
