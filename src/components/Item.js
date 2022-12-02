import Link from "./Link"
const Item = ({products}) => {
  return (
    <div>

      <div className="cajaArticulo">
        <div className="cajaImagen">
          <img src={products.img} alt='' />
        </div>
        <div className="cajaDatos">
          <h3>{products.nombre}</h3>
          <p>$ {products.precio}</p>
          <p>Stock: {products.stock}</p>
          <Link className='linkVer' to={'/product/' + products.id}>Ver producto</Link>
        </div>
       
      </div>

    </div>
  )
}

export default Item