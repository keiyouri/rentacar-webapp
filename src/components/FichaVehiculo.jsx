// /rentacar-webapp/components/FichaVehiculo.js
import React from 'react';

const FichaVehiculo = ({ modelo, combustible }) => (
    <div className="ficha-vehiculo">
        <h3>{modelo}</h3>
        <p>Combustible: {combustible}</p>
    </div>
);

export default FichaVehiculo;
