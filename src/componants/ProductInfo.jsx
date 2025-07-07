const ProductInfo = () => {
    const product = {
        name: "Laptop",
        price: 500,
        availability: "In Stock",
    }

  return <div>
      <h1>Name: {product.name}</h1>
      <h1>price: {product.price}$</h1>
      <h1>availability: {product.availability}</h1>
  </div>
}

export default ProductInfo