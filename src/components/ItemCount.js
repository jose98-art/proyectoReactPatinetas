import { useState } from 'react'
import React from 'react'

const ItemCount = ({stock, onAdd}) => {
    const [contador, setContador] = useState(0)

    const sumar = () => {
      if(contador < stock){
        setContador(contador + 1)
      } 

    }
    const restar = () => {
        if(contador > 0)
        setContador(contador -1)

    }
   
  return (
    <div>
       <div className='btnCaja'>
         <div className='cajabtn'>
            <button className='btn' onClick={restar}>-</button>
                <span className='countNumber'>{contador}</span>
            <button className='btn' onClick={sumar}>+</button>
         </div>

            <button className='btnVer' onClick={() => onAdd(contador)}>
              Terminar compra
            </button>
       </div>
    </div>
  )
}

export default ItemCount
