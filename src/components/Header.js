import React from 'react'
import imgPaleta from '../img/paleta.png'

export default function Header() {
  return (
    <div className='header'>
        <img src={imgPaleta}></img>
        <h1>Color palette generator</h1>
    </div>
  )
}
