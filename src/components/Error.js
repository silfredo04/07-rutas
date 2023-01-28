import React from 'react'
import {Link} from 'react-router-dom'

export const Error = () => {
  return (
    <div className="peli-item">
         <h1>ERROR 404</h1>
         <strong>Esta pagina no existe   </strong>
         <Link to="/inicio">Regresar al inicio</Link>
    </div>
  )
}
