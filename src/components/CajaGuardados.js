import React from 'react'
import iconPapelera from '../img/Iconpapelera.png'

export default function CajaGuardados(props) {

  const reload = () => {
    window.location.reload(true);
  }

  function borrarPaleta(){
    if(localStorage.length < 1){
      localStorage.removeItem('paletas');
     }else {
    
      let jsonLocalStorage = JSON.parse(localStorage.getItem('paletas'));
      
      console.log(props)
      let buscaIndice = jsonLocalStorage.findIndex(obj => obj.id === props.id);
      
      jsonLocalStorage.splice(buscaIndice, 1);
  
    
      let stringLocalStorage = JSON.stringify(jsonLocalStorage);
  
     localStorage.setItem('paletas', stringLocalStorage);
     }
      reload();
  }

  

  return (
    <div className='cajaGuardados'>
        <div className='nombre'><div className='nombrePaletaGuardada'> {props.nombre} </div> <div className='iconPapelera' >< img src={iconPapelera} onClick={borrarPaleta}></img></div></div>
        <div className='paletasGuardadas'>
            
            <div className='circulo_guardado'style={{background: props.colores[0]}}></div>
            <div className='circulo_guardado'style={{background: props.colores[1]}}></div>
            <div className='circulo_guardado'style={{background: props.colores[2]}}></div>
            <div className='circulo_guardado'style={{background: props.colores[3]}}></div>
            <div className='circulo_guardado'style={{background: props.colores[4]}}></div>
        </div>
    </div>
  )
}
