// components/Menu.js
import React from 'react';
import Link from 'next/link';

const Menu = () => {
    return (
        <nav className="menu">
            <ul>
                <li><Link href="/">Inicio</Link></li>
                <li><Link href="/vehiculos">Vehículos</Link></li>
                <li><Link href="/clientes">Clientes</Link></li>
                <li><Link href="/alquileres">Alquileres</Link></li>
                <li><Link href="/disponibles">Ver disponibles</Link></li>
            </ul>
        </nav>
    );
};

export default Menu;
