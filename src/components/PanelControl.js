import React from 'react'
import { Outlet, NavLink } from 'react-router-dom'

export const PanelControl = () => {
  return (
    <div className="peli-item">
        <h1 className="title">PANEL DE CONTROL</h1>
        <p className="title">Elige una de estas opciones</p>
        <nav className="nav">
            <ul>
                <li>
                    <NavLink to='/panel/inicio'>Inicio</NavLink>
                </li>
                <li>
                    <NavLink to='/panel/crear-articulos'>Crear Articulos</NavLink>
                </li>
                <li>
                    <NavLink to='/panel/gestion-usuario'>Gestion de Usuarios</NavLink>
                </li>
                <li>
                    <NavLink to='/panel/acerca-de'>Acerca de</NavLink>
                </li>
            </ul>
        </nav>
        <div>
            {/* quiero cargar aqui los componentes de las turas anidadas */}
            <Outlet/>
        </div>
    </div>
  )
}
