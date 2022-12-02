import React from "react"
export const LoginCart = ({compra,idCompra}) => {

  return (
    <div className='posicionContent pedido' >
    
      <h5>Envío 3 día hábil</h5>
      <h4>Tus pedido esta en proceso y seran enviados con los siguientes datos:</h4>
      <div>
        <p> <span>Nombre: </span> {compra.nombre} </p>
        <p> <span>Ciudad: </span>  {compra.ciudad} </p>
        <p> <span>Dirección: </span> {compra.direccion} </p>
        <p> <span>Email: </span> {compra.email} </p>
        <p> <span>Cel: </span> {compra.cel} </p>
      </div>
       <h2> <span>Total: $ </span> {compra.total}.00 </h2>
        <p> ID de compra : <span>{idCompra}</span> </p>
    </div>
  )
}
