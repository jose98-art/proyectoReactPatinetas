import React from 'react'
import { useCartContext } from '../app/CartContext'

const ItemCart = ({product}) => {
    const {removeCart} = useCartContext([])
  return (
    <div>

  <div>
  <div className=' containerCarrito'>
    
      <div className='carContainer'>
          <div className='casillas carImagen'>
              <div className='imgCompra'>
                  <img src={product.img}/>
                  <p>{product.nombre}</p>
              </div>
          </div>
          <div className='casillas carCantidad'>
              <p>
                  {product.quantity} 
              </p>
             
          </div>
          <div className='casillas'>
                <p>
                    $ {product.precio}
                </p>
          </div>
          <div className='casillas carSubtotal'>
              <p>
                  $ {product.quantity * product.precio}
              </p>
          </div>
          <div className='casillas carEliminar'>
              <p onClick={() => removeCart(product.id)}><i class="fa-solid fa-trash"> </i></p>
          </div>
      </div>
      <hr/>
  </div>
</div>
    </div>
  )
}

export default ItemCart
