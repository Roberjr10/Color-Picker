import React, {useEffect, useState} from 'react'
import CajaGuardados from './CajaGuardados';
import axios from 'axios';

export default function Guardados() {
  const token = document.head.querySelector('meta[name="csrf-token"]').content;


  
  const [paletas, setPaletas] = useState([]);
  
  var elementos = localStorage.getItem('paletas');
  var JSONElementos = JSON.parse(elementos);
  if(JSONElementos === null) {
    JSONElementos = [];
  }
  /*PRUEBA CON LA API DE MI SERVIDOR PHP PEROP POR PROBLEMA DE CONEXION Y DE CORS
  NO LO PUDE SOLUCIONAR*/
  /*
  const endpoint = 'http://15.188.57.221/apiPaletasColores/public/index.php'
  const mostrarPaletas = async() => {
    
    const response = axios.get(`${endpoint}/paletas`,  {
      'mode': 'cors',
      "X-CSRF-TOKEN": token,
      'headers': {
          'Access-Control-Allow-Origin': '*',
      }});
    setPaletas(response.data);
   console.log(response.data);
  }
  useEffect(() => {
    mostrarPaletas()
  }, []);*/

  return (<>
  
    <div className='container_paletasGuardadas'> 
   { JSONElementos.length >= 1 ? <h2 className='textoGuardados'>Paletas Guardadas</h2> : ""}
        {JSONElementos.map(datos =>{
          return (
            <CajaGuardados id= {datos.id} nombre = {datos.nombre} colores={datos.colores} ></CajaGuardados>
          )
        })}
    </div>
    </>
  )
}
