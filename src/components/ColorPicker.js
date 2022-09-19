import React, {useState} from 'react';
import {CompactPicker} from 'react-color';
import NombrePaleta from './NombrePaleta';
import Circulo from './Circulo';

export default function ColorPicker(props) {
    const [color, setColor] = useState('#ff0000');

     
  return (
        <>
    <div className='circulos'>
     <Circulo id="c1" color = {color} ></Circulo>
     <Circulo id="c2" color = {color} ></Circulo>
     <Circulo id="c3" color = {color}  ></Circulo>
     <Circulo id="c4" color = {color} ></Circulo>
     <Circulo id="c5" color = {color} ></Circulo>

    </div>
      <div className='colorPicker'  >
        <CompactPicker
        color = {color}
        
        onChangeComplete = { (color) => {setColor(color.hex)}}
        />
        <NombrePaleta></NombrePaleta>
    </div>
    </>
  )
}
