import React, { useEffect, useState } from 'react';
import FichaAlquiler from '../components/FichaAlquiler';
import layout from "@/app/backoffice/layout";

const Alquileres = () => {
    const [alquileres, setAlquileres] = useState([]);

    useEffect(() => {
        // Obtener datos de alquileres del servidor
        fetch('/api/alquileres')
            .then(response => response.json())
            .then(data => setAlquileres(data));
    }, []);

    return (
        <div>
            <h1>Lista de Alquileres</h1>
            {alquileres.map((alquiler, index) => (
                <FichaAlquiler
                    key={index}
                    vehiculo={alquiler.vehiculo}
                    cliente={alquiler.cliente}
                    tiempo={alquiler.tiempo}
                />
            ))}
        </div>
    );
};

export default Alquileres;
