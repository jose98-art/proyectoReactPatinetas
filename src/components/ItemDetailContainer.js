import { useState,useEffect } from 'react'
import React from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail';
import {getFirestore, doc, getDoc} from 'firebase/firestore';

const ItemDetailContainer = () => {
  const {idProduct} = useParams()
  const [producto, setProducto] = useState([])

  useEffect(()=>{
      getDoc(doc(getFirestore(), 'productos',idProduct))
      .then(res => setProducto({id: res.id, ...res.data()}))
  },[])
  
  return (
    <div className='cajaCardProduct'>
      <ItemDetail product={producto}/>
    </div>
  )
}

export default ItemDetailContainer