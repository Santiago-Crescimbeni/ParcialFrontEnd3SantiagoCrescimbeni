import React from 'react'

const Card = ({animales}) => {
  

  return (
    <div>
    <h3>Su perro se llama : {animales.nombre} </h3>
    <h3>Su sonido es:  {animales.sonido}</h3>
    <h3>De Raza: {animales.raza}</h3>
    <h3>Tipo: {animales.tipo}</h3>
    
    </div>
  )
}

export default Card