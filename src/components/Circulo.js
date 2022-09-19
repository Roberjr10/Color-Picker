import React, {useState} from 'react';


export default function Circulo(props) {

const [clickeado, setClickeado] = useState(false);
const {colores , clickeado2 } = props;

function aumentarTamaño(id, color){

  var circulo = document.querySelector(`#${id}`);
  circulo.style = 'width: 75px; height: 75px; transition: all 0.2s';
  cambiarColor(color, id);
  
 
}
function cambiarColor(color, id){
  var circulo = document.querySelector(`#${id}`);
  circulo.style = `width: 75px; height: 75px; transition: all 0.2s; background:${color}`;

  
}
function tamañoNormal(id) {
  var circulo = document.querySelector(`#${id}`);
  circulo.style = 'width: 65px; height: 65px; transition: all 0.2s';


}

  return (
    <div id={props.id}  className='circulo' 
     onClick={() =>{!clickeado ? aumentarTamaño(props.id, props.color) : tamañoNormal(props.id);  ;  setClickeado(!clickeado);}} >
      {!clickeado ? <p className='spanPlusCirculos'>+</p> : ""}
     </div>
  )
}
