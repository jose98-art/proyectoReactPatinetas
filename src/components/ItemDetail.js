import { useState } from 'react'
import Link from './Link';
import { useCartContext } from '../app/CartContext'
import ItemCount from '../components/ItemCount'
const ItemDetail = ({product}) => {
  const [cantProduc, setCantProduc] = useState(false)
  const {addProduct} = useCartContext()

  const onAdd = (quantity) => {
    setCantProduc(true)
    addProduct(product, quantity)
  }
  return (
    <div >
      <div className='cardProduct'>
        <div className='cardImg'>
          <img src={product.img}/>
        </div>
        <div className='infoCard'>
          <h1>$ {product.precio}</h1>        
          <p>{product.nombre}</p>   
          <p >Stock: {product.stock}</p>     
          {
            cantProduc
              ?<Link className='btnVer btnLin' to='/cart'>Agregar al carrito</Link>
              :<ItemCount stock={product.stock} onAdd={onAdd}/>
          }
        </div>
      </div>
    </div>
  )
}

export default ItemDetail
