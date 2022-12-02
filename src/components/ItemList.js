import Item from "./Item"

const ItemList = ({catalogo}) => {

  return (
    <div className="containerProdTabla posicionContent">
      {catalogo.map(products =>{
        return <Item products={products} key={products.id}/>
      })}
    </div>
  )
}

export default ItemList
