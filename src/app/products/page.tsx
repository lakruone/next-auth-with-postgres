type Product = {
    productId: number,
    price: number,
    title: string,
    completed: boolean,
}


const products = [
    {
        productId: 1,
        price: 700,
        title: "delectus aut autem",
        completed: false
      },
      {
        productId: 2,
        price: 200,
        title: "quis ut nam facilis et officia qui",
        completed: false
      },
      {
        productId: 3,
        price: 300,
        title: "delectus aut autem",
        completed: false
      },
      {
        productId: 4,
        price: 400,
        title: "quis ut nam facilis et officia qui",
        completed: false
      }
] 


const Products = async() => {
    console.log('products from server component');
    // await new Promise(resolve => setTimeout( resolve, 2000))
    // const response = await fetch('http://localhost:3001/products');
    // const response2 = await fetch('http://localhost:3001/products');


    // const products = await response.json()
    
    
  return (
    <>
        <h2>Products</h2>
        {products.map((product: Product) => (
            <div key={product.productId} className="border grid gap-2">
                <h3>{product.title}</h3>
                <p>{product.price}</p>
            </div>

        ))}
    </>
  )
}

export default Products