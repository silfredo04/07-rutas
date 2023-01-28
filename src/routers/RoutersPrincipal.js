import React from 'react'
import { Routes,Route,NavLink,BrowserRouter, Navigate } from 'react-router-dom'
import { Articulos } from '../components/Articulos'
import { Contacto } from '../components/Contacto'
import { Inicio } from '../components/Inicio'
import { Nosotros } from '../components/Nosotros'
import { Error } from '../components/Error'
import { Persona } from '../components/Persona'
import { PanelControl } from '../components/PanelControl'
import { InicioPanel } from '../components/panel/InicioPanel'
import { Crear } from '../components/panel/Crear'
import { AcercaDe } from '../components/panel/AcercaDe'
import { GestiomUsuario } from '../components/panel/GestiomUsuario'
export const RoutersPrincipal = () => {
  return (
    <BrowserRouter>
      <div className="layout">
        {/* Cabecera */}
        <header className="header">
            {/* <div class="logo">
                <div class="play"></div>
            </div> */}
            
            <h1>07 - Rutas</h1>
        </header>
        <hr />

        <nav className="nav">
          <ul>
            <li>
              <NavLink
                to="/inicio"
                className={({ isActive }) => isActive ? "activado" : ""}
              >Inicio</NavLink>
            </li>
            <li>
              <NavLink
                to="/articulos"
                className={({ isActive }) => isActive ? "activado" : ""}
              >Articulos</NavLink>
            </li>
            <li>
              <NavLink
                to="/contacto"
                className={({ isActive }) => isActive ? "activado" : ""}
              >Contacto</NavLink>
            </li>
            <li>
              <NavLink
                to="/nosotros"
                className={({ isActive }) => isActive ? "activado" : ""}
              >Nosotros</NavLink>
            </li>
            <li>
              <NavLink
                to="/persona"
                className={({ isActive }) => isActive ? "activado" : ""}
              >Persona</NavLink>
            </li>
            <li>
              <NavLink
                to="/panel"
                className={({ isActive }) => isActive ? "activado" : ""}
              >Panel de control</NavLink>
            </li>
          </ul>
        </nav>
        <hr />
        <section id="content" className="content">
          {/* cargar componentes */}
          { /* aqui se carga el componente que coicide con el path */}
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/inicio" element={<Inicio />} />
            <Route path="/articulos" element={<Articulos />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/nosotros" element={<Nosotros />} />
            <Route path="/persona/:nombre/:apellido" element={<Persona />} />
            <Route path="/persona/:nombre" element={<Persona />} />
            <Route path="/persona" element={<Persona />} />
            <Route path="/redirigir" element={<Navigate to="/persona/Silfredo/Orozco" />} />
            <Route path="/panel/*" element={<PanelControl />}>
              <Route index element={<InicioPanel />} />
              <Route path="inicio" element={<InicioPanel />} />
              <Route path="crear-articulos" element={<Crear />} />
              <Route path="gestion-usuario" element={<GestiomUsuario />} />
              <Route path="acerca-de" element={<AcercaDe />} />
            </Route>
            <Route path="*" element={<Error />} />
          </Routes>
        </section>

        {/* <!--Barra lateral--> */}
        <aside class="lateral">
            <div class="search">
                <h3 class="title">Buscador</h3>
                <form>
                    <input type="text" id="search_field" />
                    <button id="search">Buscar</button>
                </form>
            </div>

            <div class="add">
                <h3 class="title">Añadir pelicula</h3>
                <form>
                    <input type="text" id="title" placeholder="Titulo" />
                    <textarea id="description" placeholder="Descripción"></textarea>
                    <input type="submit" id="save" value="Guardar" />
                </form>
            </div>
        </aside>
        <hr />
        <footer className="footer">
          Este es el pie de paginas
        </footer>
      </div>
    </BrowserRouter>
  )
}
