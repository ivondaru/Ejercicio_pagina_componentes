import React from 'react'
import Imagen from '../Assets/perrito.jpg'
import Imagene from '../Assets/perrito1.jpg'
import Imagenes from '../Assets/perrito2.jpg'
import Imagenese from '../Assets/perrito3.jpg'
import BasicButtons from './BasicButtons'
import ButtonSizes from './Sizes'
import ColorButtons from './Color'
import ContainedButtons from './ContainedButton'


function Home () {
  return (
    <div className='titulo'>
      <h1>"El perro es el mejor amigo del hombre"</h1>

      <div className='container'>  
        <section className='perro'>
            
            <articulo><img src = {Imagen}></img></articulo>    
            <BasicButtons/>
            <articulo><p>"Siempre cuidalo y respetalo"</p></articulo>
        </section>
            
        <section className='perro'>
            <articulo><p>"Ten, en cuenta sus necesidades"</p></articulo>
            <ButtonSizes/>
            <articulo><img src = {Imagene}></img></articulo>
        </section>

        <section className='perro'>
            <articulo><p>"Tú compañía es lo que prefieren</p></articulo>
            <ContainedButtons/>
            <articulo><img src = {Imagenes}></img></articulo>
        </section>
              
        <section className='perro'>
            <ColorButtons/>
            <articulo><img src = {Imagenese}></img></articulo>
            <articulo><p>"Brindale, amor y serás recompensado"</p></articulo>
        </section>
      </div>  
    </div>
  )
}

export default Home
