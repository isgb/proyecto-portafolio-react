import React from 'react'
import { Link } from 'react-router-dom'
import { ListadoTrabajos } from '../components/ListadoTrabajos'

export const Portafolio = () => {

  // console.log(trabajos)
  return (
    <div className='page'>
      <h1 className='heading'>Portafolio</h1>

      <ListadoTrabajos/>
      
    </div>
  )
}
