import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import {getFirestore, collection, getDocs, query, where} from 'firebase/firestore';
import ItemList from './ItemList'
import Swal from 'sweetalert2';

const ItemListContainer = () => {
  const [catalogo, setCatalogo] = useState([])
  const {idCategoria} = useParams()

  useEffect(()=>{
    const querydb = getFirestore()
    const queryCollection = collection(querydb, 'productos')
    Swal.fire({
      title:' Cargando... ',
      showConfirmButton: false,
      didOpen:()=>{
          Swal.showLoading()
      },
      timer:2000,
  })
    new Promise((resolve, reject) =>{
        setTimeout(() => {
            resolve(
              idCategoria
              ?getDocs(query(queryCollection, 
                where('categoria','==', Number(idCategoria))))
                .then(res => 
                  setCatalogo(res.docs.map(product => 
                    ({
                      id: product.id, ...product.data()
                    }))))
                    :getDocs(queryCollection)
            .then(res => 
              setCatalogo(res.docs.map(product => ({
                id: product.id, ...product.data()
              })))))
        },2000 );
    })
  },[idCategoria])
  return (
    <div>
      <ItemList catalogo={catalogo} />
    </div>
  )
}

export default ItemListContainer
