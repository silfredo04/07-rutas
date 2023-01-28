import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export const Persona = () => {
    /* desestructurando objeto */
  /* const {nombre,apellido} = useParams(); */
  /* asignando valores por defecto */
 /*  let {nombre = "Silfredo",apellido ="Orozco"} = useParams(); */
    const {nombre,apellido} = useParams();
    const navegar = useNavigate();

    const enviar = (e) =>{
      e.preventDefault();
      let nombre = e.target.nombre.value;
      let apellido = e.target.apellido.value;
      let url = `/persona/${nombre}/${apellido}`;

      if(nombre.length <= 0 && apellido.length <= 0){
        navegar("/inicio")
      }else if(nombre === "contacto"){
        navegar("/contacto")
      }else{
        navegar(url);
      } 
      
    };
  
  return (
    <div className="peli-item">
        {!nombre && <h1>No hay personas que mostrar</h1>}
        {nombre && <h1>Esta es la pagina de persona el nombre en la rupa tertenece a: {nombre} {apellido}</h1>}
        <form onSubmit={enviar}>
          <input type="text" name="nombre"/>
          <input type="text" name="apellido"/>
          <input type="submit" name="enviar" value="Enviar"/>
        </form>
    </div>
  )
}
