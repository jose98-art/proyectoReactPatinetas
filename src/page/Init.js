import pre1 from '../assets/ImageCollaje/pre1.jpg'
import pre2 from '../assets/ImageCollaje/pre2.jpg'
import pre3 from '../assets/ImageCollaje/pre3.jpg'
import pre4 from '../assets/ImageCollaje/pre4.jpg'
import pre5 from '../assets/ImageCollaje/pre5.jpg'
import aprende from '../assets/ImageCollaje/aprende.jpg'
import React from 'react'
const init = () => {
  return (
    <div >
      
      <div className='posicionContent cajaPrincipal'>
        <div className='primerNivel'>
        <div className='imgagenAprende'>
          <img className='imgAprende' src={aprende}/>
          <div className='imgAnumcio'>
            <h1>¡Ven y prende a patinar con nosotros!</h1>
            <ul>
              <li>Horarios disponibles todo los días de la semana</li>
              <li>Contamos con 3 niveles</li>
              <li>Grupos reducidos</li>
              <li>Skatepark privado</li>
              <li>Costo del Módulo desde: $50.00 (5 clases) </li>
              <li>+52 55 33 55 33 55</li>
            </ul>
          </div>
        </div>
        <div className='contentCollage'>
          <img className='contentImg' src={pre1}/>
          <img className='contentImg' src={pre2}/>
          <img className='contentImg' src={pre3}/>
          <img className='contentImg' src={pre4}/>
          <img className='contentImg' src={pre5}/>
        </div>
        </div>
        <hr/>
        <div className='segundoNivel'>
          <div className='promociones'>
            <div className='promo promo1'>
              <div className='contaImg'>
              <img src='https://res.cloudinary.com/dl4ui6tel/image/upload/v1668231042/tabla16_okavly.jpg'/>
              </div>
              <div className='info'>
                <h1>Patineta</h1>
                <p>Rose and Blakc</p>
                <p>Antes <span>$1600.00</span> </p>
                <p>Ahora: $1490.00</p>
              </div>
            </div>
            <div className='promo promo2'>
              <div className='contaImg'>
              <img src='https://res.cloudinary.com/dl4ui6tel/image/upload/v1668231048/tenis2_xolptk.jpg '/>
              </div>
              <div className='info'>
              <h1>Vans</h1>
                <p>Old Skool Negro HY28</p>
                <p>Antes <span>$1650.00</span> </p>
                <p>Ahora: $1450.00</p>
              </div>
            </div>
          </div>
          <div className='favorit'>
            
          </div>
        </div>

        <hr/>

        <div className='tercerNivel'>
          <ul>
            <li><i class="fa-regular fa-truck-fast"></i> <span>  ENVÍOS A TODO MÉXICO</span></li>
            <li><i class="fa-regular fa-headset"></i> <span> ATENCIÓN PERSONALIZADA</span> </li>
            <li><i class="fa-solid fa-shield"></i> <span>COMPRAS 100% SEGURAS</span>  </li>
            <li><i class="fa-solid fa-repeat"></i> <span> CAMBIOS SIN COSTO</span> </li>
            <li><i class="fa-solid fa-award"></i> <span>  GARANTÍA 100%</span></li>
          </ul>
        </div>
        
      </div>
      
    </div>
  )
}

export default init
