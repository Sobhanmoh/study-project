const ProdoctList = () => {
    const products = [
        {id: 1, Name: "iPhone", Price: "500"},
        {id: 2, Name: "Phone", Price: "450"},
        {id: 3, Name: "PC", Price: "1000"},
    ]


  return <div>
    { products.map(p => (
        <div key={p.id}>
            <h1>Name: {p.Name}</h1>
            <h1>Price: ${p.Price}</h1>
        </div>
    )) }
  </div>
}

export default ProdoctList