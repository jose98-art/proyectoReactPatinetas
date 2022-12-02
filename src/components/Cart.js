import React, { useState } from 'react'
import {addDoc, collection, getFirestore} from 'firebase/firestore';
import { useCartContext } from '../app/CartContext'
import ItemCart from './ItemCart'
import Link from './Link'
import { LoginCart } from '../components/LoginCart';

const Cart = () => {
    const {totalPrice,cart,clearCart} = useCartContext()

    const [comprado, setComprado] = useState(false)
    const  [idCompra, setIdCompra] = useState()
    
    const orden = {
        product : cart.map(product => ({id: product.id, title: product.nombre, price: product.precio, quantity: product.quantity})),
        total: totalPrice(),
    }

    const [dateBuyer, setDateBuyer] = useState(orden)

    const inputDate = (e) => {
        const {name, value} = e.target
        setDateBuyer({...dateBuyer, [name]: value})
    }

    const handlClick = () => {
        const db = getFirestore()
        const orderCollection = collection(db, 'orders')
        addDoc(orderCollection, dateBuyer)
            .then(({id}) => setIdCompra(id))
            clearCart()
            setComprado(true)
    } 
    if(cart.length <= 0){
        return (
            <div className='posicionContent'>
            {
                comprado ?<LoginCart compra={dateBuyer} idCompra={idCompra}/> : 
                <div className='posicionContent cajaMessag'>
                    <h1>Carrito Vacío</h1>
                    <Link className='carritoReturn' to='/page/1'>Hacer compras</Link>
                </div>
            }
            </div>
        )
    }

    return (
        <div>
            <div className='submenu'>
                <p>Producto</p>
                <p>Cantidad</p>
                <p>Precio unitario</p>
                <p>Subtotal</p>
                <p>Eliminar </p>
            </div>
            {
                cart.map(product => <ItemCart key={product.id} product={product}/>)
            }
            <form className='cajaForm'>
                <div className='containerInput'>
                    <label htmlFor='nombre'>Nombre completo</label>
                    <input name='nombre' onChange={inputDate} value={dateBuyer.name}
                    id='nombre' type='text' placeholder='Nombre del cliente'/>
                </div>

                <div className='containerInput'>
                    <label htmlFor='email'>Email</label>
                    <input name='email' onChange={inputDate} value={dateBuyer.email}
                    id='email' type='email' placeholder='Email'/>
                </div>

                <div className='containerInput'>
                    <label htmlFor='calle'>Dirección</label>
                    <input name='direccion' onChange={inputDate} value={dateBuyer.direccion}
                    id='calle' type='text' placeholder='Dirección completo'/>
                </div>

                <div className='containerInput'>
                    <label htmlFor='ciudad'>Ciudad</label>
                    <input name='ciudad' onChange={inputDate} value={dateBuyer.ciudad}
                    id='ciudad' type='text' placeholder='Ciudad'/>
                </div>

                <div className='containerInput'>
                    <label htmlFor='cel'>Número Celular</label>
                    <input name='cel' onChange={inputDate} value={dateBuyer.cel}
                    id='cel' type='text' placeholder='Número telefonico'/>
                </div>
              
            </form>
         
            <div className='pagar'>
                <h1>Total: $ {totalPrice()}</h1>
                <button type='submit' className='pagarOVaciar' onClick={handlClick} >Terminar compra</button>
                <button className='pagarOVaciar' onClick={() => clearCart()}>vaciar</button>
            </div>
            
        </div>
  )
}

export default Cart
