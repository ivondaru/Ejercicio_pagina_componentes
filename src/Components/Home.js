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
            <articulo className='hs' ><img src = {Imagen}></img><BasicButtons/></articulo>    
            <articulo className='ha'><p>"Siempre cuidalo y respetalo"</p></articulo>
        </section>
            
        <section className='perro'>
            <articulo className='ha'><p>"Ten, en cuenta sus necesidades"</p></articulo>
            <articulo className='hs'><img src = {Imagene}></img><ButtonSizes/></articulo>
        </section>

        <section className='perro'>
            <articulo className='ha'><p>"Tú compañía es lo que prefieren</p></articulo>
            <articulo  className='hs'><img src = {Imagenes}></img><ContainedButtons/></articulo>
        </section>
              
        <section className='perro'>
            <articulo className='hs'><img src = {Imagenese}></img><ColorButtons/></articulo>
            <articulo className='ha'><p>"Brindale, amor y serás recompensado"</p></articulo>
        </section>
      </div>  
    </div>
  )
}

export default Home
