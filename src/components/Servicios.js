import React from 'react'

export const Servicios = () => {
  return (
    <div className='page'> 
        <h1 className='heading'>Servicios</h1>

        <section className='services'>
            <article className='service'>
                <h2>Diseño Web</h2>
                <p>Hago tu página web desde cero</p>
            </article>

            <article className='service'>
                <h2>Desarrollo Web</h2>
                <p>Creo tu página web desde cero</p>
            </article>

            <article className='service'>
                <h2>Posicionamiento Web</h2>
                <p>Hago que tu web aparezca en Google y la vea la gente.</p>
            </article>
        </section>
    </div>
  )
}
