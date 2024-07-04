import React from 'react';

const FichaAlquiler = ({ vehiculo, cliente, tiempo }) => {
    return (
        <div className="ficha-alquiler">
            <h3>{vehiculo}</h3>
            <p>Cliente: {cliente}</p>
            <p>Tiempo de alquiler: {tiempo}</p>
        </div>
    );
};

export default FichaAlquiler;
