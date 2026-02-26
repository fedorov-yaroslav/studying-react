function Product({title, price, inStock}){
  return (
      <>
        <div className = "product">
          <p>{title}</p>
          <p>Стоиомость: {price} ₽ </p>
          <p>{inStock ? 'В наличии' : 'Нет в наличии'}</p>
        </div>
      </>
  )
}

export default Product