import React from 'react'
import { trabajos } from '../data/trabajos'
import { Link } from 'react-router-dom'

export const ListadoTrabajos = ({limite = 4}) => {

  // console.log(trabajos)
  return (
      <section className='works'>
      {
        trabajos.slice(0,limite).map(trabajo => (
          <article key={trabajo.id} className='work-item'>
            <div className='mask'>
              <img src={"/imagenes/"+trabajo.id+".png"}/>
            </div>
            <span>{trabajo.categorias}</span>
            <h2><Link to={"/proyecto/"+trabajo.id}>{trabajo.nombre}</Link></h2>
            <h3>{trabajo.tecnologias}</h3>
          </article>
        ))
      }
      </section>
    
  )
}
