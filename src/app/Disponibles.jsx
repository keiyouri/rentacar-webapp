// /rentacar-webapp/pages/disponibles.js
import React, { useEffect, useState } from 'react';
import FichaVehiculo from '../components/FichaVehiculo';
import layout from "@/app/backoffice/layout";

const Disponibles = () => {
    const [vehiculos, setVehiculos] = useState([]);

    useEffect(() => {
        // Obtener datos de vehículos disponibles del servidor
        fetch('/api/vehiculos?disponibles=true')
            .then(response => response.json())
            .then(data => setVehiculos(data));
    }, []);

    return (
        <div>
            <h1>Vehículos Disponibles</h1>
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

export default Disponibles;
