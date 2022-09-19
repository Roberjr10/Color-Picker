import { useState } from "react";
import React  from 'react';


export default function NombrePaleta(props) {
  var elementos = localStorage.getItem('paletas');
  var JSONElemento = JSON.parse(elementos);
  const reload = () => {
    window.location.reload(true);
  }


  if(JSONElemento === null) {
    JSONElemento = [];
  }

const [valorInput, setValorInput] = useState("");
const [count, setCount] = useState(JSONElemento.length);
const [arrayCookie, setArrayCookie] = useState(JSONElemento);

  function guardar() {
    var arrayColores = [];
    setCount(count+1);
    var  circulos1 = document.querySelector(`#c1`).style;
    var  circulos2 = document.querySelector(`#c2`).style;
    var  circulos3 = document.querySelector(`#c3`).style;
    var  circulos4 = document.querySelector(`#c4`).style;
    var  circulos5 = document.querySelector(`#c5`).style;

    if(( valorInput && circulos1.background && circulos2.background && circulos3.background
       && circulos4.background && circulos5.background) !== ''){
      arrayColores.push(circulos1.background, circulos2.background,circulos3.background, circulos4.background, circulos5.background);
           console.log(arrayColores);
          //Creo el objeto para luego parsearlo y guardarlo en el localStorage
          var paleta = {
            id: count,
            nombre: valorInput,
            colores: arrayColores,
          }
          arrayCookie.push(paleta)
          localStorage.setItem('paletas', JSON.stringify(arrayCookie));
    }
    reload();
  }



  return (
    <div className='nombrePaleta'>
      
        <label><strong>Nombre de la paleta</strong></label>
        <br></br>
        <input type="text" onChange={(e) => setValorInput(e.target.value)}></input>
        <button color={props.colores} type='button' onClick={guardar}><span className='spanPlus'>+</span></button>
        
    </div>
  )
}
